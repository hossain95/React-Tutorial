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
        
        
* ### App
  
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

