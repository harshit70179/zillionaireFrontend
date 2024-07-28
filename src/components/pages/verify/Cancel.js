import React,{useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'

function Cancel() {
    const navigate=useNavigate()

     useEffect(() => {
        setTimeout(() => {
            navigate("/profile", { replace: true })
        }, 2000);
     }, [])

  return (
    <>
    <Header/>
      <div className='text-center'>
      <img src='/assets/img/cancel.gif'/>
      <h5 className='mt-2 mb-3'>Your payment is pending</h5>
      </div>
      <Footer/>
    </>
  )
}

export default Cancel
