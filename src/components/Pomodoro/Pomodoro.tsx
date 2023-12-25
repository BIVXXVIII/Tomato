import React from 'react'
import './pomodoro.css'
type Props = { children: React.ReactNode }

export default function Pomodoro({ children }: Props) {
    return (
        <div className='bg-red-900 h-[250px] flex w-[250px] items-center justify-center rounded-full my-5 shadow-2xl shadow-black/80 relative overflow-hidden select-none'>
            <span className='absolute h-20 w-10 bg-white/10 top-[23px] right-[26px] rounded-full skew-x-[20deg] -rotate-[14deg] z-10'></span>
            <div className='relative z-10'>{children}</div>
            <span className='bg-red-800 absolute h-full w-full bottom-5 left-5 rounded-full'></span>
        </div>
    )
}