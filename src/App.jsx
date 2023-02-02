import './App.css'
import {useState} from "react";

/*function App() {
    return (
        <div>Hello React World</div>
    )
}*/

const App = () => {
    // 初始化我们input输入框为空字符串
    const [inputToDo, setInputToDo] = useState("")
    // 初始化我们待办清单的所有内容为空阵列
    const [toDoList, setToDoList] = useState([])
    // 新增待办事项的按钮函数
    const handleSubmit = (e) => {
        // 当我们点选Add按纽时handleSubmit会被触发
        // 我们不希望它刷新页面
        e.preventDefault();
        // 只要inputToDo里面不是空字符串
        // 就会创建新的To-Do-List
        if (inputToDo !== "") {
            setToDoList([{id: `${inputToDo} - ${Date.now()}`, inputToDo}, ...toDoList])
            // 输入框新增按钮送出后输入框内的文字为空，记得下方input要写value={inputToDo}
            setInputToDo("");
        }
    }

    // 控制delete按钮的函式
    // 将delete裡面的所有东西都做变量
    // 设置filter过滤器去抓清单的独特id
    // 它将比较所有内容，如果与这个id匹配
    // 那么它就会被删除
    // 否则，如果不匹配这边给不等于!==
    // 它将不会被删除
    const handleDelete = (id) => {
        const deleteTodo = toDoList.filter((to) => to.id !== id);
        // 最后状态需要更新回传，将删除传递给array
        // ...为扩展运算符号
        setToDoList([...deleteTodo]);
    }

    return (
        <div className="App">
            <div className='container'>
                {/* 标题 */}
                <h1>To-Do-List</h1>
                {/* 待办事项的输入表单，提交按钮触发handleSubmit函数 */}
                <form className='toDoForm' onSubmit={handleSubmit}>
                    {/* 新增待办事项的输入框，onChange每当输入框改变时调用，value让它等于{inputToDo}，输入新增按钮后就会输入框就会变成空 */}
                    <input type="text" value={inputToDo} onChange={(e) => setInputToDo(e.target.value)}/>
                    {/* 新增按钮 */}
                    <button>Add</button>
                </form>
                {/* 待办清单显示内容，t代表整个对象为输入框内的inpuiToDo值 */}
                <ul className='allToDoList'>
                    {toDoList.map((t) => (
                        <li className='singleTodoTask' key={t.id}>
                            <span className='toDoText'>{t.inputToDo}</span>
                            <button>Update</button>

                            {/* 回传：创建删除按钮按下后要对应的函式handleDelete */}
                            <button onClick={() => handleDelete(t.id)}>Delete</button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default App
