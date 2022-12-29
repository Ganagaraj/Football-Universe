import {React,useState,useEffect} from 'react'
import axios from 'axios'
import './home.css'
import './LoginPopUp.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {Link} from 'react-router-dom'
const logo = require('./Youtube-Logo-JPG.jpg')

axios.defaults.withCredentials = false
export let keys,res;
let items;
//let isLogin = false;
function dict(data){
  let dict = {};
   data.map((dat) => {
        if(dict[dat.competition]==null){
          dict[dat.competition] =1;
        }
        else{
          dict[dat.competition]++;
        }
        return null;
    })
    return dict;
}

function Header(props){
   res =  dict(props.data)
  console.log(res);
   items = Object.keys(res).map(
    (key) => { return [key, res[key]] });
  
  // Step - 2
  // Sort the array based on the second element (i.e. the value)
  console.log(items)
  items.sort(
    (first, second) => { return first[1] - second[1] }
  );
  
  // Step - 3
  // Obtain the list of keys in sorted order of the values.
  keys = items.map(
    (e) => { return e[0] });
  keys.reverse();
  console.log(keys);
    return(
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={logo} alt="logo" width="130" height="34" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                
                <Link className="nav-link active" aria-current="page" to='link1'>{keys[0]}</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='link2'>{keys[1]}</Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='link3'>{keys[2]}</Link>
              </li>
              
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='link4'>{keys[3]}</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="others">Others</Link>
              </li>
            </ul>
         
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <Login/>
       
          </div>
        </div>
      </nav> 


    );
}


var Login = ()=>{
   console.log("hello")
    return(
      <>
      <button className='btn btn-primary ' id='login-btn'  data-bs-toggle="modal" data-bs-target="#ModalForm">Login</button>
     
<div class="modal fade" id="ModalForm" tabindex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="myform bg-dark">
                <h1 class="text-center">Login Form</h1>
                <form>
                    <div class="mb-3 mt-4">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn-light mt-3">LOGIN</button>
                    <p id='ps'>Not a member? <a href="signup">Signup now</a></p>
                </form>
            </div>
        </div>
      </div>
    </div>
</div>
</>
    )
}
function Grid(){
    const [Data,setData] = useState([])
    useEffect(()=>{
        requestAPI();
         // eslint-disable-next-line
    },[])
   
 
    var requestAPI = async () => {
        try {
            const res = await axios.get('https://www.scorebat.com/video-api/v3/feed/', {
                params: {token:'NDIzNThfMTY3MTI2NDI2NV83OWQzZWE3Mjk5ZTFmNzk3MWRiNDU3YzRlMWM5M2Q1MzEwOTg5OTAx'}
            });
            setData(res.data.response)
            
        } catch (err) {
            console.log(err);
        }
        
    };
    var i =-1;
    console.log(Data)
    return (

      <>
      <Header data={Data}/>
<div className='container-fuild justify-content-center' id='grid'>
<span className='title'>Recent Matches</span>
   {
        Data.slice(0,18).map((dat,count)=>{
        return (
        <div className="row justify-content-center" key={count} on>
        <div className="col-auto p-3 ">
          <a href={Data[++i].matchviewUrl}>
            <img src= {Data[i].thumbnail} alt="thumbnail" width={300} height={145}  />  
            </a>
            <div className="text-block">
                <p>{Data[i].title}</p>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
        <a href={Data[++i].matchviewUrl}>
            <img src= {Data[i].thumbnail} alt="thumbnail" width={300} height={145}  />  
            </a>
            <div className="text-block">
                <p>{Data[i].title}</p>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
        <a href={Data[++i].matchviewUrl}>
            <img src= {Data[i].thumbnail} alt="thumbnail" width={300} height={145}  />  
            </a>
            <div className="text-block">
                <p>{Data[i].title}</p>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
           <a href={Data[++i].matchviewUrl}>
            <img src= {Data[i].thumbnail} alt="thumbnail" width={300} height={145}  />  
            </a>
            <div className="text-block">
                <p>{Data[i].title}</p>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        
        </div>

        )
    })
}   
</div>
</>
    )
}


function Home(){
    return(
    <>
     <Grid/>
     </>
    )
}

export default Home;
