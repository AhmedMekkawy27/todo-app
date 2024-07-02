"use client"
import { TfiClose } from "react-icons/tfi";
import { TiTick } from 'react-icons/ti'
import { useContext } from 'react';
import { ITodo, StateContext } from './StateProvider';
import Button from "./Button";
const Todos = ({ todo, onclick, rem }: { todo: ITodo['todos'], onclick?: (event: React.MouseEvent<HTMLDivElement>) => void, rem: (event: React.MouseEvent<HTMLButtonElement>) => void }) => {
    let { todos, setTodos } = useContext(StateContext)
    return (
        <div className='w-full h-[10%] px-7 py-10 border-b-[1px] flex justify-between items-center dark:border-white/[0.2] border-black/[0.2]'>
            <div className={`w-6 h-6 flex justify-center items-center bg-white rounded-full ${todo.status && 'bg-check-gradient'} border-[1px] border-black/[0.2] dark:border-white/[0.2]`} onClick={onclick}>
                <TiTick className='text-white cursor-pointer ' />
            </div>
            <p className={`dark:text-white text-[#514f64] cursor-pointer flex-1 mx-5 overflow-clip py-5 text-sm md:text-lg tracking-wider ${todo.status && 'line-through opacity-40'}`} onClick={onclick}>{todo.title}</p>
            <button onClick={rem}>
                <TfiClose className='text-[#514f64] w-6 h-6 dark:text-white/[0.2] cursor-pointer' />
            </button>
        </div>
    )
}

export default Todos
