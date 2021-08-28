
## Context Api
* ### Context.js
        import React from 'react';
        const AppContext = React.createContext();
        const AppProvider = AppContext.Provider;
        const AppCunsumer = AppContext.Consumer;

        export {AppProvider, AppCunsumer};
        
        
* ### Index.js
      import React from 'react';
      import ReactDOM from 'react-dom';

      import App from './App';
      import {AppProvider} from './Context';
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
      ReactDOM.render(
            <AppProvider value ={users}>
              <App />
            </AppProvider>,
        document.getElementById('root')
      );
      
      
* ### App.js
      import React from 'react';
      import F from './Components/F';

      function App()
      {
        return (
            <F />
        )
      }

      export default App
  
* ### F.js
      import React from 'react'
      import {AppCunsumer} from '../Context'
      function F()
      {
          return (
              <div>
                  <AppCunsumer>
                      {(props) =>
                      {
                          return(
                              <>
                                  {props.map((data) =>
                                  {
                                      return(
                                          <div key={data.id}>
                                              <h4>Name: {data.name}</h4>
                                              <h6>age: {data.age}</h6>
                                          </div>
                                      )
                                  })}
                              </>
                          )
                      }}
                  </AppCunsumer>
              </div>
          )
      }

      export default F
