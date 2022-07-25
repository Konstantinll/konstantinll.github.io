import React from 'react'
import { Button } from 'react-bootstrap'
import './Znakomt.css'

const Znakomt = () => {
    return (
        <div className="perednik" id="8n">
            <h2 className="zagolovok2">Знакомтесь</h2>
            <div className="colu">
                <div className="kart3">
                    <div className="lico1"></div>
                    <div>
                        <h3 className="zagolovok3">Андрей</h3>
                        <p>
                            Танцую уже 16 лет.
                        </p>
                        <p>
                            Обучаю танцам 6 лет.
                        </p>
                    </div>
                    <div>
                        <Button variant="outline-info">Узнать лучше</Button>
                    </div>
                </div>
                <div className="kart3">
                    <div className="lico2"></div>
                    <div>
                        <h3 className="zagolovok3">Татьяна</h3>
                        <p>
                            Танцую уже 18 лет.
                        </p>
                        <p>
                            Обучаю танцам 7 лет.
                        </p>
                    </div>
                    <div>
                        <Button variant="outline-info">Узнать лучше</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Znakomt