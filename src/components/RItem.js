import React from 'react'

const RItem = (props) => {
    const {detail , amount} = props.rObject;
    return (
        <div className="rItems--data row">
            <li className="white-text rItems--row row-8--child">
                <p>{detail}</p>
            </li>  
            <li className="white-text rItems--row row-8--child">
                <p >{amount}</p>
            </li>   
        </div>
    )
}

export default RItem
