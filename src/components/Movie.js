import React from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModelMovies from './ModalMovie';
import axios from 'axios';

export default function Movie({item , handleShow , setSingleItem , canEdit = false ,deleteState }) {
     function click (){
          setSingleItem(item)
          handleShow()
     }


     const deleteMovie = () =>{
          axios.delete(`https://movie-server-8wr7.onrender.com/favorite/${item.id}`).then(result =>{
               console.log('deleted');
               deleteState(item.id)
          }).catch((err) => console.log(err));
          
     }
  return (
          <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={'https://image.tmdb.org/t/p/original'+item.poster_path} alt={item.title} />
               <Card.Body>
               <Card.Title>{item.title || 'NO Title'}</Card.Title>
               <Card.Text>{item.overview}</Card.Text>
               {
                    canEdit && 
                    <Card.Text>Comment : {item.comment}</Card.Text>
               }
               <h5>{item.release_date}</h5>
               {
                    !canEdit &&
                    <Button onClick={click} variant="primary">Add to Favorite</Button>
               }
               {
                    canEdit &&
                    <>                    
                    <Button onClick={click} variant="success">Update</Button>
                    <Button onClick={deleteMovie} variant="danger">Delete</Button>
                    </>
               }
               </Card.Body>
           </Card>
           
  )
}
