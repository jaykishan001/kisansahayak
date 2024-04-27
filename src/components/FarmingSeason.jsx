import React, { useEffect } from 'react'
import { useState } from 'react'
import { options } from '../jsonData/CropSeason'


function FarmingSeason() {
    
    const [farmingSeason, setFarmingSeason] = useState()
    
    
    
   

  return (
    <div>
        <select onChange={(e)=> setFarmingSeason(e.target.value) }>
            {options.map((data)=> {
                <option value={data}>
                    {data}
            </option>
            console.log(data);

            })}
        </select>
    </div>
  )
}

export default FarmingSeason