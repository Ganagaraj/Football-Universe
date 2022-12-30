import {useLayoutEffect,useState} from 'react'
import {keys,res} from './home'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './home.css'
function Gimme(props){ 
     let indi = props.indi;
     let Data = props.Data;
     let Total = props.total;
     indi++;
     let result = []
     console.log("hii from Gimme")
     for(let j=indi;j<Total;j++){
     result.push( 
     <div className="col-auto p-3 ">
          <a href={Data[j].matchviewUrl}>
            <img src= {Data[j].thumbnail} alt="thumbnail" width={300} height={145}   />  
            </a>
            <div className="text-block">
                <p>{Data[j].title}</p>
                <p>{Data[j].competition}</p>
           </div>
        </div>)
        }
        return result;
}   
function Maker(props){
    let Data = props.Data;                                              
    let total = res[keys[2]];
    let indi=-1;
    let fData = Data.filter((val)=>{
        return keys[2] === val.competition;
    })
    console.log(fData)
    console.log(total)
    let result = []
    for(let i=0;i<total;i++){
        console.log("ohhh godd")
    result.push(
    <div className="row justify-content-center" key={i} >  
        <div className="col-auto p-3 ">
          <a href={fData[++indi].matchviewUrl}>
            <img src= {fData[indi].thumbnail} alt="thumbnail" width={300} height={145}   />  
            </a>
            <div className="text-block">
                <p>{fData[indi].title}</p>
                <p>{fData[indi].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
        <a href={fData[++indi].matchviewUrl}>
            <img src= {fData[indi].thumbnail} alt="thumbnail" width={300} height={145}   />  
            </a>
            <div className="text-block">
                <p>{fData[indi].title}</p>
                <p>{fData[indi].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
        <a href={fData[++indi].matchviewUrl}>
            <img src= {fData[indi].thumbnail} alt="thumbnail" width={300} height={145}  />  
            </a>
            <div className="text-block">
                <p>{fData[indi].title}</p>
                <p>{fData[indi].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
           <a href={fData[++indi].matchviewUrl}>
            <img src= {fData[indi].thumbnail} alt="thumbnail" width={300} height={145}   />  
            </a>
            <div className="text-block">
                <p>{fData[indi].title}</p>
                <p>{fData[indi].competition}</p>
           </div>
        </div>
        
        </div> )
         if((total-indi)<=4){
            console.log("break")
            break;
        }
    }
       result.push(
        <div className="row justify-content-center">
            <Gimme indi ={indi} Data={fData} total ={total}/>
        </div>)

  return result;
    
}

function Grid(){
    const [Data,setData] = useState([])
    const [isDone,setisDone] = useState(false)
    useLayoutEffect(()=>{
        console.log("hii bro")
        requestAPI();
         // eslint-disable-next-line
    },[])
   

    var requestAPI = async () => {
        try {
            const res = await axios.get('https://www.scorebat.com/video-api/v3/feed/', {
                params: {token:'NDIzNThfMTY3MTI2NDI2NV83OWQzZWE3Mjk5ZTFmNzk3MWRiNDU3YzRlMWM5M2Q1MzEwOTg5OTAx'}
            });
            setData(res.data.response)
            setisDone(true)
            
        } catch (err) {
            console.log(err);
        }
        
    };
    
    console.log(Data)
   if(isDone){
    return (
<div className='container-fuild justify-content-center' id='grid'>
<span className='title'
>{keys[2]} Matches</span>

  <Maker Data={Data}/>

  
</div>
    )
   }
}


function Link3(){
    return(
    <>
     <Grid/>
     </>
    )
}

export default Link3;