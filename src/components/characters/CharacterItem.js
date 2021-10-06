import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Character Name:</strong> {item.asCharacter}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
