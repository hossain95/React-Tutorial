## useEffect
### fetch data using useEffect
  
    import React, { useState, useEffect } from 'react';
    const url = 'https://api.github.com/users';
    const UseEffectFetchData = () =>
    {
      const [users, setUsers] = useState([]);
      //console.log(users);
      const getUsers = async() =>
      {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        //console.log(users);
      };
      useEffect(()=>{
        getUsers();
      }, []);
      return(
        <>
          <div>
            <h1>Users</h1>
            <ul className="users">
              {users.map((user)=>{
                const {id, login, avatar_url, html_url} = user;
                return <li key = {id}>
                  <img src={avatar_url} alt={login} />
                  <div>
                    <h4>{login}</h4>
                    <a href={html_url}>Profile</a>
                  </div>
                </li>

              })}
            </ul>
          </div>
        </>
      )
    };
    export default UseEffectFetchData;
    
    
### conditional rendering multiple return fetching data
  
    import React, { useState, useEffect } from 'react';
    const url = 'https://api.github.com/users/hossain95';
    const MultipleReturns = () =>
    {
      const [isLoading, setIsLoading] = useState(true);
      const [isError, setIsError] = useState(false);
      const [user, setUser] = useState('dafault user');
     useEffect(() =>{
       fetch(url).then((res) =>
       {
         return res.json()
       }).then((user) =>
       {
         console.log(user);
        const {login} = user;
        setUser(login);
        setIsLoading(false);

       }).catch((error) =>
       {
         console.log(error);
       })
     }, [])

      if(isLoading)
      {
        return(
          <div>
            <h1>Loading...</h1>
          </div>
        )
      }
      if(isError)
      {
        return(
          <div>
            <h1>Errro..</h1>
          </div>
        )
      }
      return(
        <div>
          <h1>{user}</h1>
        </div>
      )
    };

    export default MultipleReturns;

