import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import './SignUp.css';
import {Navigate} from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';

export let otp;

const schema = yup.object().shape(
{
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required(),
    confirmpassword: yup.string().oneOf([yup.ref("password"),null])
}
)



function Cooking(){
  const [isComp,setisComp] = useState(false)
  const {register,handleSubmit,formState:{
    errors
  }} = useForm(
    {
        resolver:yupResolver(schema)
    }
  )
    return(

<section class="vh-100" style={{backgroundColor: "#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4" onSubmit={handleSubmit((data)=>{
                    console.log(data)
                    axios.post('http://localhost:8000/signup',data).then((res)=>{
                       setisComp(true)
                        otp = res.data;
                        console.log(otp)
                    }).catch((err)=>{
                        console.log(err)
                    })
                   
                })
              
                } >

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" name="name" id="form3Example1c" class="form-control" {...register('name')}/>
                      <label class="form-label" for="form3Example1c">Your Name</label>
                      <p className='password'>{errors.name?.message}</p>
                    </div>
                  </div>
                  

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" name="email" id="form3Example3c" class="form-control" {...register('email')}/>
                      <label class="form-label" for="form3Example3c">Your Email</label>
                      <p className='password'>{errors.email?.message}</p>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" name="password" id="form3Example4c" class="form-control" {...register('password')}/>
                      <label class="form-label" for="form3Example4c">Password</label>
                      <p className='password'>{errors.password?.message}</p>
                    </div>
                  </div>
                  


                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" name="confirmpassword"id="form3Example4cd" class="form-control" {...register('confirmpassword')}/>
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      <p className='password'>{errors.confirmpassword && "passwords do not match"}</p>
                    </div>
                  </div>
                 
                  

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                  </div>
                 
                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"class="img-fluid" alt="Sample" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {isComp && (
    <Navigate to="/verify" replace={true} />
  )}
</section>
 
)
}

function Signup(){
    return(
    <Cooking/>
    )
}

export default Signup;
