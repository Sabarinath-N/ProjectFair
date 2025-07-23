import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { updateProfileApi } from '../services/allApis'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../contextApi/ContextApi'
import base_url from '../services/base_url'

function Profile() {

    const [profileShow, setProfileShow] = useState(false)
    const [profileData, setProfileData] = useState({
        username: "", github: "", linkedin: "", profile: ""
    })

    const [preview, setPreview] = useState("")

    const nav = useNavigate()

    const { setAuthStatus } = useContext(authContext)

    useEffect(() => {
        if (sessionStorage.getItem('userData')) {
            const userData = JSON.parse(sessionStorage.getItem("userData"))
            setProfileData({ ...userData })
        }
    }, [])

    useEffect(() => {
        if (profileData.profile.type) {
            setPreview(URL.createObjectURL(profileData.profile))
        }
        else {
            setPreview("")
        }
    }, [profileData.profile.type])

    const handleEdit = async () => {
        console.log(profileData);
        const {username, github, linkedin, profile} = profileData
        if (!username || !github || !linkedin || !profile) {
            toast.warning("Enter Vlid Inputs!!")
        }
        else {
            let header = {}
            if (profile.type) {
                header = {
                    "Authorization": `Token ${sessionStorage.getItem('token')}`,
                    "Content-Type": "multipart/form-data"
                }
            }
            else {
                header = {
                    "Authorization": `Token ${sessionStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                }
            }
            const response = await updateProfileApi(profileData, header)

            if (response.status == 200) {
                toast.success("Profile Updated!!")
                nav('/')
                sessionStorage.clear()
                setAuthStatus(false)
            }
            else {
                toast.error("Updation Failed!!")
                console.log(response);
            }
        }
    }

    const toggleProfile = () => {
        setProfileShow(!profileShow)
    }


    return (
        <>
            <div className="container-fluid border border-2 border-info my-3 p-3">
                <div className="d-flex justify-content-between">
                    <h3>Profile</h3>
                    <button className="btn " onClick={toggleProfile}>
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
                                <input type="file" onChange={(e) => setProfileData({ ...profileData, profile: e.target.files[0] })} name="" id="pf" style={{ display: 'none' }} />
                                <img src={preview ? preview : (profileData.profile ? `${base_url}/projectimg/${profileData.profile}` : "https://cdn-icons-png.flaticon.com/512/8847/8847419.png")} className='w-50' alt="profile" />
                            </label>
                            <input type="text" placeholder='Username' onChange={(e) => setProfileData({ ...profileData, username: e.target.value })} defaultValue={profileData.username} className='form-control my-3' name="" id="" />
                            <input type="text" placeholder='Git Link' onChange={(e) => setProfileData({ ...profileData, github: e.target.value })} defaultValue={profileData.github} className='form-control my-3' name="" id="" />
                            <input type="text" placeholder='LinkedIn URL' onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })} defaultValue={profileData.linkedin} className='form-control my-3' name="" id="" />
                        </div>
                        <div className="d-flex my-2 justify-content-between">
                            <button className='btn btn-success' onClick={handleEdit}>Update</button>
                            <button className='btn btn-danger' >Cancel/Close</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Profile
