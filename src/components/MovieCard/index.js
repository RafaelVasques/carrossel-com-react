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
            
            <div className="card-information">

                <i className="gg-chevron-double-up-o"></i>
                
                <div className="movie-title-wrapper">
                    <h1>{props.data.title}</h1>
                    <div className="movie-info-wrapper">
                        <div className="movie-rate-wrapper">
                            <i className="gg-hello"></i>
                            Rate: {props.data.rate}
                        </div>
                        <div className="movie-year">
                            Ano - {props.data.year}
                        </div>
                    </div>
                </div>

                
                <div className="synopsis-wrapper">
                    <div className="synopsis-header">
                        <i className="gg-file-document"></i>
                        Sinopese:
                    </div>
                    <div className="synopsis">
                        {props.data.synopsis} dasdasdadasd
                    </div>
                    
                </div>

            </div>

            {user?
                <div className="trash-button" onClick={deleteImage}>
                    <div className="gg-trash"></div>
                </div> : null
            }
        </div>
    );
}