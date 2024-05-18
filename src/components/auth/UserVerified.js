import React, { useEffect,useState } from 'react'
import Header from '../widgets/Header'
import Footer from '../widgets/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { userVerification } from '../services/Login'
import { toast } from 'react-toastify'
import { useAuth } from '../../AuthContext'

function UserVerified() {
  const {id}=useParams()
  const navigate = useNavigate()
  const { authenticated } = useAuth();
  const [status,setStatus]=useState(true)

  useEffect(() => {
    if (authenticated) {
        // navigate("/", { replace: true });
    }
}, [authenticated])

  useEffect(()=>{
    if(id){
      handleSubmit()
    }
  },[id])

  const handleSubmit = async () => {
    const data = {
        id: id,
    };
    let result = await userVerification(data);
    if (result.status) {
        toast.dismiss();
        toast.success(result.message);
        setTimeout(function () {
            navigate("/login", { replace: true });
        }, 1000);
        return false;
    } else {
        toast.dismiss();
        toast.error(result.message);
        setStatus(false)
        return;
    }
};

const moveHome=()=>{
  navigate("/", { replace: true });
}

  return (
    <>
         <Header />
            <section className="login pt-4 pt-md-5 bg_light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto text-center verify">
                          <div>
                          {status?<img src='/assets/img/check.png'/>:<img src='/assets/img/cross.png'/>}
                          
                          </div>
                             <span  className='mt-3' onClick={moveHome}><i class="bi bi-arrow-left-short"></i> Back to home</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
    </>
  )
}

export default UserVerified
