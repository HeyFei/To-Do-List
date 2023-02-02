import {useState} from "react";

/*function App() {
    return (
        <div>Hello React World</div>
    )
}

const App = () => {
    return (
        <div>Hello React World</div>
    )
}*/


const State = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="Counter">
            <h2>You clicked {count} times!</h2>

            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default State
