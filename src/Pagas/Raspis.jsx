import React, { Component } from "react";
import { Container } from 'react-bootstrap'


export default class Raspis extends Component {
    render() {
        return (
            <div className="zadnik">
                <Container className="pstr">
                    <div className="perednik">
                        <h2 className="zagolovok2">Расписание</h2>
                        <div className="colu">
                            <div className="texpa">
                                <p>Танцуем каждое воскресенье 14:00-16:00, заходите!</p>
                                <p>По адресу: ул. Киришская, д.2 , Санкт-Петербург</p>
                            </div>
                            <div className="texpa">
                                <p>Телефон для записи:</p>
                                <p>+7 (921)975-20-25</p>
                            </div>
                            <div className="texpa">
                                <p>Наша группа во Вконтакте:</p>
                            </div>
                        </div>
                        <div className="colu">Бачата — поднимет настроение, раскроет ваш внутренний потанцевал</div>
                        <div className="colu">
                            <div className="kart">
                                <h3 className="zagolovok3">Пробное занятие</h3>
                            </div>
                            <div className="kart">
                                <h3 className="zagolovok3">Пробный абонемент</h3>
                            </div>
                            <div className="kart">
                                <h3 className="zagolovok3">Абонемент на 4 занятия</h3>
                            </div>
                        </div>
                        <div className="colu">
                            <div className="kart">
                                <h3 className="zagolovok3">Парный абонемент<br /> на 4 занятия</h3>
                            </div>
                            <div className="kart">
                                <h3 className="zagolovok3">Индивидуальное занятие</h3>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        )
    }
}
