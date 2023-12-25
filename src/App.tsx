import { useEffect, useState } from 'react'
import Button from './components/UI/Button'
import ShowCount from './components/UI/ShowCount'
import Layout from './components/Layout'
import Header from './components/Header'
import { usePhase } from './helpers/hooks/usePhase'
import PhaseShow from './components/PhaseShow'
import Pomodoro from './components/Pomodoro/Pomodoro'

export default function App() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerStatus, setTimerStatus] = useState(false)

    const { currentPhase, nextPhase } = usePhase()

    useEffect(() => {
        const timer = timerStatus && setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
                return
            }
            if (minutes > 0) {
                setSeconds(59)
                setMinutes(minutes - 1)
                return
            }
            nextPhase()
            setMinutes(currentPhase.nextPhaseDuration)
        }, 1000)
        return () => {
            if (timer) {
                clearInterval(timer)
            }
        }
    }, [seconds, minutes, timerStatus])
    return (
        <Layout>
            <Header />

            <Pomodoro>
                <ShowCount>{minutes}</ShowCount>
                <span className='inline-block mx-1'>:</span>
                <ShowCount>{seconds}</ShowCount>
            </Pomodoro>
            <PhaseShow>
                {currentPhase.name}
            </PhaseShow>
            <div className='flex gap-1'>
                <Button onClick={() => {
                    setTimerStatus(prev => !prev)
                    setTimerStarted(true)
                    setMinutes(currentPhase.durationinMinutes)
                    setSeconds(0)
                }}
                    disabled={timerStarted && timerStatus}
                >{timerStarted ? 'restart' : 'start'}</Button>
                <Button onClick={() => {
                    setTimerStatus(prev => !prev)
                }}
                    disabled={!timerStarted}
                >{timerStatus ? 'pause' : 'return'}</Button>
                <Button onClick={() => {
                    setSeconds(0)
                    setMinutes(0)
                    setTimerStarted(false)
                    setTimerStatus(false)
                }}
                    disabled={!timerStarted}
                >break</Button>
            </div>
            <button onClick={nextPhase}>nxt</button>
        </Layout>
    )
}