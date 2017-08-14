import { render } from 'react-dom'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import App from './app'

test('it displays default content', () => {
  const div = document.createElement('div')
  render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ), div)
  console.assert(div.innerHTML.match(/Easily submit and score QPP data in real-time via API/))
})

test('it displays developer-preview', () => {
  const div = document.createElement('div')
  render((
    <MemoryRouter initialEntries={[ '/developer-preview' ]} initialIndex={0}>
      <App />
    </MemoryRouter>
  ), div)
  console.assert(div.innerHTML.match(/Developer Preview/))
})

test('it displays tutorial', () => {
  const div = document.createElement('div')
  render((
    <MemoryRouter initialEntries={[ '/tutorial' ]} initialIndex={0}>
      <App />
    </MemoryRouter>
  ), div)
  console.assert(div.innerHTML.match(/API Tutorial/))
})
