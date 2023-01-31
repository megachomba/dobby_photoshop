import React, { FC } from 'react'
import { useState } from 'react'

export const ModelSelector = ({ modelList, model, setCurrentModel }) => {
  modelList
  model
  setCurrentModel
  return (
    <>
      <label htmlFor="model">Choose a Model:</label>

      <select name="models" id="models">
        {modelList &&
          modelList.length > 0 &&
          modelList.map((m) => {
            return <option onClick={() => setCurrentModel(m)}>{m.model_name}</option>
          })}
      </select>

      {/* <sp-field-group>
        <sp-field-label for="picker-m" size="m">
          Selected Model:{' '}
          {modelList && modelList.length > 0 && model
            ? modelList.find((m) => m.title === model.title).model_name
            : 'no model selected'}
        </sp-field-label>

        <sp-picker size="m" label="What would you like to do?" value={model?.title ? model.title : 'select a model'}>
          <sp-menu-item>'toto'</sp-menu-item>
          {modelList &&
            modelList.length > 0 &&
            modelList.map((m) => {
              return (
                <sp-menu-item key={m.title} value={m.title} onClick={() => setCurrentModel(m)}>
                  {m.model_name}
                </sp-menu-item>
              )
            })}
        </sp-picker>
      </sp-field-group> */}
    </>
  )
}
