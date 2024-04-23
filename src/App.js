import { Header, Map } from "./components";

function App() {
  return (
    <div className="App vw-100 vh-100 overflow-hidden position-relative">
        <Map/>
        <div className="w-100 p-1 container col">
          <Header/>
        </div>
    </div>
  );
}

export default App;
