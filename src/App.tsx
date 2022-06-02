import './App.css'

function App() {

  const Username: string = 'Here you need to put some logic';


  return (
    <div className="App">
      <div className="Container-Nav">
        <div className="navbar">
          <h1> Navbar</h1>
        </div>
      </div>
      <header className="App-header">

        <h1>Hero</h1>
        <p>Header</p>
      </header>
      <div className="container">
        <h2>Hackathon</h2>
        <div> Section 1: Welcome {Username}
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
        <div className="Team-Container">
          <div className="Team">
            <h1>Team</h1>
            <p>This is our Team</p>
          </div>
          <div className="Team-Info">
          <div className="team-card">
              my Card 1
            </div>
            <div className="team-card">
              my Card 2
            </div>
            <div className="team-card">
              my Card 3
            </div>
          </div>
        </div>
        <footer>
          <div className="my-footer">
            <h1>
              This is My Footer
            </h1>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
