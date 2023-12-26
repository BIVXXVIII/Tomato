import React from 'react'
import Header from './Header'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
    return (
        <div className='min-h-screen bg-black p-4 flex '>
            <div className='patern bg-red-700/60 w-full rounded-lg flex justify-center items-center relative'>
                <div className='bg-orange-100 pb-16 min-w-[300px] min-h-[230px] flex flex-col items-center rounded-xl'>
                    <Header />
                    {children}
                </div>
            </div>


        </div>
    )
}