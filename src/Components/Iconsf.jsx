import React from 'react'
import './Iconsf.css'

const Iconsf = () => {
    return (
        <div className="bot">
            <h2 className="zagolovok2 mb-5" id="1n">На занятии Вы узнаете</h2>
            <div className="texpa">
                <div className="colu">
                    <div className="centura mt-3">
                        <div className="dancing"></div>
                        <div>
                            <p className="icotex">
                                Основы танца соло
                            </p>
                        </div>
                    </div>
                    <div className="centura  mt-3">
                        <div className="dance"></div>
                        <div>
                            <p className="icotex">
                                Основы танца в паре
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="texpa">
                <div className="colu">
                    <div className="centura">
                        <div className="foot"></div>
                        <div>
                            <p className="icotex">
                                Базовые шаги и элементы
                            </p>
                        </div>
                    </div>
                    <div className="centura">
                        <div className="music"></div>
                        <div>
                            <p className="icotex">
                                Как слышать и слушать музыку
                            </p>
                        </div>
                    </div>
                    <div className="centura">
                        <div className="ear"></div>
                        <div>
                            <p className="icotex">
                                Как слушать и слышать друг друга
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="centura">
                <div className="more"></div>
                <div className="icotex">
                    И много чего ещё интересного и полезного!
                </div>
            </div>
        </div>
    )
}

export default Iconsf