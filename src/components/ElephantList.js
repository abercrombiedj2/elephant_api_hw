import React from 'react';
import ElephantListItem from './ElephantListItem';
import './ElephantList.css';

const ElephantList = ({elephants, onElephantSelect}) => {

    const elephantListNodes = elephants.map((elephant) => {
        return <ElephantListItem key={elephant._id} elephant={elephant} onElephantSelect={onElephantSelect} />
    })
    
    return(
        <div className='elephant-list'>
            <h2>Elephant List</h2>
            <ul>
                {elephantListNodes}
            </ul>
        </div>
    )

}

export default ElephantList;