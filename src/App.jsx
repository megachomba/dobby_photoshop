// create a classic react app component

import React, { useEffect } from 'react'
import { useState } from 'react'
import { getConfig, getModels, handleGenerateTxt2img } from './api/api'
import { ModelSelector } from './components/ModelSelector.jsx'
import { Txt2img } from './components/Txt2img.jsx'

const handleClick = async () => {
  console.log('clicked')
  await getConfig()
}

export const App = () => {
  const [currentModel, setCurrentModel] = useState(null)
  const [models, setModels] = useState([])
  const [menus, setMenus] = useState('txt2img')
  const [prompt, setPrompt] = useState('')
  const [negativePrompt, setNegativePrompt] = useState('')
  useEffect(() => {
    const fetchModels = async () => {
      const modelsFetch = await getModels()
      console.log(modelsFetch)
      if (modelsFetch) {
        setModels(modelsFetch)
      }
    }
    fetchModels()
  }, [])
  const handlePrompt = (e) => {
    setPrompt(e.target.value)
  }
  const handleNegativePrompt = (e) => {
    setNegativePrompt(e.target.value)
  }
  const handleGenerate = async () => {
    switch (menus) {
      case 'txt2img':
        await handleGenerateTxt2img(currentModel)
        break
      default:
        break
    }
  }

  return (
    <>
      <ModelSelector modelList={models} model={currentModel} setCurrentModel={setCurrentModel} />
      <button onClick={handleGenerate}>generate</button>
      <textarea
        style={{ width: '100%', height: '50px' }}
        placeholder="Prompt.."
        value={prompt}
        onChange={(e) => handlePrompt(e)}
      ></textarea>
      <textarea
        style={{ width: '100%', height: '50px' }}
        placeholder="Negative prompt.."
        value={negativePrompt}
        onChange={(e) => handleNegativePrompt(e)}
      ></textarea>
      <button> txt2img</button>
      <button> img2img</button>
      <button>inpaint</button>
      <button>outpaint</button>
      {menus === 'txt2img' && <Txt2img onCick={() => setMenus('txt2img')} model={currentModel} />}
    </>
  )
}
