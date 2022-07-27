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
                    <Form style={{ height: '300px' }}>
                        <Form.Group controlId='formName'>
                            <Form.Control type="name" placeholder="Введите имя" />
                        </Form.Group>
                        <Form.Group controlId='formPhone'>
                            <Form.Control type="phone" placeholder="+7(___)-__-__" />
                        </Form.Group>
                        <button type='submit' className="bat">Записаться</button>
                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </div>
    )
}

export default Popap_mod