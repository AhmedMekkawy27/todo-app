/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Todos from "./Todos";
import { useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";
import db from "@/firebase";
import { collection, query, setDoc, deleteDoc, doc, onSnapshot, orderBy } from 'firebase/firestore';
const TodosBody = () => {
    const { todos, setTodos } = useContext(StateContext)
    const handleStatus = (todoId: string) => {
        todos.forEach((todo) => {
            if (todo.id === todoId) {
                todo.status = !todo.status;
            }

            setDoc(doc(db, "todo-list", todo.id), todo);
        })
    }

    const handleDelete = (todoId: string) => {
        todos.forEach((todo) => {
            if (todo.id === todoId) {
                deleteDoc(doc(db, "todo-list", todo.id));
            }

        })
    }

    useEffect(() => {

        const q = query(collection(db, "todo-list"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (snap) => {
            setTodos(snap.docs.map(doc => (
                {
                    id: doc.id,
                    user: doc.data().user,
                    title: doc.data().title,
                    status: doc.data().status,
                    timestamp: doc.data().timestamp,
                }
            )))
        })

        if (!localStorage.getItem("user")) {
            let userInput = prompt("Enter your username")
            while (!userInput) {
                userInput = prompt("Enter your username")
            }
            localStorage.setItem("user", userInput.toLowerCase())
        }

    }, []);

    return (
        <div className="overflow-y-auto">
            {todos.filter((todo) => todo.user === localStorage.getItem("user")).map((todo, index) => (
                <Todos key={index} onclick={(event) => handleStatus(todo.id)} todo={todo} rem={(event) => handleDelete(todo.id)} />
            ))}
        </div>
    )
}

export default TodosBody
