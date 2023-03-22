import React from 'react'

export default function Header(props) {
  return (
    <>
        <div className="flex flex-row-reverse">
          <button className="bg-cyan-600 py-2 px-6 text-white font-semibold m-2 rounded-lg hover:shadow-md" onClick={props.toggleDisplay}>Login</button>
        </div>
    </>
  )
}
