import React from 'react'
import { Content, HeaderWrapper } from './style'

function Header() {
    return (
        <HeaderWrapper>
            <header>
                <Content>
                    <h1>Welcome to Star Wars</h1>
                    <h2>Galaxy travel calculator</h2>
                </Content>
            </header>
        </HeaderWrapper>
    )
}

export default Header
