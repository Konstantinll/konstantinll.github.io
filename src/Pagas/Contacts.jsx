import React, { Component } from "react";
import { Container } from "react-bootstrap";


export default class Contacts extends Component {
    render() {
        return (
            <div className="zadnik">
                <Container className="pstr">
                    <div className="perednik">
                        <h2 className="zagolovok2">Контакты</h2>
                        <div className="texpa">
                            <div className="colu">
                                <div className="stexr">
                                    <p>Занятия проходят по адресу:</p>
                                    ул. Киришская, д.2 , Санкт-Петербург
                                </div>
                                <div className="stexr">
                                    <p>Телефон для записи:</p>
                                    +7 (921)975-20-25
                                </div>
                                <div className="stexr">
                                    <p>Наша группа во Вконтакте:</p>
                                </div>
                            </div>
                        </div>
                        <div><a href="https://yandex.ru/maps/org/fortuna/1436844007/?utm_medium=mapframe&utm_source=maps">Фортуна</a><a href="https://yandex.ru/maps/2/saint-petersburg/category/dance_school/184105924/?utm_medium=mapframe&utm_source=maps">Школа танцев в Санкт‑Петербурге</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUNmKXokD" width="100%" height="400" frameborder="1" allowfullscreen="true"></iframe></div>
                    </div>
                </Container>
            </div>
        )
    }
}
