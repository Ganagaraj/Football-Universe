import {React,useState,useEffect} from 'react'
import axios from 'axios'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
const logo = require('./Youtube-Logo-JPG.jpg')

axios.defaults.withCredentials = false
export let keys,res;
let items;
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

                <a className="nav-link active" aria-current="page" href='./link1.jsx'>{keys[0]}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="old">{keys[1]}</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="old">{keys[2]}</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link  active" href="old" aria-disabled="true">{keys[3]}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active" href="old" aria-disabled="true">Others</a>
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


var nextpage =  ()=>{
  console.log("hiii")
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
<span>Recent Matches</span>
   {
        Data.slice(0,20).map((dat,count)=>{
        return (
        <div className="row justify-content-center" key={count} on>
        <div className="col-auto p-3 ">
          <a href={Data[++i].matchviewUrl}>
            <img src= {Data[i].thumbnail} alt="thumbnail" width={300} height={145}  onClick= {nextpage} />  
            </a>
            <div className="text-block">
                <p>{Data[i].title}</p>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
        <a href={Data[++i].matchviewUrl}>
            <img src= {Data[i].thumbnail} alt="thumbnail" width={300} height={145}  onClick= {nextpage} />  
            </a>
            <div className="text-block">
                <p>{Data[i].title}</p>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
        <a href={Data[++i].matchviewUrl}>
            <img src= {Data[i].thumbnail} alt="thumbnail" width={300} height={145}  onClick= {nextpage} />  
            </a>
            <div className="text-block">
                <p>{Data[i].title}</p>
                <p>{Data[i].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
           <a href={Data[++i].matchviewUrl}>
            <img src= {Data[i].thumbnail} alt="thumbnail" width={300} height={145}  onClick= {nextpage} />  
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
