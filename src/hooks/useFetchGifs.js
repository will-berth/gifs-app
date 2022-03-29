import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // useEffect(()=>{
    //     getGifs(category).
    //         then(imgs => setImages(imgs))
    // }, [category])
    useEffect(()=>{

        getGifs(category)
            .then(img => {
                setState({
                    data: img,
                    loading: false
                })
            })
    }, [category])

    return state; // {data: [], loading: true}
}