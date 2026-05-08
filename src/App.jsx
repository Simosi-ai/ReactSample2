
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import SamplePage from './pages/SamplePage';



function App() {
 return(
  <>
  <BrowserRouter basename="/ReactSample2">
   <Routes>
     <Route path = '/' element ={<Home />} />
     <Route path = '/sample-page' element ={<SamplePage />} />
   </Routes>
   </BrowserRouter>
  </>
 )
}

export default App;
