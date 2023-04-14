import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

const URL_BASE = 'https://be-a-rym.up.railway.app/api';
const API_KEY = '4c698eeb62d2.5c2b3de2e560953c3a12'; 

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/character/${id}/?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
            if (data.name){
                setCharacter(data);
            } else {
                window.alert('No hay personaje con ese ID')
            }
        });
        return setCharacter({});
    }, [id]);

    return(
        <div className={style.container}>

            <img className={style.image} src={character.image} alt={character?.name}/>

            <div className={style.containerInfo}>
                <p className={style.info}>{character?.name}</p>
                <p className={style.info}>{character?.status}</p>
                <p className={style.info}>{character?.species}</p>
                <p className={style.info}>{character?.gender}</p>
                <p className={style.info}>{character?.origin?.name}</p>
            </div>   
        </div>
    )
}

export default Detail;