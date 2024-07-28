import React,{useEffect} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSetSuccessMutation } from '../../../redux/orderApi'
import { toast } from 'react-toastify'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'

function Success() {
    const [setSuccess]=useSetSuccessMutation()
    const navigate=useNavigate()
    const location=useLocation()
    const {order_id}=useParams()
    
    const getQueryParams = (search) => {
        return new URLSearchParams(search);
      };

     useEffect(() => {
        if(location.search && order_id){
            const queryParams = getQueryParams(location.search);
            const paymentId = queryParams.get('paymentId');
            const token = queryParams.get('token');
            const payerId = queryParams.get('PayerID');
            const data={
                payerID:payerId,
                paymentId:paymentId,
                orderId:order_id,
                paymentToken:token
            }
            setSuccess(data).then((result) => {
                if (result.data.status) {
                    toast.dismiss();
                    toast.success(result.data.message);
                    setTimeout(() => {
                        navigate("/profile", { replace: true })
                    }, 2000);
                }
                else {
                    toast.dismiss();
                    toast.error(result.data.message);
                }
            })
          console.log(paymentId,"location",token,"token",payerId)
        }
     }, [location.search,order_id])

  return (
    <>
    <Header/>
      <div className='text-center'>
      <img src='/assets/img/check.gif'/>
      <h5 className='mt-2 mb-3'> Order placed successfuly</h5>
      </div>
      <Footer/>
    </>
  )
}

export default Success
