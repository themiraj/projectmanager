import React from 'react'
import Image from 'next/dist/client/image';
import {ChatAlt2Icon, PaperClipIcon,PlusIcon   } from '@heroicons/react/outline';
function CardItem({data}) {

    return (
        <>
        {data ? 
        <div className="bg-white rounded-md p-3 mt-3">
            <label 
                className={`bg-gradient-to-r from-blue-500 to-blue-200 px-2 py-1 text-white text-sm 
                    ${data.priority === 0 ? 'from-blue-400 to-blue-500' :
                        data.priority === 1 ? 'from-green-500 to-blue-500' :
                        'from-red-500 to-red-200'
                    }
                    
                `}>
                {                
                
                    data.priority === 0 ? "Low Prioprity" : data.priority === 1 ?
                    "Medius Priority" : "High Priority"
                }
                 
            </label>
            <h5 className="text-md my-3 text-lg leading-6">Company website redesign</h5>
            <div className="flex justify-between">
                <div className="flex space-x-2 items-center">
                <span className="flex space-x-2 items-center">
                    <ChatAlt2Icon className="w-4 h-4 text-gray-500"/>
                    <span>1</span>
                </span>
                <span className="flex space-x-2 items-center">
                    <PaperClipIcon className="w-4 h-4 text-gray-500"/>
                    <span>1</span>
                </span>
                </div>
                <ul className="flex space-x-3">
                
                <li>
                    <Image src="https://randomuser.me/api/portraits/men/77.jpg" width="36" height="36" objectFit="cover" className="rounded-full"/>
                </li>
                <li>
                    <button className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full">
                    <PlusIcon className="w-5 h-5 text-gray-500"/>
                    </button>
                </li>

                </ul>
            </div>
        </div>
        : false}
        </>
    )
}

export default CardItem
