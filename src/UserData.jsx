import React, { useState, useEffect } from 'react'

const UserData = (props) => {

    const [user, setUser] = useState([]);

    const{match} = props
    let {id} = match.params;

    const getUser = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let user = await res.json();
        console.log(user)
        setUser(user);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <h1>
                {user.name}
            </h1>
        </div>
    )
}

export default UserData;