const Login = () => {
    return (
        <div className="flex justify-center items-center bg-black/[0.2] w-screen h-screen">
            <div className="w-[50%] h-[50%] flex justify-center items-center">
                <form action="" className="flex flex-col justify-between gap-8">
                    <input type="text" placeholder="Username" className="outline-none border-gray-700 border-2 rounded-md px-4 py-2" />
                    <button type="submit" className="bg-slate-900 py-2 rounded-md">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
