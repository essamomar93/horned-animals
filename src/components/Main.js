import React, { Component } from 'react'
import HornedBeast from './HornedBeast '
import Data from './data.json'


class Main extends Component {
    render() {
        return (
            <>
                {
                    Data.map(item => {
                        return (
                            <>
                                <HornedBeast item={item} />

                            </>
                        )
                    })
                }
            </>
        )
    }
}
export default Main;
