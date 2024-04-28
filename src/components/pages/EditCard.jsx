import React, { useEffect, useState } from 'react'
import Postform from '../Postform'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../../appwrite/config'

function EditCard() {
    const[card, setCard]   = useState([])
    const {slug} = useParams()
    const navigate =useNavigate()

    useEffect(()=> {
        if(slug) {
            service.getCard(slug)
                .then((card)=> {
                    if(card) {
                        setCard(card)
                    }
                })
        }
        else {
            navigate('/')
        }
    }, [])
  return card ?  (
    <div className='py-14'>
        <Postform card={card} />
    </div>
  ) :  null;
}

export default EditCard