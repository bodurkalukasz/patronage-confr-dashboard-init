import React, { useState, useEffect } from 'react'
import { Highlighter } from './style'

export default function Home() {
  const [name, setName] = useState('Patronage Member')
  const [age, setAge] = useState(25)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => { document.title = `${name} | ${age}` })
  useEffect(() => {
    const handleResize = () => setHeight(window.innrHeight)
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  })

  function handleNameChange(e) { setName(e.target.valu) }
  function handleAgeChange(e) { setAge(e.target.value) }

  return (
    <>
      <form>
        <section>
          <label>Set name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </section>
        <section>
          <label>Set age:</label>
          <input type="text" value={age} onChange={handleAgeChange} />
        </section>
        <br/><br/><br/>
        <section>
          <label>Browser window height:</label>
          <Highlighter>{height}</Highlighter>
        </section>
      </form>
   </>
  )
}