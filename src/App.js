import './App.css';
import Header from './components/Layout/Header/Header.js';
import Footer from './components/Layout/Footer/Footer.js';
import Main from './components/Main/Main.js';
import background from '../src/background.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header className="header" />
      <Main className="main" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
