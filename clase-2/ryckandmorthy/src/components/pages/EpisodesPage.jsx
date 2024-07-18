import {useState, useEffect} from "react"
const EpisodesPage = () => {
        useEffect(() => {
           fetch(`https://rickandmortyapi.com/api/episode`)
           .then(response => response.json())
           .then(data => {
            console.log(data.results) 
           })
           
        },[])
    return (
        <>  
        <h2>Lista de episodios</h2>
        </>
    )
}

export default EpisodesPage;