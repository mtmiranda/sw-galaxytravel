import React from 'react'

import styled from 'styled-components'

import Header from './components/Header'
import Dashboard from './components/Dashboard'

// import 'bootstrap/dist/css/bootstrap.min.css'

import { GlobalStyle } from './styles/global'
import './styles/font.css'
import Footer from './components/Footer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

function App() {
    return (
        <Container>
            <GlobalStyle />
            <Header />
            <Dashboard />
            <Footer />
        </Container>
    )
}

export default App
