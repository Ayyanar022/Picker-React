
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <div className="w-full h-screen  bg-gradient-to-tr from-orange-400 via-pink-500 to-red-600 bg-gray-500 flex justify-center items-center">

        <div className='flex flex-col justify-center gap-3 items-center bg-white bg-opacity-20 shadow-md outline-1 min-h-[60%] min-w-[40%] '>
            <Link to={"/todo"} className='text-white text-[30px] font-bold shadow-sm '>
                TODO
            </Link>

        </div>

        </div>
    )
}

export default Home;