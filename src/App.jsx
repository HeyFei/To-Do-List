import './App.css'
import {useState} from "react";

/*function App() {
    return (
        <div>Hello React World</div>
    )
}*/

const App = (props) => {
    // 初始化我们input输入框为空字符串
    const [inputToDo, setInputToDo] = useState("")
    // 初始化我们待办清单的所有内容为空阵列
    const [toDoList, setToDoList] = useState([])
    // 确认我们待办事项的编辑状态，初始Id为0
    const [updateId, setUpdateId] = useState(0)
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
        // 要用找到的id内的值回传到输入框并来编辑它
        // 先确认跟我们要寻找的Id是否相符
        // 它会询问我们正在尝试更新的待办事项
        // 如果"是"已更新的，我们提供原始的Id并执行Input写入的任何内容
        // 如果"不是"，我们就提供它的默认值
        if (updateId) {
            const updateToDo = toDoList.find((i) => i.id === updateId);
            const updatedToDoList = toDoList.map((t) => t.id === updateToDo.id ? (t = {
                id: t.id,
                inputToDo
            }) : {id: t.id, inputToDo: t.inputToDo});
            setToDoList(updatedToDoList);
            setUpdateId(0);
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

    // 控制update按钮的函式
    // 需求为按下update按钮后
    // 更新前的文字会出现在输入框内
    // 我们做修改后送出会更新我们原本的To-Do List

    // 用find找到我们单一的To-Do
    // 让它透过id去寻找我们要修改相同id的元素
    // 它将回传具有相同id的整个对象和To-Do内容在输入框内
    // 透过find寻找所有的To-Do list的array中的特定id相等就会回传

    // 接下来就是我们要修改的内容为setInputToDo
    // updateTodo是一个object裡面包含一个id和一个To-Do
    const handleUpdate = (id) => {
        const updateToDo = toDoList.find((i) => i.id === id);
        setInputToDo(updateToDo.inputToDo)
        setUpdateId(id);
    }

    return (
        <div className="App">
            <div className='container'>
                {/* 标题 */}
                <h1>{props.name}</h1>
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
                            {/* 创建更新按钮要传入的函式 */}
                            <button onClick={() => handleUpdate(t.id)}>Update</button>
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
