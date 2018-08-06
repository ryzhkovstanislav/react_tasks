import React from 'react';
import {Card} from 'antd';

const PersonalCard = (props) => {
    return(
        <Card
            hoverable
            cover={<img alt="example" src={props.imageUrl} />}
        >
            <h3>{props.name}</h3>
        </Card>
    )
};

export default PersonalCard;
