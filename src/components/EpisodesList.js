import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList(){
    const [ episodes, setEpisodes ] = useState([]);

    useEffect(() => {
        const getEpisodes = () => {
            Axios.get('https://rickandmortyapi.com/api/episode')
            .then(res => {
                console.log(res.data.results);
                setEpisodes(res.data.results);
            }).catch(err => {
                console.log('ERROR: ', err);
            })
        }
        getEpisodes();
    }, []);

    return(
        <div className="episodes-list grid-view">
            {episodes.map(episode => (
                <EpisodeCard
                    key={episode.id}
                    episode={episode}
                />
            ))}
        </div>
    )
}