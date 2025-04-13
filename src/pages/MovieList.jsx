import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from '../components';
import { useFetch } from '../hooks/useFetch';

export const MovieList = ({title, apiPath}) => {

  const {data:movies} = useFetch(apiPath);
  useEffect(()=>{
    document.title=title;
  })
  const navigator=useNavigate();
  return (
    <div>
      <main className='container'>
        {title=="Your Guide to Great Movies"?(<div className='bg-body-tertiary p-5 border border-3 rounded-4 mb-5'>
        <h3>Welcome to AK MovieHunt</h3>
        <p className='text-dark'>Discover top-rated classics, explore hidden gems, and dive deep into the world of cinema — all in one place with MovieHunt.</p> 
        <button className='btn btn-primary' onClick={()=>{
          navigator("/movies/upcoming");
        }}>Explore Now</button></div>):("")}

        <h5 className='text-active py-2 border-bottom'>{title}</h5>
       
       <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2'>
       {movies.map((movie)=>{
        return <Card key={movie.id} movie={movie}/>
       })}
       </div>
      </main>
    </div>
  )
}
