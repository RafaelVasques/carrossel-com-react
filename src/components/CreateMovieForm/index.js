import React, {useState, useEffect} from 'react';
import { useAuth } from '../../contexts/auth';
import Carousel from '../../components/Carousel';
import api from '../../api';
import './style.css';

let movieData = new FormData();

function CreateMovieForm() {

    function handleSubmit(event){
        console.log(event);
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        api.createMovie(formData).then(()=>{
            window.location.reload();
        });
    }

    return (
        <div className='create-movie-form page-padding'>
            <h2>Cadastrar novo filme da Marvel</h2>
            <form onSubmit={handleSubmit}>
                    <input required type="text" name="title" placeholder='Título'/>
                    
                    <div className='form-line2'>
                        <input required type="number" className="input-rate" name="rate" placeholder='Rate'/>
                        <input required type="number" name="year" placeholder='Ano'/>
                    </div>
                    
                    <textarea required name="synopsis" placeholder='Sinopse'/>
                    
                    <div className="choose-image">
                        <label htmlFor="file-image" >Escolher Imagem</label>
                    </div>

                    <input required type="file" name="file" placeholder='Imagem' id="file-image"/>
                    <button type="submit" >Cadastrar</button>
            </form>
        </div>
    );
}

export default CreateMovieForm;
