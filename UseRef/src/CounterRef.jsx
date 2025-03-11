import { useEffect, useState } from "react"

import { useRef } from "react" 

const CounterRef = () => {
    const timerRef = useRef(null)
    const [count,setCount] = useState(0)

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        },1000)   
        
        return () => {
            clearInterval(timerRef.current)
        }
    },[])
  return (
    <div>Timer:{count}
    <br />
    <button onClick={()=> clearInterval(timerRef.current)}>Stop</button>
    </div>
  )
}

export default CounterRef