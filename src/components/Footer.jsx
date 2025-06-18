import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="container-fluid bg-secondary">
        <div className="row">
            <div className="col">
                <h2>ProjectFair 2025</h2>
                <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus cumque voluptates ratione magnam quos quibusdam suscipit eum voluptatum tenetur ullam similique, aut ea necessitatibus commodi pariatur aperiam voluptas? Animi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis at aspernatur, delectus, maxime itaque culpa iusto ad atque quis eligendi consequatur laudantium? Autem magnam voluptates nesciunt minima corporis dolorum cupiditate.
                </p>
            </div>
            <div className="col-2">
                <h1 className='text-center' > Links</h1>
                <div className="d-flex justify-content-around flex-column align-items-center     ">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/auth'}>Login</Link>
                </div>
            </div>
            <div className="col">
                <h2>Feedback</h2>
                <textarea name="" placeholder='Enter Feedback' className='form-control my-3' id=""></textarea>
                <button className='btn btn-success py-2'>Submit</button>
            </div>
        </div>
        <h6 className='text-center'>ProjectFair &copy; copyrights reserved</h6>
        <br />
    </div>

    </>
  )
}

export default Footer
