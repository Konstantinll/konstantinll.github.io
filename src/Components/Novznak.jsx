import React from 'react'
import './Novznak.css'

const Novznak = () => {
    return (
        <div className="perednik" id="4n">
            <h2 className="zagolovok2 mb-5">Новые знакомства</h2>
            <div className="colu">
                <div className="str_t">
                    <div className="stexl">
                        <p>
                            Общение - ещё один бонус, который выгодно отличает танцы.
                            Даже если танцуете с партнёром молча, происходит постоянный контакт через взгляды, движение тела.
                            Порой это гораздо больше, чем слова.
                        </p>

                        В нашей практике сложилось 3 пары и у двух из них уже есть дети.
                        А сколько людей просто общаются, нашли полезные знакомства и говорить не приходится, это само собой разумеется.

                    </div>
                </div>
                <div className='mt-3'>
                    <div className="colu">
                        <div className="znak1 mb-5"></div>
                        <div className="znak2 mb-5"></div>
                    </div>
                    <div className="colu">
                        <div className="znak3 mb-5"></div>
                        <div className="znak4 mb-5"></div>
                        <div className="znak5 mb-5"></div>
                    </div>
                    <div className="colu">
                        <div className="znak6 mb-5"></div>
                        <div className="znak7 mb-5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Novznak