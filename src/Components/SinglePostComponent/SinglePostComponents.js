import React from 'react';
import {logDOM} from "@testing-library/react";

const SinglePostComponents = ({item}) => {

    const{id,title,body}=item;




    
    return (
    <div>
          <div>

            <div><strong>Id:</strong>  {id}). <strong>Title: </strong>  {title} </div>
            <div>Body: {body}</div>
            <button>Get Users</button>
              <hr/>

          </div>

    </div>
    );
};

export {SinglePostComponents};

