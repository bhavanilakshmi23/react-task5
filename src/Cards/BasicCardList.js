import React from 'react'
import BasicCard from './BasicCard'

function BasicCardList() {
    const data = [
        {
            title: "Default Card Example",
            content: "This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example."
        }, {
            title: "Basic Card Example",
            content: "The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!"
        }
    ]

    return (
        <div class="row">
            <div class="col-lg-6">
                {data.map((dt) => <BasicCard data={dt} />)}
            </div>
        </div>
    )
}

export default BasicCardList