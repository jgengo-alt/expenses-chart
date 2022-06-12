import { useState } from 'react'

import Bar from '../components/bar'

export default function Home() {
  const [entries, setEntries] = useState([
    { "day": "mon", "amount": 17.45 },
    { "day": "tue", "amount": 34.91 },
    { "day": "wed", "amount": 52.36 },
    { "day": "thu", "amount": 31.07 },
    { "day": "fri", "amount": 23.39 },
    { "day": "sat", "amount": 43.28 },
    { "day": "sun", "amount": 25.48 }
  ])

  const randomize = () => {
    const newEntries = entries.map( entry => {
      entry.amount = Math.floor(Math.random() * 50)
      return entry
    })
    setEntries(newEntries)
  }

  return (
    <div className='h-screen flex flex-col gap-8'>
    <main className="mt-20 flex-col w-full flex gap-4 justify-center items-center">

      {/* header card */}
      <div className="min-h-20 w-11/12 sm:max-w-md bg-mysoftred rounded-xl p-6 flex justify-between">
        
        <div className='text-white'>
          <p className='text-sm opacity-80'>My balance</p>
          <p id='balance_value' className='text-2xl font-semibold'>$921.48</p>
        </div>

        <img src='logo.svg' />
      </div>

      {/* stats card */}
      <div className="bg-white rounded-xl p-6 w-11/12 sm:max-w-md flex flex-col gap-6">
        <h1 className='font-bold text-2xl text-mydarkbrown'>Spending - Last 7 days</h1>

        <div className='flex gap-2 sm:gap-4 items-end justify-center h-32 mt-10'>
          { entries.map( (entry, key) => { return <Bar data={entry} key={key} /> })}
        </div>
        <div className='h-[2px] bg-mymediumbrown opacity-20 w-full mt-3'></div>
        

        <div className='flex justify-between items-end'>
          <div>
            <p className='text-sm text-gray-400 font-semibold'>Total this month</p>
            <p className='font-bold py-1 text-3xl text-mydarkbrown'>$478.33</p>
          </div>
          <div>
            <p className='text-sm font-bold text-right text-mydarkbrown'>+2.4%</p>
            <p className='text-sm text-gray-400 font-semibold '>from last month</p>
          </div>
        </div>
      </div>
    </main>
    <div className='w-full text-center text-sm pb-2 text-mymediumbrown'>click <a onClick={ () => randomize() } className='text-blue-600 cursor-pointer hover:underline'>here</a> to shuffle data</div>
    </div>
  )
}
