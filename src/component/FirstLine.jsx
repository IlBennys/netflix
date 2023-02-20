import { Component } from "react"
import CardMovie from "./CardMovie"

class FirstLine extends Component {
  state = {
    cover: [],
  }
  componentDidMount = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=fa8d42b&s=harry%20potter&plot=full")
      if (response.ok) {
        const data = await response.json()
        this.setState({ cover: data.Search })
        // console.log(this.state.cover)
      } else {
        console.log("error while fetching")
      }
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <>
        <h4 className="my-4">Harry Potter Saga</h4>
        <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between  ">
          {this.state.cover.map((mov, i) => (
            <CardMovie movie={mov} key={i} />
          ))}
        </div>
      </>
    )
  }
}

export default FirstLine
