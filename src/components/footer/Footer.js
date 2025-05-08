import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home'
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="p-6 text-white bg-gradient-to-r from-pink-900 via-red-700 to-purple-900">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4 ">
                    <h2 className="font-bold text-black">Available Places</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Kabul</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Wardak</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Mazar</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Kandahar</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Herat</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Bamyan</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Noristan</Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-black">Available Tour</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Adventure</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Responsive Design</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Wilderness Safari</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Pioneer's Path</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">The Great Exploration</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Untamed Horizons Tour</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Explorer's Expedition</Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-black">The Ultimate Journey</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Pathways by Land, Air, Water & Foot</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Drive, Fly, Walk, Sail Exploration</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">The Four-Mode Adventure Tour</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">From Roads to Skies, Seas & Trails</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Land, Sky, Sea & Trail Adventure</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Drive, Fly, Walk & Sail Expedition</Link>
                        <Link className='hover:underline hover:text-black' rel="noopener noreferrer" href="#">Drive, Fly, Sail & Walk Adventure</Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-black">Community</h2>
                    <div className="flex flex-row text-sm gap-x-3 dark:text-gray-600">
                        <Link to={{ pathname: "/login" }} className='duration-500 hover:underline hover:text-black' rel="noopener noreferrer" href="#"><FaFacebook size={25} /></Link>
                        <Link to={{ pathname: "/login" }} className='duration-500 hover:underline hover:text-black' rel="noopener noreferrer" href="#"><FaTelegram size={25} /></Link>
                        <Link to={{ pathname: "/login" }} className='duration-500 hover:underline hover:text-black' rel="noopener noreferrer" href="#"><FaTwitter size={25} /></Link>
                        <Link to={{ pathname: "/login" }} className='duration-500 hover:underline hover:text-black' rel="noopener noreferrer" href="#"><FaInstagram size={25} /></Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="dark:text-gray-600">© Copyright 2025. All Rights Reserved <Link className='font-bold text-black underline' to={Home}>jalili</Link>.</span>
            </div>
        </footer>
    )
}

export default Footer