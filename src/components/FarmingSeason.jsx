import React from 'react'
import { useState } from 'react'
import CropSeasons from "../jsonData/CropSeason.json"

function FarmingSeason() {
    const cropData = JSON.stringify(CropSeasons);
    const [farmingSeason, setFarmingSeason] = useState()
    setFarmingSeason(cropData)

   

  return (
    <div>
        <select>
            {cropData.map()}
        </select>
    </div>
  )
}

export default FarmingSeason