import React from 'react'

type Props = { children: React.ReactNode, soundRef: HTMLAudioElement | null }

export default function PhaseShow({ children, soundRef }: Props) {
    return (
        <>
            <div className='text-slate-900 font-semibold text-lg bg-orange-200/50 border-t border-slate-800/10 block w-full text-center'>Current Phase:</div>
            <div className='text-emerald-800 font-bold text-3xl capitalize bg-orange-200/50 py-5 block w-full text-center'>{children}</div>
            <div className='text-slate-900 font-semibold bg-orange-200/50 pb-2 border-b border-slate-800/10 block w-full text-center mb-4'>
                Volume: {soundRef ? soundRef.volume * 100 : 100}%
            </div>
        </>
    )
}