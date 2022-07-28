import React from 'react';
import { useState } from 'react';
import { Modal, Form } from "react-bootstrap";

const Popap_mod = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <button className="bat" onClick={handleShow}>Записаться</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Form className='popup_m'>
                        <div className="zagolovok3">
                            <p>Оставьте контактный телефон</p>
                            мы свяжемся с вами в ближайшее время
                        </div>
                        <div>
                            <Form.Group className='mb-2' controlId='formName'>
                                <Form.Control className='bat_inp' type="name" placeholder="Введите имя" />
                            </Form.Group>
                            <Form.Group controlId='formPhone'>
                                <Form.Control className='bat_inp' type="phone" placeholder="+7(___)-__-__" />
                            </Form.Group>
                        </div>
                        <button type='submit' className="bat">Записаться</button>
                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </div>
    )
}

export default Popap_mod