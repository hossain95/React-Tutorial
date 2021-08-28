import React, { createContext } from 'react'
import F from './F';
import G from './G';


const users =
[
  {
    "id" : 1,
    "name": "Mia Hossain",
    "age" : 25
  },
  {
    "id" : 2,
    "name": "Roma Akter",
    "age" : 24
  },
  {
    "id" : 3,
    "name" : "Sabina",
    "age" : 18
  }
]
const UserName = createContext();
function C()
{
    return (
        <div>
          <UserName.Provider value ={users}>
            <G />
          </UserName.Provider>
        </div>
    )
}

export default C;
export {UserName};