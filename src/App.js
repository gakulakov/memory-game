import "./App.css";
import  StartButton  from "./components/StartButton/StartButton";
import  Board  from "./components/Board/Board";

function App() {

  return (
    <div className="App">
      <h1 className={"title"}>Test Task for JetRuby</h1>

     
        <div className={"start"}>
          <StartButton />
        </div>

        
        <div className={"card-container"}>
          <Board />
        </div>
     
    </div>
  );
}


export default (App);
