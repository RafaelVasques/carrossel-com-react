import React, {useState, useEffect} from 'react';
import { useAuth } from '../../contexts/auth';
import Carousel from '../../components/Carousel';
import CreateMovieForm from '../../components/CreateMovieForm';
import LoginMenu from '../../components/LoginMenu';
import api from '../../api';
import './style.css';

function MoviesPage() {

  const { user, setUser } = useAuth(); 
  const [carouselData, setCarouselData] = useState([])

  useEffect(()=>{

    api.getMovies().then((data)=>{
      setCarouselData(data.reverse());
    });

    api.getUser().then(setUser);
  }, []);

  return (
    <div className='movies-container'>
        <Carousel
          data={carouselData}
          className='carousel1'/>

        {
        user?
          <CreateMovieForm />
          :null
        }
        <LoginMenu />
    </div>
  );

}

export default MoviesPage;
