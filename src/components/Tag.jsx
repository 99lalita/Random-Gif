import {useState } from "react";
import Spinner from "./Spinner";
import UseGif from "../hooks/UseGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

    // const[gif,setGif] = useState('');
    // const[loading,setLoading] = useState(false);
    const[tag,setTag] = useState('dog');
    const {gif,loading,fetchData} = UseGif(tag);
    
    // async function fetchData() {
    //     const response = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    //     const output = await response.json();
    //     console.log(output);
    // }
    
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    //     const {data} = await axios.get(url);
    //     const imagesource = data.data.images.downsized_large.url;
    //     console.log(imagesource);
    //     setGif(imagesource);
    //     setLoading(false);
    // }

    function clickHandler() {
        fetchData(tag);
    }

    // useEffect(() => {
    //         fetchData();
    // }, []);


    function changeHandler(event) {
        setTag(event.target.value);
    }

    return(
        <div className="w-1/2  bg-blue-400 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-1xl uppercase underline font-bold">Random {tag} Gif</h1>
            

            {
                loading ? (<Spinner/>):(<img src={gif} width="450" />)
            }

            <input type="text"  placeholder = "Enter the Topic"className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={changeHandler} value={tag}/>

            <button onClick={clickHandler} className=" w-10/12 bg-white text-xl py-2 rounded-lg  mb-[20px] font-bold" >
                Generate
            </button>
        </div>
    )
}
