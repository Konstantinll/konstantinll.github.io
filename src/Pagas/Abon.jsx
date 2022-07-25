import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import './Abon.css';


export default class Raspis extends Component {
    render() {
        return (
            <div className="zadnik">
                <Container className="pstr">
                    <div className="perednik">
                        <h2 className="zagolovok2">Абонементы</h2>
                        <div className="colu">
                            <div className="kart">

                                <div className="abon_a"></div>
                                <div className="abon_text"> Подойдёт тем, кто был у нас и хочет освежить знания, подтянуть технику, если уже пропустил 2 занятия по абонементу и хочет догнать группу.</div>
                                <div className="f_text">
                                    <div className="colu">
                                        <div>
                                            Всего за
                                        </div>
                                        <div className="zena_b">
                                            1000₽
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="bat" variant="outline-info">Записаться</button>
                                </div>
                            </div>
                            <div className="kart">
                                <div className="abon_b"></div>
                                <div className="abon_text">В него входит 4 занятия, включая первое, по 2 часа 1 раз в неделю. Пропускать занятия нельзя, но в индивидуальном порядке возможно найти компромисс.</div>
                                <div className="f_text">
                                    <div className="colu">
                                        <div>
                                            Всего за
                                        </div>
                                        <div className="zena_b">
                                            1200₽
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="bat" variant="outline-info">Записаться</button>
                                </div>
                            </div>
                            <div className="kart">
                                <div className="abon_c"></div>
                                <div className="abon_text"> Занятие идёт около 2 часов. + в общий чат присылаем разбор видео с занятий, отвечаем на все вопросы и подробно в течении урока - мощная обратная связь!
                                    Одно занятие в неделю. Можно пропустить 2 занятия - мы все люди</div>
                                <div className="f_text">
                                    <div className="colu">
                                        <div>
                                            Всего за
                                        </div>
                                        <div className="zena_b">
                                            3800₽
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="bat" variant="outline-info">Записаться</button>
                                </div>
                            </div>
                        </div>
                        <div className="colu">
                            <div className="kart">
                                <div className="abon_d"></div>
                                <div className="abon_text"> У вас уже есть партнёр? Отлично! Абонемент сразу для двоих хороший способ отлично провести время вместе и сэкономить.</div>
                                <div className="f_text">
                                    <div className="colu">
                                        <div>
                                            Всего за
                                        </div>
                                        <div className="zena_b">
                                            6800₽
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="bat" variant="outline-info">Записаться</button>
                                </div>
                            </div>
                            <div className="kart">
                                <div className="abon_e"></div>
                                <div className="abon_text"> Идеально подойдёт для робких учеников, которые волнуются влиться так сразу в новый коллектив. Для тех, кому особенно важно внимание и для тех, кто хочет максимальную обратную связь.</div>
                                <div className="f_text">
                                    <div className="colu">
                                        <div>
                                            Всего за
                                        </div>
                                        <div className="zena_b">
                                            2000₽
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="bat" variant="outline-info">Записаться</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        )
    }
}
