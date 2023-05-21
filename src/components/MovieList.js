import React from 'react'
import Movie from './Movie'
import { Row } from 'react-bootstrap'
import ModelMovies from './ModalMovie';
import {  useState } from 'react';

export default function MovieList({data}) {

  const [show, setShow] = useState(false);
  
  const handleShow = () => {setShow(true)};
  const handleClose = () => {setShow(false)}


  const [singleItem , setSingleItem] = useState({})
  
  return (
    <div>
      <Row style={{marginLeft : "40px"}}>

        {data.map(item =>
          <Movie item = {item} key={item.id} handleShow = {handleShow} setSingleItem = {setSingleItem}/>
        )}
      </Row>
        <ModelMovies show= {show} handleClose= {handleClose} singleItem = {singleItem} />

    </div>
  )
}
