import { useEffect, useState } from "react";
import axios, { Axios } from 'axios';
import Spinner from "./Spinner";
import UseGif from "../hooks/UseGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {

    // const[gif,setGif] = useState('');
    // const[loading,setLoading] = useState(false);
    
    // // async function fetchData() {
    // //     const response = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    // //     const output = await response.json();
    // //     console.log(output);
    // // }
    
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    //     const {data} = await axios.get(url);
    //     const imagesource = data.data.images.downsized_large.url;
    //     console.log(imagesource);
    //     setGif(imagesource);
    //     setLoading(false);
    // }

    const{gif,loading,fetchData} = UseGif();
    
    function clickHandler() {
        fetchData();
    }

    // useEffect(() => {
    //         fetchData();
    // }, []);

    return(
        <div className="w-1/2  bg-green-400 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-1xl uppercase underline font-bold">A Random Gif</h1>
            

            {
                loading ? (<Spinner/>):(<img src={gif} width="450" />)
            }

            <button onClick={clickHandler} className=" w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]" >
                Generate
            </button>
        </div>
    )
}
