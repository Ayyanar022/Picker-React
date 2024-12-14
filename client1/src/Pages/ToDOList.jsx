import React from "react"
import { FaRegEye } from "react-icons/fa6";
import { HiMiniArrowPath } from "react-icons/hi2";
import { GrList } from "react-icons/gr";
import { HiDotsHorizontal } from "react-icons/hi";

const ToDoList = () => {

    return (
        <div className="w-full h-screen ">
            <div className="w-full h-full flex justify-around items-center gap-10 bg-pink-200 p-[20px]" >


                <div className="w-[40%] shadow-sm min-h-[500px] bg-white p-8  rounded-3xl">
                    picker
                </div>

                {/* TODO */}
                <div className="w-[40%] shadow-sm outline-1 min-h-[500px]  bg-white border-[2px] border-gray-500 rounded-3xl">
                   {/* HEADER */}
                   <div className="w-full flex justify-center items-center ">
                    <div className="flex justify-center items-center gap-2">
                        <h3>INPUTS</h3>
                        {<p>0</p>}
                    </div>

                    <div className="flex justify-center items-center gap-3 text-lg ">
                    <FaRegEye />
                    <HiMiniArrowPath />
                    <GrList />
                    <HiDotsHorizontal />

                    </div>
                    <div>

                    </div>

                   </div>
                

                </div>

            </div>
        </div>
    )
}

export default ToDoList;