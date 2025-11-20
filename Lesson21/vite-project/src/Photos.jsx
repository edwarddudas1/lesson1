import { useState, useEffect } from "react";
import { renderMatches, useSearchParams } from "react-router-dom";

export default function Photos(q) {
    const [image, setImage] = useSearchParams([]);

    useEffect(() => {
        const fetchImages = async () => {
        try{
            const response = async("https://api.thecatapi.com/v1/images/search?limit=10");
            const data = response.json();
            setImage(q)
        } catch (error) {
            console.log(error)
        }
        }
        
    }, [])
    return(
        <>
        <p>Lesson21</p>
        </>
    )
    
}