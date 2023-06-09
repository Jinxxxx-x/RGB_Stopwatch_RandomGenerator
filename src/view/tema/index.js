import React from 'react';
import './tema.css';
const numberF = 10;
var filmesP;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

class Filmes extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nome: ['Diga "olá" ao gatinho!','Sasageyo! (gatinho avisando para você assistir Attack on Titan)','Raro gato-sapo, cumprimente-o','Eu acho que você deveria enviar essa para alguém, hein',
                    'Ouça "Serenata Existencialista", de O grilo :)','Meme aleatório, surte com ele','Gatinho Hanako',
                    'Eu acho que você deveria enviar essa para alguém, hein','Ele se encantou por você, ownt','Gato tímido'],
            i: null,
            img: ['       https://i.pinimg.com/originals/bd/db/fa/bddbfa9adc637febf5aa619bc252cf16.jpg',
            'https://i.pinimg.com/236x/51/70/c2/5170c21fc320d8776a2a832d6059c0e6.jpg',
            'https://i.pinimg.com/originals/2b/62/9e/2b629eda2266f3abba9c90c4bf7c0de4.jpg',
            'https://i.pinimg.com/564x/aa/99/79/aa99791f4b3ac247e05fb2d11fa4498d.jpg',
            'https://i.pinimg.com/originals/4c/d3/5b/4cd35b2a526c8aadfd3a663215f96cfc.jpg',
            'https://img.wattpad.com/e601827baf4efc554c41e690716d9db2374fd95f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a755574464c4739344f6b4577413d3d2d3732333635323839312e313539383434393838303135326532363733373237353337323638352e6a7067?s=fit&w=720&h=720',
            'https://i.pinimg.com/236x/78/a8/64/78a8644d4156836375b3c4d8dbdc6c33.jpg',
            'https://i.pinimg.com/originals/19/dd/6d/19dd6dd6ce9540c66988eacf291e3bb9.jpg',
            'https://64.media.tumblr.com/de6018bdf9f8b6fe7ab54a7455ef5c9c/tumblr_pfqus6ZPcf1wer2glo2_250.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdegielork23RBE21-TWes6YIyV-3_tn9bA&usqp=CAU']
}
    }

    sorteio = () => {
        var n = getRandomInt(0,numberF);
        do{
            n = getRandomInt(0,numberF);
        }while(n===filmesP);

        filmesP = n;

        this.setState({
            i: n
        })
    }

    render(){
        return (
            <div className='games'>
                <p className='textRecomend'>HeartMemes para melhorar seu dia :)
                <br></br><button onClick={this.sorteio} className='buttongame'>Clique aqui</button></p>
                <div className='filmeSort'>
                    <img src={this.state.img[this.state.i]} alt='' className='game' ></img>
                    <h3 className='gametitle'>{this.state.nome[this.state.i]}</h3>
                
                </div>
            </div>
        );
    }
}

export default Filmes;