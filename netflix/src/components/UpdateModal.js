import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { json } from 'react-router-dom';
import FavList from './FavList';

function UpdateModal({show , handleClose , singleItem}) {

     
     const myObj = {
          id : singleItem.id,
          title : singleItem.title,
          overview : singleItem.overview,
          poster_path : singleItem.poster_path,
          release_date : singleItem.release_date,
          comment : null
     }

     const updateData =  () => {      
           axios.put(`http://localhost:3008/favorite/${singleItem.id}` , (myObj))
          .then(res => console.log(res.data))
          .catch ((err) => console.log(err))
          handleClose()
          }



  return (
     <>
     <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title> Update Movie: {singleItem.title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>  
      </Modal.Body>
     <Modal.Body>
          <form action="">
          <textarea placeholder='Add Comment ' id='comment' style={{resize : "none" , width : '350px'}} defaultValue={singleItem.comment}></textarea>
          <button style={{border : "none" , backgroundColor : "#0d6efd" , color :"white"}}
           onClick={() => { myObj.comment = document.getElementById("comment").value } }>add comment</button>
           </form>

     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={() => {handleClose()}}>
         Close
       </Button>
       <Button variant="primary" onClick={updateData}>
         Save Changes
       </Button>
     </Modal.Footer>

   </Modal>

   </>
  );


}

export default UpdateModal;