import Pomodoro from 'components/Timer/components/Pomodoro/Pomodoro'
import ShowCount from 'components/UI/ShowCount'
type Props = {
    minutes: number, seconds: number
}

export default function ShowTimer({ minutes, seconds }: Props) {
    return (
        <Pomodoro>
            <ShowCount>{minutes}</ShowCount>
            <span className='inline-block mx-1'>:</span>
            <ShowCount>{seconds}</ShowCount>
        </Pomodoro>)
}