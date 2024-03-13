import {useState, useEffect}  from 'react';
import axios  from "axios";

function AllCandy(){

    const [candy, setCandy] = useState([])

    useEffect(()=>{
        async function fetchCandy(){
            const {data} = await axios.get('/api/candy')

            setCandy(data)

        }

        fetchCandy()
    },[])

        console.log({candy})

    return<div>
        <h2>Candy:</h2>
        {candy.map(c => <div key={(c.id)} className='candy'>
            <h1>{c.name}</h1>
        </div>)}



    </div>
}


export default AllCandy