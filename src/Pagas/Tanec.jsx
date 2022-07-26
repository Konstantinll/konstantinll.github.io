import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";
import Iconsf from "../Components/Iconsf";
import Iconsl from "../Components/Iconsl";
import Lasts from "../Components/Lasts";
import Novznak from "../Components/Novznak";
import Otzv from "../Components/Otzv";
import Znakomt from "../Components/Znakomt";
import './Tanec.css';


export default class Tanec extends Component {
    render() {
        return (
            <div>
                <div className="first">
                    <Container>
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
                    </Container>
                </div >
                <div className="zadnik">
                    <Container>
                        <Iconsf />
                        <div className="perednik">
                            <h2 className="zagolovok2  mb-5" id="2n">Также на наши занятия</h2>
                            <div className="colu">
                                <div style={{ width: '800px' }}>
                                    <Carousel className="mt-3" variant="dark">
                                        <Carousel.Item >
                                            <div style={{ height: '55vh', display: 'flex', justifyContent: 'center' }}>
                                                <iframe title="video1" src="https://vk.com/video_ext.php?oid=69451431&id=456239879&hash=c9536c998a2e6385" width="535" height="300" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                            </div>


                                        </Carousel.Item>
                                        <Carousel.Item >
                                            <div style={{ height: '55vh', display: 'flex', justifyContent: 'center' }}>
                                                <iframe title="video2" src="https://vk.com/video_ext.php?oid=69451431&id=456239875&hash=a8ff085df9e2bac9" width="535" height="300" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item >
                                            <div style={{ height: '55vh', display: 'flex', justifyContent: 'center' }}>
                                                <iframe title="video3" class="embed-responsive-item" src="https://vk.com/video_ext.php?oid=69451431&id=456239889&hash=addcac87543135f2" width="535" height="300" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                            </div>
                                        </Carousel.Item>

                                    </Carousel>
                                </div>
                                <div className="str_t">
                                    <div className="stexr">
                                        <p>
                                            Необязательно приходить со своим партнером/партнершей.
                                            Во время урока партнеры переходят по кругу от одной партнерши к другой, и потанцевать в паре есть возможность у каждого.
                                        </p>
                                        Бачата - это не просто танец, также это общение, флирт, подтянутое тело,
                                        возможность уже через месяц зажигать на вечеринках или пойти дальше:
                                        участвовать в шоу-номерах и сниматься в танцевальных видео-роликах или выбрать спортивное направление,
                                        ездить на соревнования и достигать потрясных результатов!

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <Iconsl />
                    </Container>
                    <Container>
                        <Novznak />
                    </Container>
                    <Container>
                        <div className="perednik">
                            <h2 className="zagolovok2 mb-5" id="5n">Позитивная тусовка</h2>
                            <div className="colu">
                                <div className="mt-3">
                                    <iframe src="https://vk.com/video_ext.php?oid=8968210&id=456239583&hash=817ebaf202d1ddd1" title="video4" width="535" height="300" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                </div>
                                <div className="str_t">
                                    <div className="stexr">
                                        <p>
                                            Много всего написано про психологию и танцы.
                                        </p>
                                        <p>
                                            Танцы - несомненно, арт-терапия и поможет:
                                            - Стать уверенней.<br />
                                            - Выйти из депрессии.<br />
                                            - Пережить расставание.<br />
                                            - Снять/уменьшить стресс.<br />
                                            - Внести разнообразие в жизнь.<br />
                                            И прочее...
                                        </p>

                                        Танцы - это отличное место для знакомства с новыми людьми со схожими интересами.
                                        К нам просто приходят люди уже готовые общаться!

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div className="perednik">
                            <h2 className="zagolovok2 mb-5" id="6n">Учим с 0 до Pro</h2>
                            <div className="colu">

                                <div className="stexl">
                                    <p>
                                        Для начального уровня особенно важно получать удовольствие от процесса. А что бы понимать правильность техники, нужно практиковаться с теми, кто давно в теме.
                                    </p>
                                    <p>
                                        1. Записывайте видео с уроков, что бы посмотреть, что улучшилось – на наших занятиях мы это предоставляем сами.
                                    </p>
                                    <p>
                                        2. Потренируйте музыкальность, чувство ритма: танцуйте дома под любимые треки как хотите.
                                    </p>
                                    3. Приходите на уроки отдыхать, а не работать!
                                </div>

                                <div className="mt-3">
                                    <iframe title="video5" src="https://vk.com/video_ext.php?oid=69451431&id=456240271&hash=0b20601c0e7434a9" width="535" height="300" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div className="perednik">
                            <h2 className="zagolovok2 mb-5" id="7n">Кардио-тренировка</h2>
                            <div className="colu">
                                <div className="mt-3">
                                    <iframe title="video6" src="https://vk.com/video_ext.php?oid=8968210&id=456239271&hash=a9dad2725731e0c7" width="535" height="300" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                </div>
                                <div className="str_t">
                                    <div className="stexr">
                                        <p>Танцы - это настоящая кардио-тренировка, при которой ещё и задействованы практически все группы мышц.
                                            На каждом занятии можно потерять от 200 до 800 ккал за час!
                                        </p>
                                        <p>
                                            Сбалансированная нагрузка - при стандартных занятиях невозможно перенапрячься или потянуть мышцу. На утро не болит тело, а наоборот оно полно сил и энергии!
                                        </p>
                                        А рекомендации по подготовке похожи - за час лучше не есть, на занятие взять бутылочку с водой. Будет жарко!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <Znakomt />
                    </Container>
                    <Container>
                        <Otzv />
                    </Container>
                </div>
                <Lasts />
            </div >
        )
    }
}

