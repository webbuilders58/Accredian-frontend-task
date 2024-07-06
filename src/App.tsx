import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ReferralPage from './pages/ReferralPage'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Routes>
        <Route path='/:userId/:referralId' element={<ReferralPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
