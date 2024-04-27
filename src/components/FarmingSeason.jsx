import React, { useEffect } from 'react'
import { useState } from 'react'
import CropSeasons from "../jsonData/CropSeason.json"

function FarmingSeason() {
    
    const [farmingSeason, setFarmingSeason] = useState()
    
    useEffect(()=> {
        const cropData = JSON.parse(CropSeasons);
        console.log(cropData)
    }, [])
   

  return (
    <div>
        <select onChange={(e)=> setFarmingSeason(e.target.value) }>
            {cropData.map((data)=> {
                <option value={data}>
                    {data}
            </option>
            })}
        </select>
    </div>
  )
}

export default FarmingSeason