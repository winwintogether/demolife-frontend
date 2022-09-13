import React from 'react'
import { Router } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import history from './routes/history'
import Routes from './routes'
import theme from "./theme";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Router history={history}>
        <Routes />
      </Router>
      <Footer />
    </MuiThemeProvider>
  )
}

export default App
