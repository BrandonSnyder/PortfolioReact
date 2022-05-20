import './App.css';
import Navbar from'./components/Navbar';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Name from './components/Name';

function App() {
  return (
    <div>
      <Navbar/>
      <Name/>
      <AboutMe/>
      <Project/>
    </div>
  )
}
export default App;
