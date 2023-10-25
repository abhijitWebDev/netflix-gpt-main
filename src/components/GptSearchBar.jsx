import React from 'react'
import language from '../components/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.language);
  return (
    <div className='pt-[20%] flex  justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input className="p-4 m-4 col-span-9" type="text" placeholder={language[langKey].gptSearchPlaceHolder} />
            <button className='m-4 px-4 py-4 bg-red-700 text-white rounded-lg col-span-3'>{language[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar