import React from "react";
import api from "../../api";
import { useAuth } from '../../contexts/auth';
import "./style.css";

export default function MovieCard (props){

    const { user, setUser } = useAuth(); 

    function deleteImage(){
        const id = props.data.id;
        api.deleteMovie(id).then(()=>{
            window.location.reload();
        });
    }

    return (
        <div className='card' style={{
            backgroundImage: `url(/images/${props.data.image})`,
            width: `${props.width ?? 0}px`}}>
            <div>{props.data.title}</div>
            <div>{props.data.image}</div>
            <div>{props.data.rate}</div>
            <div>{props.data.year}</div>
            <div>{props.data.synopsis}</div>
            {user?
                <div className="trash-button" onClick={deleteImage}>
                    <div className="gg-trash"></div>
                </div> : null
            }
        </div>
    );
}