import React from 'react'
import './Otzv.css'
import { Carousel } from 'react-bootstrap'

const Otzv = () => {
    return (
        <div className="perednik" id="9n">
            <h2 className="zagolovok2">Отзывы</h2>
            <Carousel variant="dark">
                <Carousel.Item>
                    <div className='otz_a'>
                        <img
                            height='300px'
                            src="https://github.com/Konstantinll/konstantinll.github.io/blob/master/src/Pictures/bg_feedback/bg_feedback_a.jpg?raw=true"
                            alt="otz1"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='otz_a'>
                        <img
                            height='300px'
                            src="https://github.com/Konstantinll/konstantinll.github.io/blob/master/src/Pictures/bg_feedback/bg_feedback_b.jpg?raw=true"
                            alt="otz2"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='otz_a'>
                        <img
                            height='300px'
                            src="https://github.com/Konstantinll/konstantinll.github.io/blob/master/src/Pictures/bg_feedback/bg_feedback_c.jpg?raw=true"
                            alt="otz3"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='otz_a'>
                        <img
                            height='300px'
                            src="https://github.com/Konstantinll/konstantinll.github.io/blob/master/src/Pictures/bg_feedback/bg_feedback_d.jpg?raw=true"
                            alt="otz4"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='otz_a'>
                        <img
                            height='300px'
                            src="https://github.com/Konstantinll/konstantinll.github.io/blob/master/src/Pictures/bg_feedback/bg_feedback_e.jpg?raw=true"
                            alt="otz5"
                        />
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Otzv