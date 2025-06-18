import React from 'react'
import Header from '../components/Header'
import AddProjects from '../components/AddProjects'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ minHeight: "65vh" }}>
        <h2>Dashboard</h2>
        <div className="row">
          <div className="col-9">
            <AddProjects />
            <div className="w-100 border border-3 border-light p-2 mt-4">

              <div className="m-3 border border-2 border-warning p-2 d-flex justify-content-between">
                <h5>Project Title</h5>
                <div>
                  <a href="" className="me-3">
                    <i className="fa-brands fa-github fa-2xl text-info"></i>
                  </a>
                  <button className='btn me-2'>
                    <i className='fa-solid fa-pen-to-square fa-xl text-warning'></i>
                  </button>
                  <button className='btn me-3'>
                    <i className='fa-solid fa-trash fa-xl text-danger'></i>

                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <Profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
