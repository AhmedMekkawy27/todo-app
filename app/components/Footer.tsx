import React from 'react'
import Button from './Button'

const Footer = () => {
    return (
        <footer className='w-[100%] h-[12%] px-5 py-7 z-40py-6 dark:bg-[#25273c] bg-white flex justify-between rounded-b-md items-center border-t-[1px] dark:border-white/[0.2] border-black/[0.2] self-end'>
            <div className='flex justify-between items-center w-full relative'>
                <p className='md:w-[20%] font-medium text-sm w-[30%] text-[#777a92]'>5 items left</p>
                <div className='md:flex md:justify-between md:items-center md:w-[40%] md:static absolute w-[85vw] shadow-xl md:shadow-none bottom-[-100px] rounded-md left-[50%] translate-x-[-50%] md:translate-x-[0] py-5 dark:bg-[#25273c] bg-white md:bg-transparent md:dark:bg-transparent'>
                    <div className='flex md:gap-6 justify-evenly items-center md:flex-1 w-full'>
                        <Button title="All" bold={true} />
                        <Button title="Active" bold={true} />
                        <Button title="Completed" bold={true} />
                    </div>
                </div>
                <Button title="Clear Completed" bold={false} />
            </div>
        </footer>
    )
}

export default Footer
