import React from 'react'
import emailJs from 'emailjs-com'

const ContactMe = () => {


    const serviceID = 'service_ID'
    const templateId = 'template_ID'
    const userID = 'user_Gqbm34MtNy5Nr25xpXphU'

    const sendEmail = (e) => {
        e.preventDefault();

        emailJs.sendForm(serviceID, templateId, e.target, userID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out the form and I will contact you as soon as possible</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Name'
                            name='name'

                        />
                        <div className="line"></div>
                        {/*<span className="error-message"></span>*/}
                        {/*{errors.name && errors.name.message}*/}
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Phone Number'
                            name='phone'
                            />
                        <div className="line"></div>
                                <span className="error-message"></span>
                            {/*{errors.phone && errors.phone.message}*/}
                        <input
                            type='email'
                            className='form-control'
                            placeholder='Email'
                            name='email'/>
                        <div className="line"></div>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Subject'
                            name='subject'/>
                        <div className="line"></div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea
                            type='text'
                            className='form-control'
                            placeholder='Type here your message'
                            name='message'/>
                        <div className="line"></div>
                        <button className="btn-main-offer contact-btn" type='submit'>contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;