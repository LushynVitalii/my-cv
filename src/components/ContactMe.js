import React from 'react';

const ContactMe = () => {
    return (
        <div className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out the form and I will contact you as soon as possible</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Name'
                            name='name'/>
                        <div className="line"></div>
                        <input
                            type='tel'
                            className='form-control'
                            placeholder='Phone Number'
                            name='phone'
                            pattern='[0-9]{10}'/>
                        <div className="line"></div>
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
                            type='submit'
                            id='description'
                            className='form-control'
                            placeholder='Type here your message'
                            name='subject'/>
                        <div className="line"></div>
                        <button className="btn-main-offer contact-btn" type='submit'>contact me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;