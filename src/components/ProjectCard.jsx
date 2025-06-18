import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';

function ProjectCard() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={handleShow} variant="top" src="https://intdevalliance.scot/wp-content/uploads/2023/08/project_fair.png" style={{ height: "200px" }} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}

                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Project title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <img src="https://intdevalliance.scot/wp-content/uploads/2023/08/project_fair.png" className='w-100' alt="" />
                        </div>
                        <div className="col">
                            <h3>Project Title</h3>
                            <p>
                                <span className='fw-bolder'>Description :</span>
                                I will not close if you click outside me. Do not even try to press
                                escape key.
                            </p>
                            <p>
                                <span className='fw-bolder'>Languages :</span>
                                HTML,CSS,JS
                            </p>
                            <div className="d-flex justify-content-between">
                                <a href="">
                                    <i className="fa-brands fa-github fa-2xl"></i>
                                </a>
                                <a href="">
                                    <i class="fa-solid fa-link fa-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ProjectCard
