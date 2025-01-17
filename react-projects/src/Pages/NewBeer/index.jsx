import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function NewBeer(){
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()

        const requestBody = {name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy}

        axios.post(`${API_URL}/new`, requestBody).then(()=>{
            navigate('/beers')
        })
        .catch((error)=> console.log(error));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: <input name="name" type="text" onChange={(e)=>setName(e.target.value)} value={name}></input></label>
                <label>Tagline: <input name="tagline" type="text" onChange={(e)=>setTagline(e.target.value)} value={tagline}></input></label>
                <label>Description: <textarea name="description" type="text" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea></label>
                <label>First Brewed: <input name="first_brewed" type="text" onChange={(e)=>setFirstBrewed(e.target.value)} value={firstBrewed}></input></label>
                <label>Brewer's Tips: <input name="brewers_tips" type="text" onChange={(e)=>setBrewersTips(e.target.value)} value={brewersTips}></input></label>
                <label>Attenuation Level: <input name="attenuation_level" type="number" onChange={(e)=>setAttenuationLevel(e.target.value)} value={attenuationLevel}></input></label>
                <label>Contributed By: <input name="contributed_by" type="text" onChange={(e)=>setContributedBy(e.target.value)} value={contributedBy}></input></label>
                <button type="submit">Add Beer</button>
            </form>
        </div>
    )
}

export default NewBeer;