# React-Tutorial


## Props
* ### Function component
        function Welcome(props)
        {
          return <h1>Hello, {props.name}</h1>;
        }

        const element = <Welcome name="Sara" />;
        ReactDOM.render(
          element,
          document.getElementById('root')
        );
    
Output: **Hello, Sara**

* ### Class Component
        class Welcome extends React.Component
        {
            render()
            {
                return <h1>Hello, {this.props.name}</h1>;
            }
        }
    
    
    
    
## Destructuring of Props
        function Card(props)
        {
            const{name, email}  = props;
            console.log(name+ " "+email);

            return(
                <div>
                    <h4>Hi, My name is {name} and my email is {email}</h4>
                </div>
            );
        } 

## State and Lifecycle

* ### state in class component

        import React, { Component } from 'react';
        class State extends Component
        {
            constructor(props)
            {
                super(props)

                this.state = {
                     count: (new Date()).getSeconds()
                }
            }


            render()
            {
                const {count} = this.state

                return (
                    <div>
                        <h4>Count: {count}</h4>
                    </div>
                );
            }
        }
        export default State;
        
        
        
    **Example**
        
        
        import React, { Component } from 'react';
        class State extends Component
        {
            constructor(props)
            {
                super(props)

                this.state = {
                     count: 0,
                     double: 1,
                     three: 1,
                }
            }

            increment = () =>
            {
                this.setState({
                    count: this.state.count+1,
                    double: this.state.double*2,
                    three: this.state.three*3,
                });
            }

            decrement = () =>
            {
                this.setState({
                    count: this.state.count-1,
                    double: this.state.double/2,
                    three: this.state.three/3,
                });
            }
            render()
            {
                const {count, double, three} = this.state
                return (
                    <div>
                        <h4>Count: {count +" "+ double+ " "+three}</h4>
                        <button onClick={this.increment}>+</button>
                        <button onClick={this.decrement}>-</button>
                    </div>
                );
            }
        }

        export default State;
        
        
 * ### state in function component
 
        import React, {useState} from 'react';
        const FunctionState = () =>
        {
          const [title, setTitle] = useState("Title");
          const [name, setName] = useState("Mia Hossain");


          return(
            <>
              <div>
                <h3>{title+", "+name}</h3>
                <button className="btn" onClick={() => {setTitle("Change Title"); setName("Roma Akter")}}>change title</button>
              </div>
            </>
          )
        };

        export default FunctionState;
        
 * Exmaple

       import React, { useState } from 'react';
        const UseStateBasics = () =>
        {
          const [title, setTitle] = useState("Hi");
          const handleChange = () =>
          {
            if(title === "Hi")
            {
              setTitle("Hello");
            }
            else
            {
              setTitle("Hi");
            }
          }
          return(
            <div>
              <h1>{title}</h1>
              <button className="btn" onClick={handleChange}>change title</button>
            </div>
          )
        };

        export default UseStateBasics;    
### useState array, map, delete, all delete

        import React, {useState} from 'react';

        const data =
        [
          {
            "id": 1,
            "name": "Hossain",
          },
          {
            "id": 2,
            "name": "Roma",
          },
          {
            "id": 3,
            "name": "Naima",
          },
          {
            "id": 4,
            "name": "Lima",
          },
          {
            "id": 5,
            "name": "Sabina",
          }
        ]

        const UseStateArray = () =>
        {
          const [users, setUsers] = useState(data);
          const deleteAll = () =>
          {
            setUsers([]);
          };
          const deleteSigle = (id) =>
          {
            let newUsers = users.filter((users) => users.id !== id);
            setUsers(newUsers);
          };
          return(
              <>
                  {
                    users.map((user) =>
                    {
                      const {id, name} = user;
                      return (
                        <div key = {id} className="item">
                          <h4>{name}</h4>
                          <button onClick ={() => deleteSigle(id)} className="btn btn-primary btn-large">delete</button>
                        </div>
                      )
                    })
                  }
                  <button onClick={deleteAll} className="btn">Delete All</button>
              </>
          )
        };

        export default UseStateArray;
        
### useState change object value

        import React, { useState } from 'react';
        const persons =
        {
          "name":"Mia Hossain",
          "age": 24,
          "message":"Hi, I am a competatitive programmer",
        }

        const UseStateObject = () =>
        {
          const[person, setPerson] = useState(persons);

          const ChangeMessage = () =>
          {
            setPerson({...person, message: "I am font-end developer", age: 25});
          }

          return(
            <>
              <div>
                <h4>{person.name}</h4>
                <h4>{person.age}</h4>
                <h4>{person.message}</h4>
                <button onClick={ChangeMessage} className="btn">Change the message</button>
              </div>
            </>
          )
        };

        export default UseStateObject;


 ## Conditional Rendering
 * ### Home
        import React from 'react'
        function Home() {
            return (
                <div>
                    <h1>this is from home page</h1>
                </div>
            )
        }

        export default Home;

* ### SignUp
        import React from 'react'

        function SignUp() {
            return (
                <div>
                    <h1>This is from SignUp</h1>
                </div>
            )
        }
        export default SignUp
 
* ### ConditionalRendering

        import React, { Component } from 'react'
        import Home from './Home';
        import SignUp from './SignUp';

         class ConditionalRender extends Component {

            constructor(props)
            {
                super(props)

                this.state = {
                     isLogedIn: false,
                }
            }

            render()
            {
                const {isLogedIn} = this.state;
                if(isLogedIn)
                {
                    return <Home></Home>
                }
                else
                {
                    return <SignUp></SignUp>
                }
            }
        }

        export default ConditionalRender;
        
        

* ###
  
        import React from 'react';
        import './App.css';
        import ConditionalRender from './Components/ConditionalRender'
        
        function App()
        {
          return (
            <div> 
              <ConditionalRender></ConditionalRender>
            </div>

          );
        }

        export default App;




# [references](https://reactjs.org/docs/getting-started.html)

