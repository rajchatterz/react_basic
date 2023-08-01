import React from 'react'

const List = (props) => {
  return (
    <div>
      <ul>
        <li>{props.name}</li>
        <li>{props.name1}</li>
        <li>{props.name2}</li>
      </ul>
    </div>
  )
}

export default List
