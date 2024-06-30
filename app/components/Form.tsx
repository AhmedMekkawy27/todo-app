"use client"
import { useState, useEffect } from "react"
import { collection, query, addDoc, doc, onSnapshot, serverTimestamp, orderBy } from 'firebase/firestore';
import db from "@/firebase";
import Button from "./Button";
const Form = () => {
    let [input, setInput] = useState('')
    let addTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        addDoc(collection(db, "todo-list"), {
            user: localStorage.getItem("user"),
            title: input,
            status: false,
            timestamp: serverTimestamp()
        });
        setInput("")
    }
    return (
        <form className="w-full h-[10%] shadow-2xl">
            <input value={input} onChange={(e) => { setInput(e.target.value) }} type="text" className="w-full h-full ps-[72px] py-10 focus:outline-none rounded-md dark:bg-[#25273c] bg-white shadow-2xl dark:text-white text-lg" />
            <button onClick={addTodo} className="hidden">
                Add
            </button>
        </form>
    )
}

export default Form
