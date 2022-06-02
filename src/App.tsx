import './App.css'

function App(props) {

  const Username: string = 'Here you need to put your username'
  

  return (
    <div className="App">
       <div className="Container-Nav">
          <div className="navbar">
          <p> Navbar</p>
          </div>
        </div>
      <header className="App-header">
       
        <p>Hero</p>
        <h1>Header</h1>
      </header>
      <div className="container">
        <p>Hackathon</p>
        <div> Section 1: Welcome {props.Username} 
        </div>
        <div className="About">
          <h2>Here you can say something more about your project</h2>
        </div>
        <div className="container">
          <div className="card-deck">
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
        </div>
        <footer>
          <div className="my-footer">
            <h3>
              This is My Footer
            </h3>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
