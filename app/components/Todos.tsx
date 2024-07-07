"use client"
import { TfiClose } from "react-icons/tfi";
import { TiTick } from 'react-icons/ti'
import { ITodo } from './StateProvider';
const Todos = ({ todo, onclick, rem }: { todo: ITodo['todos'], onclick?: (event: React.MouseEvent<HTMLDivElement>) => void, rem: (event: React.MouseEvent<HTMLButtonElement>) => void }) => {
    return (
        <div className='w-full h-[10%] px-7 py-10 border-b-[1px] flex justify-between items-center dark:border-white/[0.2] border-black/[0.2]'>
            <div className={`p-[1px] flex justify-center items-center cursor-pointer bg-transparent hover:dark:border-[#7d96f3] rounded-full  border-[1px] border-black/[0.2] dark:border-white/[0.2]`} onClick={onclick}>
                <div className={`w-5 h-5 flex justify-center items-center cursor-pointer  rounded-full ${todo.status && 'bg-check-gradient'}`}>
                    <TiTick className={`text-white cursor-pointer ${todo.status ? 'block' : 'hidden'}`} />
                </div>
            </div>
            <p className={`dark:text-white text-[#514f64] cursor-pointer flex-1 mx-5 overflow-hidden py-5 text-sm md:text-lg tracking-wider ${todo.status && 'line-through opacity-40'}`} onClick={onclick}>{todo.title}</p>
            <button onClick={rem}>
                <TfiClose className='text-[#514f64] w-6 h-6 dark:text-white/[0.2] cursor-pointer' />
            </button>
        </div>
    )
}

export default Todos
