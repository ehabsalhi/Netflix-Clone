import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { json } from 'react-router-dom';
import FavList from './FavList';

function ModelMovies({show , handleClose , singleItem}) {

     
     const myObj = {
          id : singleItem.id,
          title : singleItem.title,
          overview : singleItem.overview,
          poster_path : singleItem.poster_path,
          release_date : singleItem.release_date,
          comment : null
     }

     const addData =  (e) => {      
      e.preventDefault()
      myObj.comment = e.target.comment.value
           axios.post(`https://movie-server-8wr7.onrender.com/favorite` , (myObj))
          .then(res => console.log(res.data))
          .catch ((err) => console.log(err))
          handleClose()
          }



  return (
     <>
     <Modal show={show} onHide={handleClose}>
      <form onSubmit={addData}>
        
     <Modal.Header closeButton>
       <Modal.Title>{singleItem.title}</Modal.Title>
     </Modal.Header>

     <Modal.Body>
          <img src={'https://image.tmdb.org/t/p/original'+singleItem.poster_path} alt={singleItem.title} />
          
          <textarea placeholder='Add Comment ' id='comment' style={{resize : "none" , width : '350px'}}></textarea>
          
          {/* <button style={{border : "none" , backgroundColor : "#0d6efd" , color :"white"}} onClick={() => { myObj.comment = document.getElementById("comment").value } }>add comment</button> */}

     </Modal.Body>

     <Modal.Footer>
       <Button variant="secondary" onClick={() => {handleClose()}}>Close</Button>
       <Button variant="primary" type='sumbit'> Save Changes</Button>
     </Modal.Footer>
     
     </form>
   </Modal>

   </>
  );


}

export default ModelMovies;