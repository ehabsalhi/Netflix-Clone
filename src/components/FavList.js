import React, { useEffect, useState } from 'react'
import Navibar from './Navbar'
import Movie from './Movie'
import axios from 'axios'
import { Row } from 'react-bootstrap'
import UpdateModal from './UpdateModal'

export default function FavList() {
  let count = 0
  const [getfav , setfav] = useState (false)
  const [show, setShow] = useState(false);
  const [singleItem , setSingleItem] = useState({})
  const [isUpdate , setIsUpdate] = useState(false)

  const getData = async () => {
    try{
    const res = await  axios.get(`https://movie-server-8wr7.onrender.com/favorite`)
    setfav(res.data.result)}

    catch(err){console.log(err);}
  }

  useEffect(() =>{
    getData()
  } , [isUpdate])



  const handleShow = () => {setShow(true)};
  const handleClose = () => {setShow(false)}

  const deleteState = (id)  =>{
    setfav(preValue => preValue.filter( item => item.id !== id))
  }

  return (
      <div>
        <Navibar/>
        <Row>
        {
          getfav &&
          getfav.map(item => <Movie item={item}  key={count++} canEdit = {true} 
            handleShow = {handleShow} setSingleItem = {setSingleItem} deleteState={deleteState}/>)
        }
        </Row>
        <UpdateModal show= {show} handleClose= {handleClose} singleItem = {singleItem} setIsUpdate ={setIsUpdate}  />

      </div>
  )
}
