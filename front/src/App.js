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

import {Fragment, useEffect, useState} from "react";

const renderComments = (comments) => {
    return comments.map((el, i) => <div key={i}>{el.name}</div>)
}

const App = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('/api/getMessages').then((result => {
            result.json().then((data) => {
                console.log('getMessages', data);
                setComments([...data]);
            });
        }))
    }, []);


    return (<Fragment>
            <div className="App">Hello, Serhii Volynets! It's React</div>
            {renderComments(comments)}
        </Fragment>
    );
}


export default App;
