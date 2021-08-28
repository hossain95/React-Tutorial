import React from 'react'
import { UserName } from './C'
function G()
{
    return (
        <div>
            <UserName.Consumer>
                {(props) =>
                {
                    return(
                        <div>
                            {props.map((data)=>
                            {
                                return(
                                    <div key={data.id}>
                                        <h1>Name: {data.name}</h1>
                                        <h4>Age: {data.age}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }}
            </UserName.Consumer> 
        </div>
    )
}

export default G
