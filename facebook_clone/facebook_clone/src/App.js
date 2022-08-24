import './App.css';
import LoginHome from './components/LoginHome/LoginHome';
import Layout from './components/MainPage/Layout';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     

     {localStorage.getItem("user") ==undefined
      ?
       <LoginHome/> 
       :<span><Navbar/> <Layout/> </span>
     }
   
    </div>
  );
}

export default App;
