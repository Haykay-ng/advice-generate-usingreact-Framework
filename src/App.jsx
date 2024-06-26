// import Api from './component/api'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return(
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
      {/* <Route path="/" element={<Api />}/> */}
     </Routes>
     
     </BrowserRouter>
      
    </>
  )
}

export default App