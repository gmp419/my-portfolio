import React from 'react'
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


const Contact = () => {

    const {register, handleSubmit, formState: { errors }  } = useForm();

    const [succesMessages, setSuccesMessages] = React.useState("");

    const service_id = 'service_uqg5r6s';
    const template_id = 'template_kulawik';
    const user_id = 'user_sxHjD8ro392o1TqxWlvbh';

    const onSubmit = (data, r) => {
        sendEmail(
            service_id, 
            template_id,
            {
            name: data.name,
            email: data.email,
            contact: data.contact,
            subject: data.subject,
            details: data.details
            },
            user_id
        )
        r.target.reset();

    }

    const sendEmail = (service_id, template_id, variables, user_id) => {
  
      emailjs.send(service_id, template_id, variables, user_id)
        .then(() => {
            setSuccesMessages("Email Sent Succesfully! I'll contact you ASAP.");
        }).catch(err => console.error('Failed to send feedback. Error: ', err));
    };
  
    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form and describe your project needs and I will be in touch with you ASAP.</p>
                <span className="success-message">{succesMessages}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input
                                id="name"
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                type="text"
                                aria-invalid={errors.name ? "true" : "false"}
                                {...register("name", {
                                    required: "Please enter your name",
                                    maxLength: {
                                    value: 20,
                                    message:
                                        "Please enter a name with fewer than 20 characters",
                                    },
                                })}
                            />
                            <div className="line"></div>
                        </div>
                            <span className="error-message ">
                                {errors.name && errors.name.message}
                            </span>    

                        <div className="text-center">
                            <input
                                id="contact"
                                className="form-control"
                                placeholder="Enter your contact details"
                                name="contact"
                                type="text"
                                aria-invalid={errors.contact ? "true" : "false"}
                                {...register("contact", {
                                    required: "Please enter your contact details",
                                    maxLength: {
                                    value: 10,
                                    message:"Please enter a contact with fewer than 10 characters",
                                    },
                                })}
                            />
                            <div className="line"></div>
                        </div>
                            <span className="error-message">
                                {errors.contact && errors.contact.message}
                            </span>
                        
                        <div className="text-center">
                            <input
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                name="email"
                                type="email"
                                aria-invalid={errors.email ? "true" : "false"}
                                {...register("email", {
                                    required: "Please enter your email",
                                    maxLength: {
                                    value: 20,
                                    message:"Please enter valid email",
                                    },
                                })}
                            />
                            <div className="line"></div>
                        </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                        <div className="text-center">
                            <input
                                id="subject"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                type="text"
                                aria-invalid={errors.subject ? "true" : "false"}
                                {...register("subject", {
                                    required: "Please enter subject",
                                    maxLength: {
                                    value: 20,
                                    message:"Please enter a subject with fewer than 20 characters",
                                    },
                                })}
                            />
                            <div className="line"></div>
                        </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                        <textarea
                            id="details"
                            className="form-control"
                            placeholder="Details"
                            name="details"
                            type="text"
                            aria-invalid={errors.details ? "true" : "false"}
                            {...register("details", {
                                required: "Please enter details",
                                maxLength: {
                                value: 100,
                                message:"Please enter a details with fewer than 100 characters",
                                },
                            })}
                        >
                        </textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.details && errors.details.message}
                        </span>
                        <button 
                            className="btn btn-main-header btn-dark contact-btn"
                            type="submit"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
