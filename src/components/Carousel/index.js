import {useRef, useState, useEffect} from 'react';
import React from 'react';
import './style.css';

import MovieCard from '../MovieCard';

export default function Carousel(props) {

    const [currentCard, setCurrentCard] = useState(0);
    const [offsetLeft, setOffsetLeft] = useState(0);
    const wrapper = useRef();

    function goBack(){
        
        if(currentCard > 0){
            setCurrentCard(currentCard - 1);
        }else{
            setCurrentCard(0);
        }
        
    }

    function goForward(){
        
        if(currentCard < props.data.length - 1){
            setCurrentCard(currentCard + 1)
        }else{
            setCurrentCard(props.data.length - 1)
        }

    }

    function handleResize(){
        let offsetWidth = wrapper.current?.offsetWidth ?? 240;
        setOffsetLeft(currentCard * -offsetWidth);
    }

    useEffect(() => {

        handleResize()
        window.addEventListener('resize', handleResize)

    },[wrapper.current, currentCard])

    return (

        <div className={`${props.className} page-padding`}>
        
            <div className='carousel-container'>
                
                <div className='carousel-button carousel-left-button' onClick={goBack}>
                    <div className='gg-chevron-left'></div>
                </div>

                <div className='carousel-wrapper' ref={wrapper}>
                    <div className='carousel' style={{
                            left: `${offsetLeft}px`
                        }
                    }>

                        {props.data.map((movieCard, index) => {
                            return <MovieCard
                                key = {index}
                                data = {movieCard}
                                width = {wrapper.current?.offsetWidth}
                            />
                        })}

                    </div>
                </div>

                <div className='carousel-button carousel-right-button' onClick={goForward}>
                    <div className='gg-chevron-right'></div>
                </div>
                
            </div>

        </div>

    );

}
