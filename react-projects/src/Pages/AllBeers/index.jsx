import axios from "axios"; // Get a request from the APIs
import { useEffect, useState } from "react"; // useful for usage ofReact Features
import { Link } from "react-router-dom"; // useful for navigation

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeers(){

    const [beerList, setBeerList] = useState([])

    useEffect(()=>{
        axios.get(API_URL).then((response)=>{
            setBeerList(response.data);
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    return(
        <div>
            {beerList.map((beer)=>{
                return (
                    <div key={beer._id}>
                        <div>
                            <img src={beer.image_url} />
                        </div>
                        <div>
                        <Link to={`/beers/${beer._id}`}>
                            <h2>{beer.name}</h2>
                            <h3>{beer.tagline}</h3>
                            <p><b>Created by:</b> {beer.contributed_by}</p>
                        </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeers;