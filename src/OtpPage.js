import './OtpPage.css'
export default function OTP(){
    return(
        <>
        <div class="d-flex justify-content-center align-items-center container" id='otpcon'>
        <div class="card py-5 px-3 otpcard">
            <h5 class="m-0">Email verification</h5><span class="mobile-text">Enter the code we just send on your email <b class="text-danger">abc@gmail.com</b></span>
            <div class="d-flex flex-row mt-5">
            <input type="text" class="form-control otpfc" autofocus=""/>
            <input type="text" class="form-control otpfc"/>
            <input type="text" class="form-control otpfc"/>
            <input type="text" class="form-control otpfc"/>
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
