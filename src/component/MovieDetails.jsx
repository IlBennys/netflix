import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Row, Col, Button, Card } from "react-bootstrap"

function MovieDetails() {
  const params = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    // console.log(res)
    try {
      const res = fetch("http://www.omdbapi.com/?apikey=fa8d42b&i=" + params.movieID)
      if (res.ok) {
        const data = res.json()
        setMovie({ movie: data.Search })
        console.log(movie)
      } else {
        console.log("error while fetching")
      }
    } catch (e) {
      console.log(e)
    }
  })
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default MovieDetails
