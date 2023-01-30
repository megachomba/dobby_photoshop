import React from 'react'

import { Hello } from '../components/Hello.jsx'
import { PlayIcon } from '../components/Icons.jsx'

export const MoreDemos = () => {
  return (
    <>
      <Hello message="there" />
      <button>
        <span slot="icon">
          <PlayIcon />
        </span>
      </button>
    </>
  )
}
