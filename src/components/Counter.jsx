
import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className="w-full flex items-center flex-col gap-5">
            <h1 className="text-[40px] text-center">Count: {count}</h1>

            <div className="flex gap-4 items-center justify-center">
                <button onClick={handleDecrement} className="bg-red-500 text-white p-2 rounded-md">Decrement</button>

                <button onClick={reset} className="bg-yellow-500 text-white p-2 rounded-md">Reset</button>
                
                <button onClick={handleIncrement} className="bg-green-500 text-white p-2 rounded-md">Increase</button>
            </div>
        </div>
    )
}