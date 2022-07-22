import React, { Component } from "react";
import { Container } from "react-bootstrap";


export default class Prepod extends Component {
    render() {
        return (
            <div className="zadnik">
                <Container className="pstr">
                    <div className="perednik">
                    <h2 className="zagolovok2">Преподаватели</h2>
                        <div className="colu">
                            <div className="andrei"></div>

                            <div>
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
                            <div>
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
            </div>

        )
    }
}
