import React from 'react'
import { Container } from 'react-bootstrap'
import './Lasts.css'

const Lasts = () => {
    return (
        <div className="last">
            <Container>
                <div className="kart2">
                    <h2 className="zagolovok1">Приходите танцевать к нам в воскресенье!</h2>
                    <div>Пробное занятие отличный вариант для тех, кто хочет попробовать танцевать бачату. Приходи на пробное занятие и за 2 часа ты точно поймёшь твой ли это танец!</div>
                    <div className="f_text">
                        <div className="colu">
                            <div>
                                Всего за
                            </div>
                            <div>
                                <div className="zena_a">
                                    500₽
                                </div>
                                <div className="zena_b">
                                    200₽
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bat'>Записаться</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Lasts