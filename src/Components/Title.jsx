import React from 'react'

const Title = ({ children }) => {
  return (
    <div  className="bg-linear-60 from-sky-300 to-sky-800 py-3 text-black ">
        <h2 className="text-5xl font-bold">{children}</h2>
    </div>
  )
}

export default Title