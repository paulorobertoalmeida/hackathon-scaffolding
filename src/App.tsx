import './App.css'

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <nav>Navbar</nav>
        <p>Hero</p>
        <h1>Header</h1>
      </header>
      <div className="container">
        <p>Hackathon</p>
        <div> Section 1 </div>
        <div className="container">
          <div className="card">
            my Card 1
          </div>
          <div className="card">
            my Card 2
          </div>
          <div className="card">
            my Card 3
          </div>
        </div>
        <footer>
          <div className="my-footer">
            <h3>
              this is my footer
            </h3>
          </div>
        </footer>
      </div>

    </div>
  )
}

export default App
