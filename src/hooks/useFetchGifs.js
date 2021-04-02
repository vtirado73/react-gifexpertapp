import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    
    useEffect(() => {
        getGifs(category)
            .then( (img)=>{
                setstate({
                    data:img,
                    loading: false
                })
            } );// otra forma de enviar lo que viene de la proimesa hacia la funcion setImages
    }, [category]);



    return state;
}
