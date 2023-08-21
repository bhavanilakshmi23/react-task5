import React from 'react'
import { CardList } from '../Dash/CardList'
import BasicCard from './BasicCard'
import BasicCardList from './BasicCardList'

function Cards() {
    return (
        <div class="container-fluid">
            {/* <!-- Page Heading --> */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Cards</h1>
            </div>
            <CardList />
            <BasicCardList />
        </div>
    )
}

export default Cards