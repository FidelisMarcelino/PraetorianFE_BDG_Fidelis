export default function EventHandlers(){
    const handleClick = () => alert("Button clicked");
    const handleChange = (e) => console.log("Changed to: ", e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted");
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input className="bg-yellow-200 m-2 rounded-md" type="text" onChange={handleChange} />
                <button type="submit" onClick={handleClick}>Submit</button>
            </form>
        </>
    )
}