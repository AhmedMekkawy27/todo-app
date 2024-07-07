import React from 'react'

type clickedProp = {
    id: number;
    status: boolean;
}

const Button = ({ title, bold, className, onclick, clicked }: { title: string; bold: boolean; className?: string; onclick: (event: React.MouseEvent<HTMLButtonElement>) => void, clicked?: boolean }) => {
    return (
        <button onClick={onclick} className={`dark:hover:text-[#e4e5f1] ${bold ? 'font-bold' : 'font-medium'} ${className} text-[#777a92] ${clicked && 'text-[#446cbc]'} hover:text-[#54566b]`}>
            {title}
        </button>
    )
}

export default Button
