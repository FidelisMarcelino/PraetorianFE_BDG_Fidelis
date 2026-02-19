import { useRef } from "react"

export default function UncontrolledComponent(){
    const inputRef = useRef();
    const handleSubmit = () => {
        alert(`Input value: ${inputRef.current.value}`);
    };

    return(
        <>
            <input className="bg-yellow-200 m-2 rounded-md" type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}