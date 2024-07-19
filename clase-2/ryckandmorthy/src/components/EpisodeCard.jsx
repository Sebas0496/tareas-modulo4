import React from "react";
import '../css/EpisodeCard.css';

const EpisodeCard = ({ episode }) => {
    return (
        <>
            <div className="container-card">
                <div className="card">
                    <h3>{episode.name}</h3>
                    <p>Air Date: {episode.air_date}</p>
                    <p>Episode: {episode.episode}</p>
                </div>
            </div>
        </>
    )
}
export default EpisodeCard;