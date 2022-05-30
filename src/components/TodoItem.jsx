import React from 'react'

const TodoItem = ({todos}) => {
  return (
    <div>
        {todos.map((data)=>(
            <div key={data.id}>{data.id}{`:`}{data.title}</div>
        ))}
    </div>
  )
}

export default TodoItem