import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <Link className="appLink" to="/">Home</Link> |{" "}  
          <Link className="appLink" to="/Students">Select Student</Link> |{" "}  
          <Link className="appLink" to="/Assignments">Select Assignment</Link>
        </nav>
      <Outlet />  
      </header>
    </div>
  )
}

export default App;
