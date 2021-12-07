import React, { Component } from 'react'
import QuickSearch from './components/QuickSearch'
import Search from './components/Search'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Search />
                <QuickSearch />
            </div>
        )
    }
}
