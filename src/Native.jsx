import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { IoHardwareChip } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { FaSteamSquare } from "react-icons/fa";

function Native() {
    return (
        <div>
            <div className="nativeDev relative px-4 my-20  flex w-full gap-4 flex-col md:flex-row">
                <div className="left bg-zinc-800 md:w-1/2 p-4 md:p-20 rounded-3xl" >
                    <Link to={"/contact"} className="w-fit mt-10 bg-white p-4 rounded-full flex items-center justify-center gap-2 hover:scale-125 transition-all ease-linear duration-400"><FiArrowUpRight size={25} /></Link>
                    <p className="text-white text-3xl md:text-5xl leading-none my-10 ">Native App Development</p>

                    <p className='text-zinc-400 '>At Bellway Infotech, our Native app developers, including iOS and Android experts, have extensive experience creating unique and secure applications for specific platforms. We tailor each app to align with your objectives and goals, ensuring seamless performance and user experience.</p>
                </div>
                <div className="right relative md:w-1/2 rounded-3xl flex flex-col gap-2">
                    <div className=" bg-zinc-200 w-full p-4 md:px-20 py-2 md:h-1/2 rounded-3xl" >
                        <Link to={"/contact"} className="absolute top-0 right-2 w-fit mt-10 bg-black text-white p-2 rounded-full flex items-center justify-center gap-2 hover:scale-125 transition-all ease-linear duration-400"><FiArrowUpRight size={25} /></Link>
                        <p className="text-black text-3xl md:text-3xl leading-none my-4 ">Cross-Platform App Development</p>

                        <p className='text-zinc-900 '>At Bellway Infotech, our cross-platform app developers specialize in creating hybrid applications using advanced technologies like Flutter and React Native. We deliver cost-effective solutions tailored to businesses of all sizes and across various industries.</p>
                    </div>
                    <div className='w-full  md:h-1/2 flex  gap-2'>
                        <div className='bg-yellow-500 h-full md:w-1/2 rounded-3xl p-4 text-white'>
                            <div className='flex items-center gap-2 my-3'><FaApple size={30} /> Platform Specific</div>
                            <div className='flex items-center gap-2'><IoHardwareChip size={30} />Hardware Integration
                            </div>
                            <div className='flex items-center gap-2 my-3'><IoIosPhonePortrait size={30} />
                                App Optimization
                            </div>
                        </div>
                        <div className='bg-purple-300 h-full md:w-1/2 rounded-3xl p-4 '>
                            <div className='flex items-center gap-2 my-3'><FaLaptopCode size={30} />
                                Reusable Code Base
</div>
                            <div className='flex items-center gap-2'><IoHardwareChip size={30} />Hardware Acceleration

                            </div>
                            <div className='flex items-center gap-2 my-3'><FaSteamSquare size={30} />

                                Rapid Development
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Native