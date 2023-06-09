import React from 'react';
import './cores.css';


    class Cores extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                red: 0,
                green: 0,
                blue: 0,
            }
        }
    
        handleChange = (event) => {
            if(event.target.name === 'red'){
                this.setState({
                    red: event.target.value
                });
            }else if(event.target.name === 'green'){
                this.setState({
                    green: event.target.value
                });
            }else if(event.target.name === 'blue'){
                this.setState({
                    blue: event.target.value
                });
            }
        }
    
        render(){
            let style = {
                backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
            }
            return (
                <div className='cores'>
                    <div className='RGBs'>
                        <span>R:{this.state.red} </span>
                        <span>G:{this.state.green} </span>
                        <span>B:{this.state.blue}</span>
                    </div>
                    
                    <div className="cor" style={style}></div>
                    <div className='inputs'>
                        <span></span><input onChange={this.handleChange} type="range" min="0" max="255" name="red" value={this.state.red}/> <br></br>
                        <span></span><input onChange={this.handleChange} type="range" min="0" max="255" name="green" value={this.state.green}/> <br></br>
                        <span></span><input onChange={this.handleChange} type="range" min="0" max="255" name="blue" value={this.state.blue}/> <br></br>
                    </div>
                </div>
            )
        }
    }




export default Cores;