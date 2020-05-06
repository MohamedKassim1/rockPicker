import React, { Component } from 'react'

export class RockerPicker extends Component {
    state = {
        rocks: 0    
    }
    clickHandler = (event, property) => {
        console.log('clicked me');
        if(property === 'pickUp'){
            this.setState({
                rocks: this.state.rocks +1
            })  
            this.props.dispatch({type: 'pickUp', payload: 1})
        }else if(property === 'dropOff'){
            this.setState({
                rocks: this.state.rocks -1
            })
            this.props.dispatch({type: 'dropOff', payload: 1})
        }else if(property === 'scoop'){
            this.setState({
                rocks: this.state.rocks + 5
            })
            this.props.dispatch({type: 'pickUp', payload: 5})
        }else if(property === 'dropAll'){
            this.setState({
                rocks: 0
            })
            this.props.dispatch({type: 'dropOff', payload: this.state.rocks})
        }
    }
    render() {
        return (
            <div>
                <p>Rock Picked: {this.state.rocks}</p>
                <button onClick={(event)=>this.clickHandler(event, 'pickUp')}>Add</button>
                <button onClick={(event)=>this.clickHandler(event, 'dropOff')}>Sub</button>
                <button onClick={(event)=>this.clickHandler(event, 'scoop')}>Add +5</button>
                <button onClick={(event)=>this.clickHandler(event, 'dropAll')}>Reset</button>
            </div>
        )//end return
    }//end render
}//end class

export default RockerPicker
