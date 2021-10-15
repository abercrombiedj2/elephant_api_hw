import React from 'react';
import './ElephantDetail.css';

const ElephantDetail = ({elephant, clearSelectedElephant}) => {

    return(
        <div className='elephant-detail'>
            <h2>Elephant Details</h2>
            <h3>Name: {elephant.name}</h3>
            <p>Species: {elephant.species}</p>
            <p>Sex: {elephant.sex}</p>
            <p>DOB: {elephant.dob}</p>
            <img src={elephant.image} width='300px'/>
            <div className='button'>
                <button onClick={clearSelectedElephant}>Return</button>
            </div>
        </div>
    )

}

export default ElephantDetail;