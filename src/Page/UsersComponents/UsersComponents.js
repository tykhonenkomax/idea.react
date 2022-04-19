import React, {useEffect, useState} from 'react';
import {usersServices} from "../../Servivces";
import {SingleUserComponents} from "../SingleUserComponents";
import {Outlet} from "react-router-dom";


const UsersComponents = () => {

    const[users, setUsers]= useState([])

    useEffect(()=>{
        usersServices.getAll().then(({data})=>setUsers(data))

    },[])

    return (
        <div>
                <div>
                    {
                    users.map(user=><SingleUserComponents key={user.id} userItem={user}/>)
                    }
                </div>
            <Outlet/>
        </div>
    );
};

export {UsersComponents};