import React from 'react'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
    return (
        <div className='min-h-screen bg-black p-4 flex '>
            <div className='patern bg-red-700/60 w-full rounded-lg flex justify-center items-center'>
                <div className='bg-orange-100  pb-2 min-w-[300px] min-h-[230px] flex flex-col items-center rounded-xl'>{children}</div>
            </div>


        </div>
    )
}