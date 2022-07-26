import React, { Component } from "react";
import { Container } from "react-bootstrap";
import './Prepod.css';


export default class Prepod extends Component {
    render() {
        return (
            <div className="zadnik">
                <Container className="pstr">
                    <div className="perednik">
                        <h2 className="zagolovok2 mb-5">Преподаватели</h2>
                        <div className="colu">
                            <div className="andrei"></div>

                            <div className="kart4">

                                <div className="zagolovok3">Андрей Васильев</div>
                                <p>
                                    Танцы - несомненно, арт-терапия и поможет:<br />
                                    - Стать уверенней.<br />
                                    - Выйти из депрессии.<br />
                                    - Пережить расставание.<br />
                                    - Снять/уменьшить стресс.<br />
                                    - Внести разнообразие в жизнь.<br />
                                    И прочее...
                                </p>

                            </div>
                        </div>
                        <div className="colu">
                            <div className="kart4">
                                <div className="zagolovok3">Татьяна Чертушкина</div>
                                <p>
                                    Танцы - несомненно, арт-терапия и поможет:<br />
                                    - Стать уверенней.<br />
                                    - Выйти из депрессии.<br />
                                    - Пережить расставание.<br />
                                    - Снять/уменьшить стресс.<br />
                                    - Внести разнообразие в жизнь.<br />
                                    И прочее...
                                </p>
                            </div>

                            <div className="tatiyana"></div>

                        </div>

                    </div>
                </Container>
                <div className="last_p">
                    <div className="colu">
                        <div className="kart2">

                            <h1 className="zagolovok1">Школа бачаты в Санкт-Петербурге<br /> Запишитесь на пробный танец в воскресенье</h1>
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
                                <button className="bat" type="submit">Записаться</button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
