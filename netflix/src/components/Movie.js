import React from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModelMovies from './ModalMovie';

export default function Movie({item , handleShow , setSingleItem}) {
     function click (){
          setSingleItem(item)
          handleShow()
     }
  return (
          <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={'https://image.tmdb.org/t/p/original'+item.poster_path} alt={item.title} />
               <Card.Body>
               <Card.Title>{item.title || 'NO Title'}</Card.Title>
               <Card.Text>{item.overview}</Card.Text>
               <h5>{item.release_date}</h5>
               <Button onClick={click} variant="primary">Add to Favorite</Button>
               </Card.Body>
           </Card>
           
  )
}
