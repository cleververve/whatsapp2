// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import {useEffect} from "react";

const App = ()=>{
  useEffect(()=>{
     fetch('/api/getMessages').then((result=>{
       console.log('getMessages: ',result);
     }))
  },[]);
  return (<div className="App">Hello from React, Serhii!</div>);
}


export default App;
