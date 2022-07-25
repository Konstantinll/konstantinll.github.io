import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './Lasts.css'

const Lasts = () => {
    return (
        <div className="last">
            <Container>
                <div className="kart2">
                    <h2 className="zagolovok1">Приходите к нам в воскресенье!</h2>
                    <p>Много всего написано про психологию и танцы.

                    </p>
                    <p>Танцы - несомненно арт-терапия и поможет снять/уменьшить стресс,
                        выйти из депрессии, пережить расставание, стать уверенней, внести разнообразие в жизнь и прочее.
                    </p>
                    <Button variant="info" className='bat'>Записаться</Button>
                </div>
            </Container>
        </div>
    )
}

export default Lasts