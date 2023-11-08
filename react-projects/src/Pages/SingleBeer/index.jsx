import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function SingleBeer(){
    const [beer, setBeer] = useState('');
    const {beerId} = useParams();

    useEffect(()=>{
        axios.get(`${API_URL}/${beerId}`).then((response)=>{
            const oneBeer = response.data;
            setBeer(oneBeer)
            console.log(oneBeer);
        })
        .catch((error)=>console.log(error))
    }, [beerId])

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

export default SingleBeer;