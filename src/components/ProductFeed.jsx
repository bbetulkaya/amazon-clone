import React from 'react'

export default function ProductFeed({products}) {
  return (
    <div>
      <h1>Products here...</h1>
      {products.map((product,index) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  )
}
