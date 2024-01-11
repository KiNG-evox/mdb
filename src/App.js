import Navbar from './components/Navbar';
import Homepage from './pages/home'
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/latest' element={<Homepage/>}/>
        <Route path='/watchlist' element={<Homepage/>}/>
        <Route path='/sign in' element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
