import React, { useContext, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { logUserApi, regUserApi } from '../services/allApis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../contextApi/ContextApi';


function Auth() {


  const [authState, setAuthState] = useState(false)
  const [userData, setUserData] = useState({
    email: "", username: "", password: ""
  })

  const nav = useNavigate()

  const {setAuthStatus}=useContext(authContext)

  const handleRegister = async () => {
    console.log(userData);
    const { username, email, password } = userData
    if (!username || !email || !password) {
      toast.warning("Enter Valid Inputs")
    }
    else {
      const response = await regUserApi(userData)
      console.log(response);
      if (response.status === 201) {
        toast.success("Registration Successful")
        handleAuthState()
        setUserData({
          email: "", username: "", password: ""
        })
      }
      else {
        toast.error("Something Went Wrong!!!")
      }
    }
  }




  const handleLogin = async () => {
    const { email, password } = userData
    if (!email || !password) {
      toast.warning("Enter Valid Inputs!!")
    }
    else {
      const response = await logUserApi(userData)
      console.log(response);
      if (response.status === 200) {
        toast.success("Login Successful")
        sessionStorage.setItem("token", response.data.token)
        sessionStorage.setItem("userData", JSON.stringify({username:response.data.user , github:response.data.github, linkedin:response.data.linkedin, profile:response.data.profile}))
        setAuthStatus(true)
        nav('/')
      }
      else {
        toast.error("Something Went Wrong!!!")

      }
    }
  }




  const handleAuthState = () => {
    setAuthState(!authState)
  }

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="p-3 border border-light border-3 w-75">
          <div className="row">
            <div className="col">
              {
                authState ?
                  <img src="https://static.vecteezy.com/system/resources/previews/010/881/327/non_2x/login-user-illustration-password-sign-web-page-design-icon-internet-interface-with-login-user-access-authentication-registration-login-user-safety-protection-login-user-form-application-icon-vector.jpg"
                    className='w-75  p-5' alt="" />

                  :
                  <img src="https://static.vecteezy.com/system/resources/previews/019/872/884/non_2x/3d-minimal-user-login-page-user-authentication-concept-user-verification-concept-login-page-with-a-fingerprint-padlock-3d-illustration-free-png.png"
                    className='w-75 h-100' alt="" />

              }
            </div>
            <div className="col">
              <h2>
                {
                  authState ?
                    <>Register</>
                    :
                    <>Login</>
                }
              </h2>
              <div className="mt-4">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3"  >
                  <Form.Control type="email" onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} placeholder="name@example.com" value={userData.email} />
                </FloatingLabel>
                {

                  authState &&
                  <FloatingLabel controlId="floatingInp" label="Username" className="mb-3"  >
                    <Form.Control type="text" onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} placeholder="Username" value={userData.username} />
                  </FloatingLabel>

                }
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} placeholder="Password" value={userData.password} />
                </FloatingLabel>

              </div>
              <div className="d-flex justify-content-between mt-4">
                {
                  authState ?
                    <button className='btn btn-success' onClick={handleRegister}>Register</button>
                    :
                    <button className='btn btn-success' onClick={handleLogin}>Login</button>
                }
                {
                  <button className="btn btn-link" onClick={handleAuthState}>
                    {
                      authState ?
                        <>Already a User</>
                        :
                        <>New User?</>
                    }
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
