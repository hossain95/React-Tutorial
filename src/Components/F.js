import React from 'react'

import { UserColor } from './E';
function F()
{
    return (
        <div>
            <UserColor.Consumer>
                {(props) =>
                {
                    return(
                        <div>
                            {props.map((data)=>
                            {
                                return(
                                    <div key={data.id}>
                                        <h1>Name: {data.colorName}</h1>
                                        <h4>Users: {data.user}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }}
            </UserColor.Consumer>
        </div>
    )
}

export default F;
