import React from 'react';

const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <div className="d-flex justify-content-center my-5">
            <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2019</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta harum incidunt laborum maxime, minima nisi non odio omnis pariatur quae repudiandae saepe similique tempore, tenetur ullam velit veritatis voluptate voluptates voluptatum? Dolores eius et eveniet laboriosam obcaecati porro, velit?</p>
                    </div>
                </div>


                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2008-2018</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta harum incidunt laborum maxime, minima nisi non odio omnis pariatur quae repudiandae saepe similique tempore, tenetur ullam velit veritatis voluptate voluptates voluptatum? Dolores eius et eveniet laboriosam obcaecati porro, velit?</p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2005-2008</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta harum incidunt laborum maxime, minima nisi non odio omnis pariatur quae repudiandae saepe similique tempore, tenetur ullam velit veritatis voluptate voluptates voluptatum? Dolores eius et eveniet laboriosam obcaecati porro, velit?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;