import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import State from './State'
import Comment from "./Comment";

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {<App name="To-Do-List"/>}
        {/* <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
        />*/}
        {/*<State/>*/}
    </React.StrictMode>,
)


