import { useState, useEffect } from "react"
import EpisodeCard from "../EpisodeCard";

const EpisodesPage = () => {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode`)
            .then(response => response.json())
            .then(data => setEpisodes(data.results))

    }, [])
    return (
        <>
            <h2>Lista de episodios</h2>
            <div className="episode-list">
                {episodes.map((episode) => {
                    return (
                        <EpisodeCard key={episode.id} episode={episode} ></EpisodeCard>
                    )
                })}
            </div>
        </>
    )
}

export default EpisodesPage;