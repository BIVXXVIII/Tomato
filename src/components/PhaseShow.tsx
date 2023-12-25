import React from 'react'

type Props = { children: React.ReactNode }

export default function PhaseShow({ children }: Props) {
    return (
        <>
            <div className='text-slate-900 font-semibold text-lg'>Current Phase:</div>
            <div className='text-emerald-800 font-bold text-xl capitalize'>{children}</div>
        </>
    )
}