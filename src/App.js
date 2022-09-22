
import './App.css';
import ContadorUseState from "./components/ContadorUseState"
import RelojHooks from './components/RelojHooks';
import ScrollHooks from "./components/ScrollHook"


function App() {
  return (
    <div className="App">
      <h2>contador</h2>
      <ContadorUseState />
      <hr />
      <ScrollHooks />
      <hr />
      <RelojHooks />


    </div>
  );
}

export default App;
