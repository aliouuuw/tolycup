
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
                API_KEY: "bcdb5be577d9b16277346ae5deb8284f6d11bdf370d84ebb39e77b26658c3f71",
                API_SECRET: "5097977dc575e54ba7f489ae0cf72a4cf9104532bfb30fb0d3949ce8372216fc",
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