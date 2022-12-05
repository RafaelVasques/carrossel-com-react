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
        <div className='create-movie-form'>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li><label>Título <input type="text" name="title" /></label></li>
                    <li><label>Sinopse <input type="text" name="synopsis" /></label></li>
                    <li><label>Ano <input type="text" name="year" /></label></li>
                    <li><label>Rate <input type="text" name="rate" /></label></li>
                    <li><label>Image <input type="file" name="file" /></label></li>
                    <li><button type="submit">Cadastrar</button></li>
                </ul>
            </form>
        </div>
    );
}

export default CreateMovieForm;
