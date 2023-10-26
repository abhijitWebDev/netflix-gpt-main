import React, {useRef} from 'react'
import language from '../components/languageConstant'
import { useSelector, useDispatch } from 'react-redux'
import openai from '../utils/openAi';
import { API_OPTIONS } from './constant';
import { addGptMovieResult } from '../store/gptSlice';


const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.language);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const fetchMovie = async (movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const movie = await data.json();
    console.log(movie);
    return movie.results;
  };

  const handleGptSearchClick = async() => {
    console.log(searchText.current.value);

    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: ${searchText.current.value} only give me names of five movies, comma seperated, like the example result given ahead, Example Result: Angoor, Don, Golmaal, Hera Pheri, Jaane Bhi Do Yaaro `

    // Make an api call to gpt and get movie results
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
  
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",")

    //for each movie, I will search tmdb api and get the movie details
    const data = gptMovies.map((movie) => fetchMovie(movie));

    const movieResults = await Promise.all(data);
    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults: movieResults}));


  }
  return (
    <div className='pt-[20%] flex  justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} className="p-4 m-4 col-span-9" type="text" placeholder={language[langKey].gptSearchPlaceHolder} />
            <button className='m-4 px-4 py-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGptSearchClick} >{language[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar