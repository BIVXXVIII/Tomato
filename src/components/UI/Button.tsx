import React from 'react'


export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
}
export function Button(props: ButtonProps) {
    const { ...rest } = props;
    rest.className = `bg-red-500 rounded-md px-2 py-0.5 text-white disabled:bg-red-300 min-w-20 text-center flex items-center justify-center ${props.className}`
    return <button
        // className={}
        {...rest} />;
}
