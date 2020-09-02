import React, { Component } from 'react'

class LoadingScreen extends Component {
    render() {
        console.log('in loading screen')
        return (
            <div
                // style={{
                //     paddingTop: '10%'
                // }} 
                // className="text-center"
                >
                <img src="loading.gif" alt=""/>
                {/* <h1>loading</h1> */}
            </div>
        )
    }
}

export default LoadingScreen