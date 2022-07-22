import React from 'react'
import './Otzv.css'
import { Carousel } from 'react-bootstrap'

const Otzv = () => {
    return (
        <div className="perednik">
            <h2 id="9n" className="zagolovok2">Отзывы</h2>
            <Carousel variant="dark">
                <Carousel.Item >
                    
                        <div className='otz_a'>

                        </div>
                    
                </Carousel.Item>
                <Carousel.Item >
                    <div style={{ height: '35vh', display: 'flex', justifyContent: 'center' }}>
                        <img
                            height='60%'
                            src="https://sun9-74.userapi.com/impf/LhHeUb2RaXzU5R_8z9cEcfTOEehe3gMLrd36EQ/gRSeIQrAgpY.jpg?size=972x175&quality=96&sign=83aa609eb621ec02c4bdc2722de768bb&type=album"
                            alt="otz2"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div style={{ height: '35vh', display: 'flex', justifyContent: 'center' }}>
                        <img
                            height='80%'
                            src="https://sun9-44.userapi.com/impf/C2mzBR7UM1VIMjMSZn0EQxg3AxoM-PIc6lH4lg/7cgKliYcQ10.jpg?size=964x222&quality=96&sign=e881a9501851ceec8075567c0ca72220&type=album"
                            alt="otz3"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div style={{ height: '35vh', display: 'flex', justifyContent: 'center' }}>
                        <img
                            height='90%'
                            src="https://sun9-85.userapi.com/impf/vvb9Aa7-fuysmOrzKf9qJ-cQDRThYoGeAdOwIA/atcmnlgO3GA.jpg?size=977x294&quality=96&sign=1df700cdb329d6b8bba78550714d9a3f&type=album"
                            alt="otz4"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div style={{ height: '35vh', display: 'flex', justifyContent: 'center' }}>
                        <img
                            height='40%'
                            src="https://sun9-57.userapi.com/impf/iavexEMvFDmXWLMibK1oWb-HMjvRYztdbZD6Uw/qBPH4aynXrE.jpg?size=682x123&quality=96&sign=fa455568d6b7a3801f7689249324e478&type=album"
                            alt="otz5"
                        />
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Otzv