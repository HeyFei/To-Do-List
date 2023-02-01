import './App.css'

/*function App() {
    return (
        <div>Hello React World</div>
    )
}*/

const App = () => {
    return (
        <div className="App">
            <div className='container'>
                <h1>To-Do-List</h1>

                <form className='toDoForm'>
                    {/* 新增待辦事項的輸入框 */}
                    <input type="text"/>
                    {/* 新增按鈕 */}
                    <button>Add</button>
                </form>
                {/* 待辦清單顯示內容 */}
                <ul className='allToDoList'>
                    <li className='singleTodoTask'>
                        <span className='toDoText'>do the dishes</span>
                        <button>Update</button>
                        <button>Delete</button>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default App
