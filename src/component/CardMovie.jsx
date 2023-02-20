import { Component } from "react"
// import { Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"

class CardMovie extends Component {
  render() {
    return (
      <Card style={{ width: "18rem", backgroundImage: "cover" }} className="cardina me-3 mb-3 bg-danger">
        <Card.Img className="h-100" src={this.props.movie.Poster} />
      </Card>
    )
  }
}

export default CardMovie
