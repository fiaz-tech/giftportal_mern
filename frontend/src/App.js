import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen'
import Footer from './components/Footer';
import GiveawayScreen from './screens/GiveawayScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        
          <Routes>
          <Route path='/' element={<HomeScreen/>} />
        
          <Route path='/products' element={<GiveawayScreen/>} />
          <Route path='/product/:id' element={<ProductScreen/>} />
          <Route path='/login' element={<LoginScreen/>} />
          <Route path='/register' element={<RegisterScreen/>} /> 
        
              
          <Route path="*" element={ <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main> } />
          </Routes>
    
        <Footer />
      </main>
    </Router>
  )
}

export default App;
