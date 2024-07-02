"use client"
import React, { createContext, useState } from "react"
export interface ITodo {
    todos: {
        id: string;
        user: string;
        title: string;
        status: boolean;
        timestamp: number;
    };
}
type TodoContextType = {
    todos: ITodo['todos'][];
    setTodos: (todos: ITodo['todos'][]) => void;
}
export const StateContext = createContext({} as TodoContextType)
function StateProvider({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<ITodo['todos'][]>([])
    return (
        <StateContext.Provider value={{ todos, setTodos }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider
