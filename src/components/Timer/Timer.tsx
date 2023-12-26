import ShowTimer from 'components/Timer/components/ShowTimer'
import { usePhase } from 'helpers/hooks/usePhase'
import { useTimer } from 'helpers/hooks/useTimer'
import ControlPanel from './components/ControlPanel'
import PhaseShow from './components/PhaseShow'

import alarmSound from 'assets/audio/Alarm-clock-ringing-sound-effect.mp3'
import { useEffect, useRef } from 'react'
export const Timer = () => {
    const phaseObj = usePhase();

    const audioRef = useRef<HTMLAudioElement | null>(null)
    const { currentPhase } = phaseObj
    const { seconds, minutes, actions, isStarted, isActive } = useTimer(phaseObj);


    useEffect(() => {
        if (seconds === 0 && minutes === 0 && isActive) {
            audioRef.current!.play()
            return
        }
        if (!isActive) {
            audioRef.current!.pause()
            audioRef.current!.currentTime = 0
        }

    }, [seconds, minutes, isActive])
    return (


        <>
            <ShowTimer minutes={minutes} seconds={seconds} />
            <PhaseShow soundRef={audioRef.current}>
                {currentPhase.name}
            </PhaseShow>
            <audio ref={audioRef} >
                <source src={alarmSound} type='audio/mpeg' />
            </audio>
            <ControlPanel actions={actions} isStarted={isStarted} isActive={isActive} soundRef={audioRef.current} />

        </>)

}