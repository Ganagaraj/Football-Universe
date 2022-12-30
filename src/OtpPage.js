import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './OtpPage.css'


function shift(e){
if(e.target.value!==''){
    if(e.target.nextElementSibling!=null){
        e.target.nextElementSibling.focus()
    }

    let prevSib=true,nextSib = true;
    let prevCurr = e.target.previousElementSibling;
    while(prevCurr!=null){
         if(prevCurr.value===''){
            prevSib = false;
            break;
         }
         prevCurr = prevCurr.previousElementSibling;
    }
    let nextCurr = e.target.nextElementSibling
    while(nextCurr!=null){
        if(nextCurr.value===''){
            nextSib = false;
            break
        }
        nextCurr = nextCurr.nextElementSibling
    }

    if(prevSib&&nextSib){
        console.log("home navigator")
    }
}
else{
   /* if(e.target.previousElementSibling!=null){
        e.target.previousElementSibling.focus()
    }*/  
}
     
}

export default function OTP(){
    const[isDone,setisDone] = useState(false)
    return(
        <>
        <div class="d-flex justify-content-center align-items-center container" id='otpcon'>
        <div class="card py-5 px-3 otpcard">
            <h5 class="m-0">Email verification</h5>
            <span class="mobile-text">Enter the code we just send on your email <b class="text-danger">abc@gmail.com</b></span>
            <div class="d-flex flex-row mt-5">
            <input type="text" class="form-control otpfc" autofocus="" onInput={shift} />
            <input type="text" class="form-control otpfc" onInput={shift} />
            <input type="text" class="form-control otpfc" onInput={shift} />
            <input type="text" class="form-control otpfc" onInput={shift} />
            </div>
            <div class="text-center mt-5">
                <span class="d-block mobile-text">Didn't receive the code?</span>
                <span class="font-weight-bold text-danger cursor">Resend</span>
                </div>
        </div>
    </div>
    {isDone && (<Navigate to='/link1' replace = {true}/>)}
    </>
    )
}
