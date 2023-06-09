import React, { Component } from "react";
import "./cronometro.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Milisegundos: 0,
      Segundos: 0,
      Ninutos: 0,
      Horas: 0,
      btnPlayPause: "Começar"
    };

    this.counter = null;
    this.initTimer = this.initTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  initTimer() {
    if (this.counter) {
      this.pauseTimer();
      this.setState({ btnPlayPause: "Começar" });
    }
    else {
      this.counter = setInterval(() => {
        this.setState({ 
          Milisegundos: this.state.Milisegundos + 1,
          Segundos: this.state.Segundos,
          Ninutos: this.state.Ninutos,
          Horas: this.state.Horas
        });
        if(this.state.Milisegundos === 100){
          this.setState({ 
            Milisegundos: 0,
            Segundos: this.state.Segundos + 1,
            Ninutos: this.state.Ninutos,
            Horas: this.state.Horas
          });
        }
        if(this.state.Segundos === 60){
          this.setState({ 
            Milisegundos: 0,
            Segundos: 0,
            Ninutos: this.state.Ninutos + 1,
            Horas: this.state.Horas
          });
        }
        if(this.state.Ninutos === 60){
          this.setState({ 
            Milisegundos: 0,
            Segundos: 0,
            Ninutos: 0,
            Horas: this.state.Horas + 1
          });
        }
      }, 10);
      this.setState({ btnPlayPause: "Pausar" });
    }
  }

  pauseTimer() {
    clearInterval(this.counter);
    this.counter = null;
  }

  clearTimer() {
    this.setState({ 
      Milisegundos: 0,
      Segundos: 0,
      Ninutos: 0,
      Horas: 0
    });
    clearInterval(this.counter);
    this.counter = null;
    this.setState({ btnPlayPause: "Começar" });
  }

  render() {
    return (
      <div className="timer">
        <div className="time">
          <div >Cronômetro</div>
          <h3 id = "ColorNumber">{this.state.Horas<10?"0" +this.state.Horas:this.state.Horas }:
          {this.state.Ninutos<10?"0"+this.state.Ninutos:this.state.Ninutos}:{this.state.Segundos<10?"0"+this.state.Segundos:this.state.Segundos}:
          {this.state.Milisegundos<10?"0"+this.state.Milisegundos:this.state.Milisegundos}</h3>
        </div>
        <div className="btns">
          <input type="button" value={this.state.btnPlayPause} onClick={this.initTimer}/>
          <input type="button" value="Zerar" onClick={this.clearTimer} />
        </div>
      </div>
    );
  }
}

export default Timer;