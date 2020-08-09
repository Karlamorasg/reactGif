import React, {useState, useEffect} from 'react';
import Navbar from '../componentes/Navbar';
import Search from '../componentes/Search';
import GiftCard from '../componentes/GiftCard';
import axios from 'axios';

const MainContainer = () => {

    const [gifs, setGifs]= useState([])
    const [cargando, setCargando]= useState(false)

    const getGif = (busqueda)=>{

        if (!busqueda){
            busqueda ='demo';
        }
        
        const URL = `https://api.giphy.com/v1/gifs/search?api_key=9juogG0cZyD2xhCrJqPjZZ2O27m4P4rp&q=${busqueda}&limit=5`;
       

        axios.get(URL)
            .then( response =>setGifs(response.data.data))
            .catch( error => console.log(error));
    }


    useEffect(()=>{
        getGif();
    }, []); // se le pone un segundo parametro para que se reinicie cada que se efecta la funcion 



    return (
        <div>
            <Navbar />
            <div className = 'container'> 

           
            <Search getGif= {getGif} />
            {gifs.map(gif => {
                return ( 
                    <GiftCard 
                    key = {gif.id}
                    imagen = {gif.images.downsized_medium.url}
                    titulo = {gif.title}
                    website = {gif.url} />
                )
            })}

            </div>


           
        </div>
    )
}

export default MainContainer;
