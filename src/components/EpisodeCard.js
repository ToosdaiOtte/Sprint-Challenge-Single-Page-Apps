import React from 'react';
import { Card } from 'semantic-ui-react';

export default function EpisodeCard(props){
    return(
        <Card>
            <Card.Content>
                <Card.Header>{props.episode.name}</Card.Header>
                <Card.Meta>
                    {props.episode.episode}
                </Card.Meta>
                <Card.Meta>
                    Air Date: {props.episode.air_date}
                </Card.Meta>
            </Card.Content>
        </Card>
    );
};