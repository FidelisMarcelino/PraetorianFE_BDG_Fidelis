import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-2'>
        <p>Count: {count}</p>
        <button className='text-blue-300 bg-black p-1 font-semibold rounded-md cursor-pointer' onClick={() => setCount(count + 1)}>
          Tambah
        </button>

        <button className='text-red-300 bg-black p-1 ml-2 font-semibold rounded-md cursor-pointer' onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
