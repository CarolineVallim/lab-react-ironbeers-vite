import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function RandomBeer(){
    const [beer, setBeer] = useState('');

    useEffect(()=>{
        axios.get(`${API_URL}/random`)
            .then((response)=>{
                setBeer(response.data);
            })
    }, []);

    return(
        <div>
            <div>
                <img src={beer.image_url} />
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>{beer.name}</td>
                        <td>{beer.attenuation_level}</td>
                    </tr>
                    <tr>
                        <td>{beer.tagline}</td>
                        <td>{beer.first_brewed}</td>
                    </tr>
                </tbody>
            </table>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default RandomBeer;