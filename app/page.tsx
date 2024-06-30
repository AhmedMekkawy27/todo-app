/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import ThemeSwitch from "./components/ThemeSwitch";
import Form from "./components/Form";
import { useEffect, useContext } from "react";
import { StateContext } from "./components/StateProvider";
import db from "@/firebase";
import { collection, query, addDoc, doc, onSnapshot, serverTimestamp, orderBy } from 'firebase/firestore';

export default function Home() {
  const { todos, setTodos } = useContext(StateContext)
  useEffect(() => {

    const q = query(collection(db, "todo-list"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snap) => {
      setTodos(snap.docs.map(doc => (
        {
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
    <main className="h-screen relative ">
      <div className="absolute z-10 left-0 top-0 w-full h-[35%] bg-light-mobile dark:bg-dark-mobile md:bg-light-desktop dark:md:bg-dark-desktop bg-cover" />
      <div className="absolute bottom-0 left-0 w-screen h-screen dark:bg-[#181824] bg-[#fafafa]" />
      <div className="flex justify-evenly mx-auto items-center flex-col h-[750px] w-[85vw] md:h-[750px] md:w-[620px] z-30 h relative md:top-10 ">
        <div className="flex justify-between items-center w-full h-[8%]">
          <h1 className="text-white text-6xl tracking-widest">Todo</h1>
          <ThemeSwitch />
        </div>
        <Form />
        <div className="w-full h-[65%] dark:bg-[#25273c] bg-white rounded-md shadow-2xl flex flex-col justify-between">
          <div className="overflow-y-auto ">
            {todos.filter((todo) => todo.user === localStorage.getItem("user")).map((todo, index) => (
              <Todos key={index} todo={todo} />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
