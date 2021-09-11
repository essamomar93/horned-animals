import React, { Component } from 'react'
import HornedBeast from './HornedBeast '
import Data from './data.json'


class Main extends Component {

    render() {
        return (

            <div className="row">
                {
                    this.props.item.length > 0 ?
                        this.props.item.map(item => {
                            return (
                                <>
                                    <HornedBeast
                                        item={item}
                                        handleOpen={this.props.handleOpen}
                                    />
                                </>
                            )
                        })
                        : Data.map(item => {
                            return (
                                <>
                                    <HornedBeast
                                        item={item}
                                        handleOpen={this.props.handleOpen}
                                    />
                                </>
                            )
                        })
                }
            </div>
        )
    }
}
export default Main;

