import {useEffect,useState,axios} from 'axios'
import {keys,res} from 'home.js'
function Gimme(props){
     let indi = props.indi;
     let Data = props.Data;
     let Total = props.total;
     indi++;
     for(let j=indi;j<Total;j++){
      <div className="col-auto p-3 ">
          <a href={Data[j].matchviewUrl}>
            <img src= {Data[j].thumbnail} alt="thumbnail" width={300} height={145}   />  
            </a>
            <div className="text-block">
                <p>{Data[j].title}</p>
                <p>{Data[j].competition}</p>
           </div>
        </div>
        }
}
function Maker(props){
    let Data = props.Data;
    let total = res[keys[0]];
    let indi=-1;
    for(let i=0;i<total;i++){
       
        <div className="row justify-content-center" key={i} on>
        <div className="col-auto p-3 ">
          <a href={Data[++indi].matchviewUrl}>
            <img src= {Data[indi].thumbnail} alt="thumbnail" width={300} height={145}   />  
            </a>
            <div className="text-block">
                <p>{Data[indi].title}</p>
                <p>{Data[indi].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
        <a href={Data[++indi].matchviewUrl}>
            <img src= {Data[indi].thumbnail} alt="thumbnail" width={300} height={145}   />  
            </a>
            <div className="text-block">
                <p>{Data[indi].title}</p>
                <p>{Data[indi].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
        <a href={Data[++indi].matchviewUrl}>
            <img src= {Data[indi].thumbnail} alt="thumbnail" width={300} height={145}  />  
            </a>
            <div className="text-block">
                <p>{Data[indi].title}</p>
                <p>{Data[indi].competition}</p>
           </div>
        </div>
        <div className="col-auto p-3">
           <a href={Data[++indi].matchviewUrl}>
            <img src= {Data[indi].thumbnail} alt="thumbnail" width={300} height={145}   />  
            </a>
            <div className="text-block">
                <p>{Data[indi].title}</p>
                <p>{Data[indi].competition}</p>
           </div>
        </div>
        
        </div>
         if((total-indi)<4){
            break;
        }
    }
    <div className="row justify-content-center"  on>
       <Gimme indi={indi} Data={Data} Total={total}/>
        </div>
    
}

function Grid(){
    const [Data,setData] = useState([])
    useEffect(()=>{
        requestAPI();
         // eslint-disable-next-line
    },[])
   
    //1303- 972 1028 1019 1366
    window.addEventListener('resize', function(event) {
     console.log(event.target.screen.height,event.target.screen.width) 
  });
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
   
    console.log(Data)
   
    return (
<div className='container-fuild justify-content-center' id='grid'>
<span>{keys[0]} Matches</span>
  <Maker Data={Data}/>
</div>
    )
}


function Link1(){
    return(
    <>
     
     <Grid/>
     </>
    )
}

export default Link1;