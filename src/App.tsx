import './App.css'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Page1 from './components/Page1'
import Page2 from './components/Page2'


function App() {

  const Username: string = 'Here you need to put some logic';

  const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
`

  // function () {
  //   return <h2>Home</h2>;
  // }

  function Page1() {
    return <Page1 />;
  }

  function Page2() {
    return <h2>Users</h2>;
  }

  return (

    <div className="App">
      <div className="Container-Nav">
        <BrowserRouter>
          <nav>
            <div className="navbar">
              {/* <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link to='/page1'>Page1</Link>
                </li>
                <li>
                  <Link to='/page2'>Page2</Link>
                </li>
              </ul> */}
            </div>
          </nav>
          <Routes>
            {/* <Route exact path='/'></Route>
            <Route exact path='/page1'></Route>
            <Route exact path='/page2'></Route> */}

            <Route exact path='/' />
<Route exact path='/page1' element={<Page1/>} />
<Route exact path='/page2' element={<Page2/>} />


          </Routes>
          <h1> Navbar</h1>
        </BrowserRouter >
      </div >
      <div>
        <header className="App-header">
          <h1>Hero</h1>
          <p>Header</p>
          <Button>I'm purple.</Button>
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
    </div>
  )
}

export default App
