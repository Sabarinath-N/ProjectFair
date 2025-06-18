import React, { useState } from 'react'

function Profile() {

    const [ profileShow , setProfileShow] =useState(false)

    const toggleProfile=() => {
        setProfileShow(!profileShow)
    }

    
  return (
    <>
        <div className="container-fluid border border-2 border-info my-3 p-3">
            <div className="d-flex justify-content-between">
                <h3>Profile</h3>
                <button className="btn "  onClick={toggleProfile}>
                    {
                        profileShow ?
                        <i className="fa-solid fa-toggle-on fa-xl text-light"></i>
                        :
                        <i className="fa-solid fa-toggle-off fa-xl text-danger"></i>
                    }
                </button>
            </div>
            {
                profileShow &&
                <div className="w-100">
                    <div>
                        <label htmlFor="pf" className='d-flex justify-content-center'>
                            <input type="file" name="" id="pf" style={{display:'none'}} />
                            <img src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" className='w-50' alt="profile" />
                        </label>
                        <input type="text" placeholder='Username' className='form-control my-3' name="" id="" />
                        <input type="text" placeholder='Git Link' className='form-control my-3' name="" id="" />
                        <input type="text" placeholder='LinkedIn URL' className='form-control my-3' name="" id="" />
                    </div>
                    <div className="d-flex my-2 justify-content-between">
                        <button className='btn btn-success'>Update</button>
                        <button className='btn btn-danger'>Cancel/Close</button>
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default Profile
