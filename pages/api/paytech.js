
export default async function handler(req, res) {

    let paymentRequestUrl = "https://paytech.sn/api/payment/request-payment";
    if (req.method === 'POST') {
        try {
            let params = {
                item_name: req.body.cartItems.map(item => item.name).join(','),
                item_price: req.body.totalPrice,
                currency: "CAD",
                ref_command: req.body.commandRef,
                command_name: "Payment of Your Cupcakes",
                env: "test",
                ipn_url: 'https://paytech.sn/app/home',
                success_url: `${req.headers.origin}/`,
                cancel_url: `${req.headers.origin}/`,
            };

            let headers = {
                Accept: "application/json",
                'Content-Type': "application/json",
                API_KEY: process.env.NEXT_PUBLIC_PAYTECH_API_KEY,
                API_SECRET: process.env.NEXT_PUBLIC_PAYTECH_API_SECRET,
            };

            const session = await fetch(paymentRequestUrl, {
                method: 'POST',
                body: JSON.stringify(params),
                headers: headers
            });
            const result = await session.json();
            res.status(200).json(result);
        } catch (error) {
            res.status(err.statusCode || 500).json(err.message);
        }
    }
    else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }

}