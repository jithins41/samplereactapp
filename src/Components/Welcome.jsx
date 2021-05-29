import React from 'react'

function Welcome(props) {
    return(
        <h1 style={{backgroundColor:'red',color:'#fff'}}> Welcome {props.name} Your age is {props.age}</h1>
    )
}

export default Welcome
