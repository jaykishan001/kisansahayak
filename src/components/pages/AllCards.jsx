import React, { useEffect } from 'react'
import service from '../../appwrite/config'
import { set } from 'react-hook-form'
import PostCard from '../PostCard'
import { useState } from 'react'

useEffect(()=> {})

function AllCards() {
    const [card, setCard] = useState([])
    useEffect(()=> {
        service.getCards([])
        .then((posts)=> {
            if(posts) {
                setCard(posts.documents)
            }
        })
    },[])

  return (
    <div>
        <h1>All Cards</h1>
        <div className="grid grid-cols-3 gap-4">
            {card.map((card)=> (
                <PostCard key={card.$id} {...card} />
            ))}
        </div>
    </div>
  )
}

export default AllCards