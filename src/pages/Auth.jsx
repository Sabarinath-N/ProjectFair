import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Auth() {


  const [authState, setAuthState] = useState(false)

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
                    className='w-75  p-5'   alt="" />

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
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                {

                  authState &&
                  <FloatingLabel controlId="floatingInp" label="Username" className="mb-3"  >
                    <Form.Control type="text" placeholder="Username" />
                  </FloatingLabel>

                }
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

              </div>
              <div className="d-flex justify-content-between mt-4">
                {
                  authState ?
                  <button className='btn btn-success'>Register</button>
                  :
                  <button className='btn btn-success'>Login</button>
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
