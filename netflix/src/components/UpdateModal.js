import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { json } from 'react-router-dom';
import FavList from './FavList';

function UpdateModal({show , handleClose , singleItem , setIsUpdate}) {

     setIsUpdate(false)
     
     const updateData =  (e) => {     
          e.preventDefault();

          const myObj = {
               comment : e.target.comment.value
          }

          axios.put(`http://localhost:3008/favorite/${singleItem.id}` , (myObj))
          .then(res => {console.log(res.data) ; setIsUpdate(true)} )
          .catch ((err) => console.log(err))
          
          handleClose()
          }



  return (
     <>
     <Modal show={show} onHide={handleClose}>
     <form onSubmit={updateData}>
          
     <Modal.Header closeButton>
       <Modal.Title> Update Movie: {singleItem.title}</Modal.Title>
     </Modal.Header>

     <Modal.Body>
          <textarea placeholder='Add Comment ' id='comment' style={{resize : "none" , width : '350px'}} defaultValue={singleItem.comment}></textarea>
     </Modal.Body>

     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}> Close</Button>
       <Button variant="primary" onClick={handleClose} type='submit'>Save Changes</Button>
     </Modal.Footer>

     </form>
   </Modal>

   </>
  );


}

export default UpdateModal;