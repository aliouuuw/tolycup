import React, { useRef } from "react";
import {toast} from "react-hot-toast";

import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const validSchema = yup.object().shape({
    userName: yup.string().required("Required"),
    userEmail: yup.string().email("Invalid email").required("Required"),
    userMessage: yup.string().required("Required"),
});


const Contact = () => {
    //const form = useRef();
    let serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
    let templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    let userId = process.env.NEXT_PUBLIC_USER_ID;


    const formOptions = {
        resolver: yupResolver(validSchema),
    };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        sendEmail();
        console.log(data);
        return false;
    }
    const sendEmail = () => {
        e.preventDefault();



        emailjs
            .sendForm(
                `${serviceId}`,
                `${templateId}`,
                form.current,
                `${userId}`
            )
            .then(
                (result) => {
                    toast.success(`Your message was successfully sent!`);
                    document.getElementById('myForm').reset();
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact-form-container">
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input style={{border: errors?.userName ? '2px solid red' : ''}} type="text" name="userName" {...register('userName')}/>
                <p className="red">{errors?.userName?.message}</p>

                <label>Email</label>
                <input style={{border: errors?.userEmail ? '2px solid red' : ''}} type="email" name="userEmail" {...register('userEmail')}/>
                <p className="red">{errors?.userEmail?.message}</p>

                <label>Message</label>
                <textarea style={{border: errors?.userMessage ? '2px solid red' : ''}} name="userMessage" {...register('userMessage')}/>
                <p className="red">{errors?.userMessage?.message}</p>

                <input type="submit" id="submit" value="Send"/>
            
            </form>

        </div>
    );
};

export default Contact;