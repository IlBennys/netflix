import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavCustom from "./component/NavCustom"
import logo from "./assets/logo.png"
import SecondNav from "./component/SecondNav"
import FirstLine from "./component/FirstLine"

function App() {
  return (
    <>
      <NavCustom sorgente={logo} />
      <SecondNav />
      <h4>Magic Saga</h4>
      <FirstLine />
    </>
  )
}

export default App
