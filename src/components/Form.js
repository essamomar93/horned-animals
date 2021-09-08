import React, { Component } from 'react'

class Form extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <form >
                    <select onChange={(e) => this.props.handleSelect(e) }>
                        <option value="0">Number Of Horns</option>
                        <option value="1">1 horn</option>
                        <option value="2">2 horns</option>
                        <option value="3">3 horns</option>
                        <option value="100">100 horns</option>
                    </select>
                </form>

            </div>
        )
    }
}
export default Form;
