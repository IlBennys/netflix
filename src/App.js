import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavCustom from "./component/NavCustom"
import SecondNav from "./component/SecondNav"
import FirstLine from "./component/FirstLine"
import SecondLine from "./component/SecondLine"
import ThirdLine from "./component/ThirdLine"
import logo from "./assets/logo.png"
import Footer from "./component/Footer"

function App() {
  return (
    <>
      <div className="mx-4">
        <NavCustom sorgente={logo} />
        <SecondNav />
        <h4 className="my-4">Harry Potter Saga</h4>
        <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between  ">
          <FirstLine />
        </div>
        <h4 className="my-4">Saw Saga</h4>
        <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between  ">
          <SecondLine />
        </div>
        <h4 className="my-4">Star Wars Saga</h4>
        <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between  ">
          <ThirdLine />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
