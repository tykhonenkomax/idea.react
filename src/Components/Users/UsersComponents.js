import React, {useEffect, useState} from 'react';
import User from "../User/User";


const UsersComponents = () => {
    const [users, setUsers]= useState([])
    const [user, setUser]= useState(null)

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
               setUsers([...value]);
            })
    },[])

    const detailsUser = (id)=>{
        let objDetails =users.find(value => value.id === id)
        setUser(objDetails)
    }

    return (

        <div className={'userPage'}>

        <div  className={'users'}>
            {
                users.map(value =><User
                    key={value.id}
                    item={value}
                    detailsUser={detailsUser}
                />)
            }
        </div>

            <div className={'userInformation'}>
                {
                 user && <h3 className={'h3'}>
                    <p className={'pSpace'}> №. {user.id}</p>
                    <p className={'pSpace'}>Name: {user.name}</p>
                    <p className={'pSpace'}>Surname: {user.username}</p>
                    <p className={'pSpace'}>Email: {user.email}</p>
                    <p className={'pSpace'}>Street: {user.address.street}</p>
                    <p className={'pSpace'}>Suite: {user.address.suite}</p>
                    <p className={'pSpace'}>City: {user.address.city}</p>
                    <p className={'pSpace'}>Zipcode: {user.address.zipcode}</p>
                    <button className={'button2'}> Get Comments</button>
                    </h3>
                }
            </div>


        </div>


    );
};

export default UsersComponents;