import { Component } from "react"
import Card from "react-bootstrap/Card"

class CardMovie extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.movie.poster} />
      </Card>
    )
  }
}

export default CardMovie
