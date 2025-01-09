import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import {ClassBasedComponent} from './components/ClassBasedComponent';
import {FunctionalComponent} from './components/FunctionalComponent';

function App() {

let par = "!";
const newWayClick = (d) => {
  console.log('log...');
  par+="!";
}

  return <> 

  <Counter/>
  <br />

  <ClassBasedComponent fancyText={par} chislo={()=>1234} />
  <br />
  <ClassBasedComponent fancyText={'text2'} chislo={1} param={10*42} />
  <br />
  <FunctionalComponent newText={'newText1'} onFancyClick ={newWayClick}/> 
  <br />
  <FunctionalComponent newText={'newText2'} after={<span>TEXT</span>}/> 
  <br />
  <FunctionalComponent/> 
  <br />
  </>;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
