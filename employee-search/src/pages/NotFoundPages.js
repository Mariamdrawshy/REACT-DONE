import React from 'react';
import { FaArrowRotateLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const NotFoundPages = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col pt-20">
      <h1 className="text-red-500 font-bold text-4xl block">404 Not Found</h1>
      <br />
      <Link to={"/"} className='btn btn-black'><FaArrowRotateLeft />
        Go Back</Link>
    </div>
  )
}

export default NotFoundPages