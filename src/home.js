import {React,useState,useEffect} from 'react'
import axios from 'axios'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
const logo = require('./Youtube-Logo-JPG.jpg')

axios.defaults.withCredentials = false



function Header(){
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
                <a className="nav-link active" aria-current="page" href="old">Link 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="old">Link 2</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="old">Link 3</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link  active" href="old" aria-disabled="true">Link 4</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    );
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
<div className='container-fuild justify-content-center' id='grid'>
<span>Recent Matches</span>
   {
   
       

        Data.slice(0,20).map((dat,count)=>{
        return (
        <div className="row justify-content-center" key={count}>
        <div className="col-auto p-3 ">
            <img src= {Data[++i].thumbnail} alt="thumbnail" width={300} height={145}/>
            <div className="text-block">
                <h5>{Data[i].title}</h5>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
            <img src= {Data[++i].thumbnail} alt="thumbnail" width={300} height={145}/>
            <div className="text-block">
                <h5>{Data[i].title}</h5>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
            <img src= {Data[++i].thumbnail} alt="thumbnail" width={300} height={145}/>
            <div className="text-block">
                <h5>{Data[i].title}</h5>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
            <img src= {Data[++i].thumbnail} alt="thumbnail" width={300} height={145}/>
            <div className="text-block">
                <h5>{Data[i].title}</h5>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        
        </div>
        )
    })
}   
</div>
    )
}


function Home(){
    return(
    <>
     <Header/>
     <Grid/>
     </>
    )
}

export default Home;