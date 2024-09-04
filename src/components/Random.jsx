import React from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

  // const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

  // const [gif,setgif]=useState("");
  // const [loading,setloading]=useState(false)

  // async function fetchData(){
  //   setloading(true)
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data}= await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   setgif(imageSource)
  //   setloading(false)
  // }


  // useEffect(()=>{
  //   fetchData();
  // },[])
  const {gif,loading,fetchData}=useGif();


  return (

 <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col gap-y-5 items-center mt-[30px]'>
      <h1 className='font-semibold text-black text-3xl underline mt-3'> A Random GIF</h1>
     {
      loading ? (<Spinner/>) : ( <img src={gif} alt='random' width="450"></img>)
     }
      <button className="w-10/12 rounded-lg text-lg bg-yellow-300 py-2 text-indigo-900 font-medium mb-2" onClick={()=>fetchData()}>
        Generate Gif
      </button>
      
    </div>
  )
}

export default Random
