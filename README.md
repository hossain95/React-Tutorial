# React-Tutorial


## Props
### Function component
    function Welcome(props)
    {
      return <h1>Hello, {props.name}</h1>;
    }

    const element = <Welcome name="Sara" />;
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
    
*  Output: **Hello, Sara**

### Class Component
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





# [references](https://reactjs.org/docs/getting-started.html)

