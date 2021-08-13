import React, {useState} from 'react'
import emailJs from 'emailjs-com'
import {useForm} from 'react-hook-form'

const ContactMe = () => {

    const [successMessage, setSuccessMessage] = useState('')
    const {register, handleSubmit, formState: { errors }, reset } = useForm()

    const serviceID = 'service_ID';
    const templateId = 'template_ID';
    const userID = 'user_Gqbm34MtNy5Nr25xpXphU';

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateId,
            {
                name: data.name,
                phone: data.phone,
                email:data.email,
                subject: data.subject,
                message: data.message
            },
            userID
        )
        r.target.reset();
        reset();
    }

    const sendEmail = (serviceid, templateid, variables, userid) => {

        emailJs.send(serviceid, templateid, variables, userid)
            .then(() => {
                setSuccessMessage('Your message was sent! I will contact you as soon as possible');
            }).then(() => {
                setTimeout(() => setSuccessMessage(''), 10000);
        }).catch(err => console.error(err));
    }


    return (
        <div id='contacts' className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p style={{margin: 40}}>Please fill out the form to send me a message</p>
                <span id='success-message-span' className='success-message'>{successMessage}</span>
            </div>
            <div className="container p-1">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Name'
                            name='name'
                            {...register('name',{
                                    required: 'Please enter your name',
                                     pattern:{
                                      value:/[A-Za-z]{3,20}/,
                                         message: 'Name must be between 3 and 20 characters'
                                     }
                             })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">{errors.name && errors.name.message}</span>

                        <div>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Phone Number'
                            name='phone'
                            {...register('phone',{
                                required: false
                            })}
                            />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">{errors.phone && errors.phone.message}</span>

                        <div>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Email'
                            name='email'
                            {...register('email',{
                                required: 'Please provide your email',
                                pattern:{
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    // this pattern from stackOverflow, but it gives a warning
                                    // value:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                    message: 'Email must look like NAME@GMAIL.COM'
                                }
                            })}
                            />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">{errors.email && errors.email.message}</span>

                        <div>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Subject'
                            name='subject'
                            {...register('subject',{
                                required: 'Please mention the subject',
                                minLength:{
                                    value: 5,
                                    message: 'Subject must contain at least 5 characters'
                                }
                            })}/>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">{errors.subject && errors.subject.message}</span>

                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div>
                        <textarea
                            className='form-control'
                            placeholder='Type here your message'
                            name='message'
                            {...register('message',{
                                required: 'Message must contain at least 5 characters'
                            })}/>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                        {errors.message && errors.message.message}</span>
                        <button className="btn-main-offer contact-btn" type='submit'>contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;