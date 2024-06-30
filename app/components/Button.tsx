import React from 'react'

const Button = ({ title, bold, className, onclick }: { title: string; bold: boolean; className: string; onclick: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void> }) => {
    return (
        <button onClick={onclick} className={`dark:hover:text-[#e4e5f1] ${bold ? 'font-bold' : 'font-medium'} ${className} text-[#777a92] hover:text-[#54566b]`}>
            {title}
        </button>
    )
}

export default Button
