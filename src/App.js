import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavCustom from "./component/NavCustom"
import SecondNav from "./component/SecondNav"
import FirstLine from "./component/FirstLine"
import SecondLine from "./component/SecondLine"
import ThirdLine from "./component/ThirdLine"
import logo from "./assets/logo.png"
import Footer from "./component/Footer"
import MovieDetails from "./component/MovieDetails"
import TVShow from "./component/TVShow"

function App() {
  return (
    <BrowserRouter>
      <NavCustom sorgente={logo} />
      <SecondNav />

      <Routes>
        <Route
          path="/home"
          element={
            <>
              <FirstLine /> <SecondLine /> <ThirdLine />
            </>
          }
        />
        <Route path="/TVShow" element={<TVShow />} />
        <Route path="/movie-details/:movieID" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
