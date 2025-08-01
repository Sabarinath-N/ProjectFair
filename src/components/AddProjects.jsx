import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addProjectApi } from '../services/allApis';
import { addResponseContext } from '../contextApis/ContextApi';

function AddProjects() {

    const [show, setShow] = useState(false);

    const [project, setProject] = useState({
        title: "", description: "", languages: "", gitrepo: "", demo: "", image: ""
    })

    const [preview, setPreview] = useState("")
    useEffect(() => {
        if (project.image) {
            setPreview(URL.createObjectURL(project.image))
        }
        else {
            setPreview("")
        }
    }, [project.image])

    const {setAddResponse}=useContext(addResponseContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleSave = async () => {
        console.log(project);

        const { title, description, languages, demo, gitrepo, image } = project
        if (!title || !description || !languages || !demo || !gitrepo || !image) {
            toast.warning("Enter Valid Inputs")
        
        }
        else{
            const response=await addProjectApi(project)
            console.log(response);
            if(response.status===200){
                toast.success("Project Added Successfully!!")
                setProject({title:"",description:"",languages:"",gitrepo:"",demo:"",image:""})
                setPreview("")
                setAddResponse(response)
                handleClose()
            }
            else{
                toast.error("Project Adding Failed!!!")
            }
        }
        


    }

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
                                <input type="file" onChange={(e) => { setProject({ ...project, image: e.target.files[0] }) }} name="" style={{ display: 'none' }} id="ff" />
                                <img className='img-fluid' src={preview ? preview : "https://static.vecteezy.com/system/resources/thumbnails/056/202/171/small_2x/add-image-or-photo-icon-vector.jpg"} alt="" />
                            </label>
                        </div>
                        <div className="col">
                            <input type="text" placeholder='Enter Title' onChange={(e) => { setProject({ ...project, title: e.target.value }) }} className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Description' onChange={(e) => { setProject({ ...project, description: e.target.value }) }} className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Languages Used' onChange={(e) => { setProject({ ...project, languages: e.target.value }) }} className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Git Repo URL' onChange={(e) => { setProject({ ...project, gitrepo: e.target.value }) }} className='form-control mb-3' name="" id="" />
                            <input type="text" placeholder='Enter Demo URL' onChange={(e) => { setProject({ ...project, demo: e.target.value }) }} className='form-control mb-3' name="" id="" />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>

        </>
    )



}




export default AddProjects
