import React from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'

export  default function Pages() {
    return (
        <>
            <Route path="/login" component={Login} />
        </>
    )
}