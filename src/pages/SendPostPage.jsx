import React, {useState} from 'react';

const SendPostPage = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const sendPost = () => {
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 5,
                title:title,
                body:text,
            })
        })
            .then(res => res.json())
            .then(console.log);
    }
    return (
        <div>
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="text" onChange={(e) => setText(e.target.value)}/>
            <button onClick={sendPost}>ОТПРАВИТЬ ПОСТ</button>
        </div>
    );
};

export default SendPostPage;