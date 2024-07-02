'use client'
import Button from './Button'
import { useContext, useState, useEffect } from "react";
import { StateContext } from "./StateProvider";
import { ITodo } from './StateProvider';
import { collection, query, deleteDoc, doc, onSnapshot, orderBy } from 'firebase/firestore';
import db from '@/firebase';
const Footer = () => {
    let [filteredTodos, setFilteredTodos] = useState<ITodo["todos"][]>()
    const { todos, setTodos } = useContext(StateContext)
    useEffect(() => {

        const q = query(collection(db, "todo-list"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (snap) => {
            setFilteredTodos(snap.docs.map(doc => (
                {
                    id: doc.id,
                    user: doc.data().user,
                    title: doc.data().title,
                    status: doc.data().status,
                    timestamp: doc.data().timestamp,
                }
            )))
        })

    }, [])
    const handleActive = () => {
        if (filteredTodos) {
            const activeTodos = filteredTodos.filter(todo => todo.status === false)
            setTodos(activeTodos)
        }
    }
    const handleAll = () => {
        if (filteredTodos) {
            const AllTodos = filteredTodos.filter(todo => todo.status === true || todo.status === false)
            setTodos(AllTodos)
        }
    }
    const handleCompleted = () => {
        if (filteredTodos) {
            const completedTodos = filteredTodos.filter(todo => todo.status === true)
            setTodos(completedTodos)
        }
    }

    const clearCompleted = () => {
        if (filteredTodos) {
            const completedTodos = filteredTodos.filter(todo => todo.status === true)
            completedTodos.forEach(todo => {
                deleteDoc(doc(db, "todo-list", todo.id))
            })
        }
    }
    return (
        <footer className='w-[100%] h-[12%] px-5 py-7 z-40py-6 dark:bg-[#25273c] bg-white flex justify-between rounded-b-md items-center border-t-[1px] dark:border-white/[0.2] border-black/[0.2] self-end'>
            <div className='flex justify-between items-center w-full relative'>
                <p className='md:w-[20%] font-medium text-sm w-[30%] text-[#777a92]'>{`${todos.filter((todo) => (todo.user === localStorage.getItem('user'))).length} items left`}</p>
                <div className='md:flex md:justify-between md:items-center md:w-[40%] md:static absolute w-[85vw] shadow-xl md:shadow-none bottom-[-100px] rounded-md left-[50%] translate-x-[-50%] md:translate-x-[0] py-5 dark:bg-[#25273c] bg-white md:bg-transparent md:dark:bg-transparent'>
                    <div className='flex md:gap-6 justify-evenly items-center md:flex-1 w-full'>
                        <Button title="All" bold={true} onclick={handleAll} />
                        <Button title="Active" bold={true} onclick={handleActive} />
                        <Button title="Completed" bold={true} onclick={handleCompleted} />
                    </div>
                </div>
                <Button title="Clear Completed" bold={false} onclick={clearCompleted} />
            </div>
        </footer>
    )
}

export default Footer
