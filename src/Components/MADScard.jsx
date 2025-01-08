import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from "react-icons/fi";
import {motion} from 'framer-motion'

function MADScard({ desc, dragConstraintsdiv }) {
    return (
        <div  className="relative bg-zinc-100 py-10 md:w-80 w-full h-80 rounded-[70px] px-4 ">
            <p>{desc}</p>
            <Link to={"/contact"} className="w-fit mt-10 bg-black text-white p-2 rounded-full flex items-center justify-center gap-2 hover:scale-125 transition-all ease-linear duration-400"><FiArrowUpRight size={25} /></Link>
        </div>
    )
}

export default MADScard