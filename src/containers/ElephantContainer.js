import React, {useState, useEffect} from 'react';
import ElephantList from '../components/ElephantList';
import ElephantDetail from '../components/ElephantDetail';

const ElephantContainer = () => {

    const [allElephants, setAllElephants] = useState([])
    const [selectedElephant, setSelectedElephant] = useState(null)

    const fetchAllElephants = () => {
        fetch('https://elephant-api.herokuapp.com/elephants/?_results=10')
        .then(response => response.json())
        .then(data => setAllElephants(data.slice(0, 47)))
    }

    useEffect(() => {
        fetchAllElephants()
    }, [])

    const handleElephantSelect = (elephant) => {
        setSelectedElephant(elephant)
    }

    const clearSelectedElephant = () => {
        setSelectedElephant(null)
    }

    return(
        <div className='content'>
            <h1>Elephants</h1>
            <ElephantList elephants={allElephants} onElephantSelect={handleElephantSelect} />
            {selectedElephant && <ElephantDetail elephant={selectedElephant} clearSelectedElephant={clearSelectedElephant} />}
        </div>
    )

}

export default ElephantContainer;