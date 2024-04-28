import React from 'react'
import FarmingSeason from '../FarmingSeason'
import {options} from "../jsonData/CropSeason"

function Season() {
  return (
    <div>
        <FarmingSeason options={options} />
    </div>
  )
}

export default Season