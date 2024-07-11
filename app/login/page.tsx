"use client"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
const Login = () => {
    const [username, setUsername] = useState("")
    const err = useRef<HTMLParagraphElement>(null)
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const regex = /\w+\d+/ig
        if (regex.test(username)) {
            localStorage.setItem("user", username.toLowerCase())
            router.push('/')
        } else {
            err.current?.classList.toggle('hidden')
        }
    }
    useEffect(() => {
        if (localStorage.getItem("user")) {
            router.push('/')
        }
    }, [])
    return (
        <div className="flex justify-center items-center bg-black/[0.2] w-screen h-screen">
            <div className="w-[50%] h-[50%] flex justify-center items-center">
                <form action="" className="flex flex-col justify-between gap-8">
                    <p ref={err} className="text-red-600 hidden">Username must be letters followed by numbers</p>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="outline-none border-gray-700 border-2 rounded-md px-4 py-2" />
                    <button type="submit" onClick={handleSubmit} className="bg-slate-900 py-2 rounded-md">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
