import { Button } from 'components/UI/Button'
import { TimerActions } from 'types/TimerActions'

type Props = { actions: TimerActions, isActive: boolean, isStarted: boolean, soundRef: HTMLAudioElement | null }

export default function ControlPanel({ actions, isActive, isStarted, soundRef }: Props) {
    return (
        <div className='flex flex-col gap-2 justify-center items-center w-full'>
            <div className='flex gap-1'>
                <Button
                    onClick={() => {
                        actions.timerStart()
                    }}
                    disabled={isActive}
                >
                    {isStarted ? 'restart' : 'start'}
                </Button>
                <Button onClick={() => {
                    actions.timerPause()
                }}
                    disabled={!isStarted}
                >
                    {isActive ? 'pause' : isStarted ? "return" : "pause"}
                </Button>
                <Button
                    onClick={() => {
                        actions.timerBreak()
                    }}
                    disabled={!isStarted || isActive}
                >break</Button>
            </div>
            {/*  */}
            <div className='text-center text-gray-950/80 mt-2 mb-1 border-b border-t border-slate-800/10 bg-orange-200/50 w-full font-semibold py-2 block'>Alarm control</div>

            {/*  */}
            <div className='flex'>
                <Button
                    className='mr-1'
                    onClick={() => {
                        if (soundRef) {
                            soundRef.pause()
                            soundRef.currentTime = 0
                        }
                    }}
                    disabled={!isStarted || soundRef?.paused}
                >
                    stop alarm
                </Button>
                <Button
                    className='mr-1 w-[120px]'
                    onClick={() => {
                        if (!soundRef) return
                        if (soundRef.volume > 0) {
                            soundRef.volume = 0
                            return
                        }
                        soundRef.volume = 1
                    }}
                    disabled={!isStarted || !soundRef}
                >
                    {soundRef ? soundRef.volume === 0 ? 'max volume' : 'mute alarm' : 'mute alarm'}
                </Button>
                <Button
                    onClick={() => {
                        if (soundRef && soundRef.volume < 1) {
                            soundRef.volume = Number((soundRef.volume + 0.1).toFixed(2))
                        }
                    }}
                    className='min-w-min w-8 rounded-r-none mr-[1px]'
                    disabled={!isStarted || !soundRef}

                >+</Button>
                <Button
                    onClick={() => {
                        if (soundRef && soundRef.volume > 0) {
                            soundRef.volume = Number((soundRef.volume - 0.1).toFixed(2))
                        }
                    }}
                    className='min-w-min w-8 rounded-l-none'
                    disabled={!isStarted || !soundRef}

                >-</Button>
            </div>
        </div>
    )
}