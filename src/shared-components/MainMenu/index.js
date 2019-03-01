import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { Nav } from './style'

export default function MainMenu () {
    return (
        <Nav>
            <Link to="/"><Button name='Home'></Button></Link>
            <Link to="/about"><Button name='About'></Button></Link>
            <Link to="/users"><Button name='Users'></Button></Link>
            <Link to="/contact"><Button name='Contact'></Button></Link>
        </Nav>
    )
}