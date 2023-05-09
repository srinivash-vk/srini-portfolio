interface _ChipProps{
    chipText:string
}


export default function Chip(props:_ChipProps) {
    const{chipText}=props
    return (
        <div className='bg-light dark:bg-dark rounded-full px-4 py-1'>
            <div className="text-dark dark:text-light">{chipText}</div>
        </div>
    )
}
