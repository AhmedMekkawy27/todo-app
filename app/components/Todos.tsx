"use client"
import { useState } from 'react'
import { TfiClose } from "react-icons/tfi";
import { TiTick } from 'react-icons/ti'
import { useContext } from 'react';
import { ITodo, StateContext } from './StateProvider';
const Todos = ({ todo }: { todo: ITodo['todos'] }) => {
    let { todos, setTodos } = useContext(StateContext)
    let [check, setCheck] = useState(false)
    const handleCheck = () => {
        setCheck(!check)
    }
    return (
        <div className='w-full h-[10%] px-7 py-10 border-b-[1px] flex justify-between items-center dark:border-white/[0.2] border-black/[0.2]'>
            <div className={`w-6 h-6 flex justify-center items-center bg-white rounded-full ${check && 'bg-check-gradient'} border-[1px] border-black/[0.2] dark:border-white/[0.2]`} onClick={handleCheck}>
                <TiTick className='text-white cursor-pointer ' />
            </div>
            <p className={`dark:text-white text-[#514f64] flex-1 mx-5 overflow-clip py-5 text-sm md:text-lg tracking-wider ${check && 'line-through opacity-40'}`} onClick={handleCheck}>{todo.title}</p>
            <TfiClose className='text-[#514f64] w-6 h-6 dark:text-white/[0.2] cursor-pointer' />
        </div>
    )
}

export default Todos
