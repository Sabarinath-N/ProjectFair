import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import base_url from '../services/base_url';
import { toast } from 'react-toastify';
import { editProjectApi } from '../services/allApis';
import { editResponseContext } from '../contextApis/ContextApi';

function Edit({ project }) {

    const [show, setShow] = useState(false);

    const [newproject, setNewProject] = useState(project)

    const [preview, setPreview] = useState("")


    useEffect(() => {
        if (newproject.image.type) {
            setPreview(URL.createObjectURL(newproject.image))
        }
        else {
            setPreview("")
        }
    }, [newproject.image.type])


    const {setEditResponse}=useContext(editResponseContext)

    const handleEdit = async() => {
        console.log(newproject);
        
        const { title, description, languages, gitrepo, demo, image } = newproject
        if (!title || !description || !languages || !gitrepo || !demo || !image) {
            toast.warning("Enter Valid Inputs!! ")
        }
        else {
            if (image.type) {
                const header = {
                    "Content-Type": "multipart/form-data",
                    "Authorization":`Token ${sessionStorage.getItem('token')}`
                }
                const response =await editProjectApi(project._id,newproject,header)
                if(response.status===200){
                    toast.success("Project Updated!!")
                    setPreview("")
                    handleClose()
                    setEditResponse(response)
                }
                else{
                    toast.error("Something Went Wrong!!!")
                    console.log(response);                    
                }
            }
            else{
                 const header = {
                    "Content-Type": "application/json",
                    "Authorization":`Token ${sessionStorage.getItem('token')}`
                }
                const response=await editProjectApi(project._id,newproject,header)
                if(response.status===200){
                    toast.success("Project Updated!!")
                    setPreview("")
                    handleClose()
                    setEditResponse(response)
                }
                else{
                    toast.error("Something Went Wrong!!!")
                    console.log(response);                    
                }
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>


            <button className='btn me-2' onClick={handleShow}>
                <i className='fa-solid fa-pen-to-square fa-xl text-warning'></i>
            </button>



            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}  >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="ff">
                                <input type="file" name="" style={{ display: 'none' }} id="ff" onChange={e=>{setNewProject({...newproject,image:e.target.files[0]})}} />
                                <img className='img-fluid' src={preview ? preview : `${base_url}/projectimg/${project?.image}`} alt="" />
                            </label>
                        </div>
                        <div className="col">
                            <input type="text" placeholder='Enter Title' onChange={(e) => { setNewProject({ ...newproject, title: e.target.value }) }} defaultValue={project?.title} className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Description' onChange={(e) => { setNewProject({ ...newproject, description: e.target.value }) }} defaultValue={project?.description} className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Languages Used' onChange={(e) => { setNewProject({ ...newproject, languages: e.target.value }) }} defaultValue={project?.languages} className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Git Repo URL' onChange={(e) => { setNewProject({ ...newproject, gitrepo: e.target.value }) }} defaultValue={project?.gitrepo} className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Demo URL' onChange={(e) => { setNewProject({ ...newproject, demo: e.target.value }) }} defaultValue={project?.demo} className='form-control mb-3' name="" id="" />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit}  >Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit
