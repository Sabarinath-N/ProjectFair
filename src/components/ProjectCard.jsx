import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';
import base_url from '../services/base_url';

function ProjectCard({project}) {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: '18rem' , marginBottom:'20px' }}>
                <Card.Img onClick={handleShow} variant="top" src={`${base_url}/projectimg/${project.image}`} style={{ height: "200px" }} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>{project.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <img src={`${base_url}/projectimg/${project.image}`} className='w-100' alt="" />
                        </div>
                        <div className="col">
                            <h3>{project.title}</h3>
                            <p>
                                <span className='fw-bolder'>Description :</span>
                                {project.description}
                            </p>
                            <p>
                                <span className='fw-bolder'>Languages :</span>
                                {project.languages}
                            </p>
                            <div className="d-flex justify-content-between">
                                <a href={project.gitrepo}>
                                    <i className="fa-brands fa-github fa-2xl"></i>
                                </a>
                                <a href={project.demo}>
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
