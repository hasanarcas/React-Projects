import { useState } from "react"

const Home = () => {
    const [name, setName] = useState("hasan");
    const [age, setAge] = useState(25)



    const handleClick = () =>{
        setName("Hakan")
        setAge(500)
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Home
