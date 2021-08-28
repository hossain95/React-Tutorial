import React, { createContext } from 'react'
import F from './F';
import G from './G';


const colors =
[
  {
    "id" : 1,
    "colorName" : "white",
    "user" : 123
  },
  {
    "id" : 2,
    "colorName" : "black",
    "user" : 132
  },
  {
    "id" : 3,
    "colorName" : "green",
    "user" : 545
  },
  {
    "id" : 4,
    "colorName" : "orange",
    "user" : 54
  },
]
const UserColor = createContext();
function E()
{
    return (
        <div>
          <UserColor.Provider value ={colors}>
            <F />
          </UserColor.Provider>
        </div>
    )
}

export default E;
export {UserColor};