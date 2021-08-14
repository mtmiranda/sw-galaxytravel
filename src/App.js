import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Dashboard from './components/Dashboard';
import { GlobalStyle } from './styles/global'
import './styles/font.css';

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
            <Dashboard/>
        </Container>
    )
}

export default App
