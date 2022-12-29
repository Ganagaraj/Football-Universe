import './OtpPage.css'

function shift(e){
if(e.target.value!==''){
    if(e.target.nextElementSibling!=null){
        e.target.nextElementSibling.focus()
    }
}
else{
    if(e.target.previousElementSibling!=null){
        e.target.previousElementSibling.focus()
    }
}
   
}

export default function OTP(){
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
    </>
    )
}
