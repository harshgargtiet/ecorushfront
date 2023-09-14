
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Home from "./components/pages/home.js"
import Navbar from "./components/pages/navbar.js"
import './index.css';
import Footer from "./components/pages/footer.js"
import Leaderboard from "./leaderboard/leaderboard.js"
import Activitypage from "./components/pages/activityPage.js"
import Addactivity from "./components/pages/Addactivity"

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={< Home /> }/>
        
      </Routes>
    </BrowserRouter>
    </>
    // <div> 
    //   <Auth/>
    //   <Navbar/>
    //   <Home/>
    //   <Leaderboard/>
    //   <Activitypage/>
    //   <Addactivity/>
    //   <Footer/>
     
    // </div>
  )
}

export default App