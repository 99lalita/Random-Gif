import { useEffect, useState } from "react";
import axios, { Axios } from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const UseGif = (tag) => {
    const RandomTagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const RandomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    const[gif,setGif] = useState('');
    const[loading,setLoading] = useState(false);
    
    // async function fetchData() {
    //     const response = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    //     const output = await response.json();
    //     console.log(output);
    // }
    
    async function fetchData() {
        setLoading(true);
        const {data} = await axios.get(tag?(RandomTagurl):(RandomMemeurl));
        const imagesource = data.data.images.downsized_large.url;
        console.log(imagesource);
        setGif(imagesource);
        setLoading(false);
    }


    useEffect(() => {
            fetchData('dog');
    }, []);
    

    return {gif,loading,fetchData};
}

export default UseGif;