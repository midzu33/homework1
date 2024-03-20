import React, {useEffect, useState} from 'react';

const MainPage = () => {
    const [data, setData] = useState([])

useEffect(() => {
    fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(d => setData(d.posts));
},[])

    return (
        <div>
            {data.map(e =>(
                <div key={e.id}>
                    <h2>{e.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default MainPage;