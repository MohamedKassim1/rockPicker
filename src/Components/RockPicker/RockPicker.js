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
        }else if(property === 'dropOff'){
            this.setState({
                rocks: this.state.rocks -1
            })
        }else if(property === 'scoop'){
            this.setState({
                rocks: this.state.rocks +5
            })
        }else if(property === 'dropAll'){
            this.setState({
                rocks: 0
            })
        }
    }
    render() {
        return (
            <div>
                <p>Rock Picker: {this.state.rocks}</p>
                <button onClick={(event)=>this.clickHandler(event, 'pickUp')}>Pick A Rock</button>
                <button onClick={(event)=>this.clickHandler(event, 'dropOff')}>Drop A Rock</button>
                <button onClick={(event)=>this.clickHandler(event, 'scoop')}>Scoop Rocks</button>
                <button onClick={(event)=>this.clickHandler(event, 'dropAll')}>Drop All Rocks</button>
            </div>
        )//end return
    }//end render
}//end class

export default RockerPicker
