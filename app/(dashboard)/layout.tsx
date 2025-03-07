import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <>
        <div className="text-2xl">Dashboard Nav</div>
        {children}
    </>
   
  )
}

export default layout