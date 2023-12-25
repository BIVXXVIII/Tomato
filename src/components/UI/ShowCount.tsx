type Props = {
    children: number
}

export default function ShowCount({ children }: Props) {
    const numSting = children.toString()
    const res = numSting.length === 1 ? `0${numSting}` : numSting
    const spanClasses = 'border-black p-1 border inline-flex my-2 shadow-md bg-white w-10 text-center items-center justify-center font-bold text-2xl';
    return (
        <>
            <span className={`${spanClasses}`}>
                {res[0]}
            </span>
            <span className={`${spanClasses}`}>
                {res[1]}
            </span>
        </>
    )
}
