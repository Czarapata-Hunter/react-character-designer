import './App.css';
import Header from './components/Layout/Header/Header.js';
import Footer from './components/Layout/Footer/Footer.js';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Main />
      <Footer className="footer" />
    </div>
  );
}

export default App;
