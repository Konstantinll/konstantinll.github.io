import React, { Component } from "react";
import { Container } from "react-bootstrap";


export default class Contacts extends Component {
    render() {
        return (
            <div className="zadnik">
                <Container className="pstr">
                    <div className="perednik">
                        <div className="kart1">
                            <h2 className="zagolovok2 mb-5">Контакты</h2>
                            <div className="colu mb-5">Танцуем каждое воскресенье 14:00-16:00, заходите!</div>
                            <div className="colu">
                                <div className="stexr mb-5">
                                    <p>Занятия проходят по адресу:</p>
                                    <p>м. Гражданский проезд, ул. Киришская, д.2</p>
                                    м. Гражданский проезд, ул. Учительская 14/2
                                </div>
                                <div className="stexr mb-5">
                                    <p>Телефон для записи:</p>

                                    <a className="normal_link" href="tel:+7(921)975-20-25" target='_blank'>
                                        <div className="colu">
                                            <div className="ico_tele"></div>
                                            <div className="mx-2">+7 (921)975-20-25</div>
                                        </div>
                                    </a>

                                </div>
                                <div className="stexr mb-5">
                                    <p>Наша группа во Вконтакте:</p>

                                    <a className="normal_link" href="https://vk.com/pionerskaya_bachata_spb" target='_blank'>
                                        <div className="colu">
                                            <div className="ico_vk"></div>
                                            <div className="mx-2">Школа бачаты в Санкт-Петербурге</div>
                                        </div>
                                    </a>

                                </div>
                            </div>
                            <div className="colu  mb-5">Бачата — поднимет настроение и раскроет ваш внутренний потанцевал</div>
                        </div>
                        <div>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Add71aee04f95c4e2b741c5399e861bca0070c9e93bf1790a2274c43291ecd22d&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
