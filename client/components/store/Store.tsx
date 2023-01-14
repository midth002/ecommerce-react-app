import React from 'react'

const Store = ({products}: any) => {
  return (
    <div>
    {products?.data.map((p: any) => {
      return (
        <h1 key={p.id}>{p.name}</h1>
      )
    })}
    </div>
  )
}

export default Store