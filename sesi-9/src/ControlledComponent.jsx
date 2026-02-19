import { useState } from "react"

export default function ControlledComponent(){
    const [value, setValue] = useState("");

    return(
        <>
            <input className="bg-yellow-200 m-2 rounded-md" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    )
}