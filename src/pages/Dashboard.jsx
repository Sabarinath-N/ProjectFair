import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import AddProjects from '../components/AddProjects'
import Profile from '../components/Profile'
import { deleteProjectApi, userProjectsApi } from '../services/allApis'
import { toast } from 'react-toastify'
import Edit from '../components/Edit'
import { addResponseContext, editResponseContext } from '../contextApi/ContextApi'

function Dashboard() {

  const [user, setUser] = useState('')
  const [projects, setProjects] = useState([])

  const {addResponse}=useContext(addResponseContext)
  const {editResponse}=useContext(editResponseContext)


  useEffect(() => {
    if (sessionStorage.getItem("userData")) {
      setUser(JSON.parse(sessionStorage.getItem("userData")))
      getData()
    }
  },[addResponse,editResponse])

  const getData = async () => {
    const response = await userProjectsApi()
    console.log(response);
    if (response.status === 200) {
      setProjects(response.data)
    }
  }


  const handleDelete = async (id) => {
    const response = await deleteProjectApi(id)
    if (response.status === 200) {
      getData()
    }
    else {
      toast.error("Something Went Wrong !!")
      console.log(response);
    }
  }


  return (
    <>
      <Header />
      <div className="container-fluid" style={{ minHeight: "65vh" }}>
        <h2>Dashboard</h2>
        <h4>Welcome to ProjectFair, <span className='text-warning'>{user?.username}</span></h4>
        <div className="row">
          <div className="col-9">
            <AddProjects />
            <div className="w-100 border border-3 border-light p-2 mt-4">
              {
                projects.length > 0 ?
                  <>
                    {
                      projects.map((item,index) => (
                        <div key={index} className="m-3 border border-2 border-warning p-2 d-flex justify-content-between">
                          <h5>{item.title}</h5>
                          <div>
                            <a href={item.gitrepo} target='_blank' className="me-3">
                              <i className="fa-brands fa-github fa-2xl text-info"></i>
                            </a>
                            <Edit project={item} />
                            <button className='btn me-3' onClick={() => handleDelete(item._id)} >
                              <i className='fa-solid fa-trash fa-xl text-danger'></i>

                            </button>
                          </div>
                        </div>
                      ))
                    }
                  </>
                  :
                  <h3 className='text-center text-danger'> No Projects Added Yet !!! </h3>
              }
            </div>
          </div>
          <div className="col-3">
            <Profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
