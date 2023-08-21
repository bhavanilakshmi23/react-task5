import React from 'react'

function BasicCard({ data }) {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">{data.title}</h6>
            </div>
            <div className="card-body">
                {data.content}
            </div>
        </div>
    )
}

export default BasicCard