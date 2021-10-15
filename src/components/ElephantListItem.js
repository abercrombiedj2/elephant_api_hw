import React from 'react';

const ElephantListItem = ({elephant, onElephantSelect}) => {

    const handleElephantClick = (clickedElephant) => {
        onElephantSelect(clickedElephant)
    }

    return(
        <li onClick={() => {handleElephantClick(elephant)}}>{elephant.name}</li>
    )

}

export default ElephantListItem;