import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProjects() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (

        <>

        <button className='btn btn-success' onClick={handleShow}>Add New Project</button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}  >
                <Modal.Header closeButton>
                    <Modal.Title>Add Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="ff">
                                <input type="file" name="" style={{display:'none'}} id="ff" />
                                <img className='w-100 ms-2 mt-3' src="https://static.vecteezy.com/system/resources/thumbnails/056/202/171/small_2x/add-image-or-photo-icon-vector.jpg" alt="" />
                            </label>
                        </div>
                        <div className="col">
                            <input type="text" placeholder='Enter Title' className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Description' className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Languages Used' className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Git Repo URL' className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Demo URL' className='form-control mb-3' name="" id="" />
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

export default AddProjects
