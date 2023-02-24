import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/detault'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
        Hello
      </div>
    </ThemeProvider>
  )
}
