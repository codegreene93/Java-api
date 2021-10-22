import React, {useState, useEffect} from 'react';
import { encode as btoa} from 'base-64'


const Fetch = () => {

    const [gotIt, setGotIt] = useState('') 
    

    useEffect(() => {
        fetch("http://localhost:8080/java-ee-webservices/webapi/myresource/firstnames", {
            method: 'get', 
            headers: {
                'Authorization': 'Basic ' +  btoa('admin:password'),
                'Content-Type': 'application/json',
                'credentials': 'include'
            }
        })
        .then(res => res.json())
        .then((result) => {
            setGotIt(result)
        })
    }, [])
    
    return(
        <>
            <p>{gotIt}</p>
        </>
    )
    
}

export default Fetch