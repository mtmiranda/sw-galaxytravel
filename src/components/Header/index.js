import React from 'react'
import { Content, HeaderWrapper } from './style'

import headerIconImg from '../../assets/img/storm-trooper.png'

function Header() {
    return (
        <HeaderWrapper>
            <header>
                <Content>
                    <h1>Welcome to Star Wars</h1>
                    <h2>Galaxy travel calculator</h2>
                    <img
                        className="header-icon"
                        src={headerIconImg}
                        alt="storm-trooper"
                    />
                </Content>
            </header>
        </HeaderWrapper>
    )
}

export default Header
