import React from 'react'
import MainMenu from '../MainMenu'
import { Header } from './style'

export default function SiteHeader() {
    return (
        <Header className="App-header">
            <img src="confr-logo.jpg" alt="Welcome to ConfR<"></img>
            <MainMenu />
        </Header>
    )
}

