import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';



//  Mi key Giphy
//  1sTzaBPrzXYwRt00x6YSIeUv156I17GA
// endpoint 
// api.giphy.com/v1/gifs/search
export const GifGrid = ({ category }) => {



    const {data:images, loading} = useFetchGifs(category);






    // getGifs()


    return (
        <>
            <h3>{category}</h3>

            {loading && <p className=" animate__animated animate__flash" >Cargando...</p> }

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem 
                            key={ img.id } 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
