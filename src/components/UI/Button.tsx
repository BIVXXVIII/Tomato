import React from 'react'

type Props = {
    children: React.ReactNode,
    onClick: () => void,
    disabled?: boolean
}

export default function Button({ children, onClick, disabled }: Props) {
    return (
        <button
            className='bg-red-500 rounded-md px-2 py-0.5 text-white disabled:bg-red-300 min-w-20 text-center flex items-center justify-center'
            onClick={onClick}
            disabled={disabled}
        >{children}</button>
    )
}