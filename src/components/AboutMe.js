import React from 'react'
import Author from '../images/my-photo.jpeg'

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className='profile-img'  src={Author} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='about-heading'>about me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, animi, beatae consequatur cum deleniti ea eligendi harum id impedit incidunt inventore natus odio officia quas quisquam saepe, sed voluptates. Consectetur eaque excepturi facilis non porro quae quasi quia quod ut voluptatem. Assumenda consequatur cupiditate debitis ducimus exercitationem fugit, ipsam ipsum iusto laudantium nam natus neque nihil nostrum nulla possimus quam quis quos rem repellat repellendus saepe sapiente vel velit, veniam voluptate. Ex fuga ipsa iste magni molestias natus veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae cumque in iure? Aut consequuntur ducimus ea earum eveniet magnam possimus quas sequi vitae voluptates. Amet beatae consectetur deserunt dignissimos error eveniet fuga, ipsum iure necessitatibus nisi odit officia optio quibusdam quidem rerum sint totam ut? Blanditiis, dolores expedita facilis fuga maxime non, nulla quam quo suscipit tempore temporibus totam. Architecto, aspernatur cum debitis deserunt et expedita illum ipsum maiores minus nisi nobis odio optio qui tempora vero vitae voluptatem!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;