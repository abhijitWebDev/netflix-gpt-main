import React from 'react'



const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video p-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
    <h1 className="text-6xl text-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div className="">
      <button className="bg-white p-4 px-12 text-lg text-black rounded-md hover: bg-opacity-80 "> Play</button>
      <button className="bg-gray-700 p-4 px-12 text-lg text-white rounded-md bg-opacity-50 mx-2">More info</button>
    </div>
    </div>
  )
}

export default VideoTitle