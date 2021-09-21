import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/dist/client/image';
import CardItem from '../components/CardItem';
import { ChevronDownIcon,PlusIcon,DotsVerticalIcon, PlusCircleIcon } from '@heroicons/react/outline';
import BoardData from '../data/board-data.json'
import {DragDropContext, Draggable,Droppable} from 'react-beautiful-dnd'
export default function Home() {
  return (
    <Layout>
      <div className="p-10">
        {/* Borad Header */}
        <div className="flex justify-between">
            <div className="flex items-center">
              <h4 className="text=2xl font-bold text-gray-500">Studio Board</h4>
              <ChevronDownIcon className="w-7 h-7 text-gray-500 rounded-full bg-white p-2 ml-5 shadow-xl"/>
            </div>
            <div>
              <ul className="flex space-x-3">
                <li>
                  <Image src="https://randomuser.me/api/portraits/men/75.jpg" width="36" height="36" objectFit="cover" className="rounded-full"/>
                </li>
                <li>
                  <Image src="https://randomuser.me/api/portraits/men/76.jpg" width="36" height="36" objectFit="cover" className="rounded-full"/>
                </li>
                <li>
                  <Image src="https://randomuser.me/api/portraits/men/77.jpg" width="36" height="36" objectFit="cover" className="rounded-full"/>
                </li>
                <li>
                  <button className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center">
                    <PlusIcon className="w-5 h-5 text-gray-500"/>
                  </button>
                </li>

              </ul>
            </div>
        </div>
        {/* Board Column */}
        <DragDropContext>
        <div className="grid grid-cols-4 gap-5 my-5">
          {
            BoardData.map((board,index) => {
              return(
                  <div className="bg-gray-100 p-3 rounded-md shadow-md flex flex-col relative overflow-hidden" key={index}> 
                    <span className="w-full h-1 bg-gradient-to-r from-pink-700 to bg-red-200 absolute inset-x-0 top-0"></span> 
                    <h4 className="flex justify-between items-center">Backlog
                      <DotsVerticalIcon className="w-5 h-5 text-gray-500"/>
                    </h4>
                      {
                        board.items.length > 0 && (
                          board.items.map((items,iIndex)=>{
                            return(
                              <CardItem key={iIndex} data={items}/>
                            )
                          })
                        )
                      }
                      <button className="flex justify-center items-center mt-6 space-x-2 text-lg">
                        <span>Add Task</span>
                        <PlusCircleIcon className="w-5 h-5 text-gray-500"/>
                      </button>
                    </div> 
              )
            })
          }
          </div>
          </DragDropContext>
              
      </div>
    </Layout>
  )
}
 