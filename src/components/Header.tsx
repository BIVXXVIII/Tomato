import pomidoro from '../assets/pomodoro.png'
type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='text-3xl font-extrabold text-red-900 border-b-2 border-black/80 w-full text-center py-4 shadow-xl mb-3 bg-red-100/80 rounded-t-xl flex items-center px-7 select-none font-paytone'>
            <h1>Pomodoro Timer</h1>
            <img src={pomidoro} alt="" className='w-10 h-10 inline-block ml-2 relative ' />
        </header>
    )
}