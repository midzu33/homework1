import './App.css'
import {Route , Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import MainPage from "./pages/MainPage.jsx";
import SendPostPage from "./pages/SendPostPage.jsx";

function App() {

  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/create' element={<SendPostPage/>}/>

      </Routes>
    </>
  )
}

export default App
