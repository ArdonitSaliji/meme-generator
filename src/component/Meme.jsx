import React from 'react'
import { useState, useEffect } from 'react'
const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1g8my4.jpg',
  })
  const [allMemes, setAllMemes] = useState([])
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((obj) => setAllMemes(obj.data.memes))
  }, [])
  function getMemeImage() {
    const random = Math.floor(Math.random() * allMemes.length)
    const randomMeme = allMemes[random].url
    setMeme((prev) => ({
      ...prev,
      randomImage: randomMeme,
    }))
  }
  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <main>
      <div className='form'>
        <input onChange={handleChange} value={meme.topText} name='topText' className='form-input' type='text' placeholder='Text' />
        <input onChange={handleChange} value={meme.bottomText} name='bottomText' className='form-input' type='text' placeholder='Text' />
        <button onClick={getMemeImage} className='form-button'>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} className='meme-image' alt='img' />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
