import React from 'react'

const Home = () => {
  return (
    <div className='home-body'>
        <div className=''>
            <h1 className='text-center py-4 fw-bold'>
                Create your Task Here!
            </h1>
            <div className='card shadow w-50 d-flex m-auto'>
                <div className='card-body'>
                    <form action="">
                        <label className='fs-3 fw-bold'>Title</label>
                        <input type="text" className='form-control my-2'/>
                        <label className='fs-3 fw-bold mt-3'>Description</label>
                        <textarea className='form-control my-2'/>
                        <label className='fs-3 fw-bold mt-3'>Due Date</label><br />
                        <input type="date" className='form-control my-2' />
                        <button className='btn btn-primary w-100 mt-3'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;