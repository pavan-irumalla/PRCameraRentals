import logo from './logo.svg';
import './App.css';
import Nav from './Components/Core/Nav';
import SideNav from './Components/Core/SideNav';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* side navigation can also be used independently if needed */}
      <SideNav open={false} onClose={() => {}} menu={[]} />
      <Home />
    </div>
  );
}

export default App;
