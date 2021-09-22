import React from 'react'
import { SearchIcon, AtSymbolIcon,BellIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Profile from '../Assets/Images/login.jpg'
function TopBar(props) {
    return (
        <div className="h-16 pl-40 fixed bg-gradient-to-r from-purple-300 to-blue-500 w-full flex items-center justify-between pr-5 z-10">
            <div className="flex px-5 space-x-5 items-center">
                <SearchIcon className="w-5 h-5 text-white items-center"/>
                <input type="text" placeholder="Search For task" className="bg-transparent border-0 placeholder-white text-white outline-none focus:outline-none focus:ring-0 text-lg"/>
            </div>
            <div className="flex space-x-5">
                <AtSymbolIcon  className="w7 h-7 text-white"/>
                <BellIcon className="w7 h-7 text-white"/>
                <div className="flex items-center text-white space-x-4">
                    <h3 className="font-bold mr-5">The Miraj</h3>
                    <Image src={Profile} width="36" height="36" objectFit="cover" className="rounded-full"/>
                </div> 
            </div>
        </div>
    )
}

export default TopBar
