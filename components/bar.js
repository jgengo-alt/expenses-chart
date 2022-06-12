export default function Bar({data}) {
    const dateToday = new Date().toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()
    const colorChart = dateToday == data.day ? 'bg-mycyan' : 'bg-mysoftred'

    return (        
        <div className="group flex flex-col gap-3 items-center relative">
            <div className="hidden absolute -top-10 group-hover:block px-2 py-1.5 rounded-md bg-mydarkbrown text-white text-center text-sm font-semibold">
                $<span data-id='mon'>{data.amount}</span>
            </div>
            <div 
                className={`${colorChart} hover:opacity-50 w-9 rounded-[3px]`} 
                style={{height: ~~(data.amount * 2) }}>
            </div>
            <p className='text-sm text-gray-400 group-hover:text-gray-500'>{data.day}</p>
        </div>
    );
}