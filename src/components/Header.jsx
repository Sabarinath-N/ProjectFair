import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../contextApi/ContextApi';

function Header() {


    const nav=useNavigate()

    const {setAuthStatus}=useContext(authContext)


    const handleLogout=()=>{
        sessionStorage.clear()
        setAuthStatus(false)
        toast.info("User Logged Out!!")
        nav('/')
    }


    return (

        <>
            <Navbar className=" bg-primary">
                <Container>
                    <Navbar.Brand href="#home">
                        <i className="fa-solid fa-diagram-project"></i>
                        {' '}
                        ProjectFair
                    </Navbar.Brand>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout  <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                </Container>

            </Navbar>
        </>
    )
}

export default Header
