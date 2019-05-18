import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    state = { 
        count: 0,
        items: [
            'arroz',
            'feijao',
            'batata',
            'desodorante',
            'leite'
        ]
     }

     constructor()
     {
         super();
         this.handleIncrement = this.handleIncrement.bind(this);
     }
     handleIncrement()
     {
        this.setState({ count: this.state.count + 1})
     }

    render() { 
        return ( 
            <div>
                <h1 className = "titulo-home">{ this.state.count }</h1>
                <input onClick = { this.handleIncrement } type = "submit" value = "Increment"/>
                {
                    this.state.items.length >= 5
                    && 
                    <ul>
                        { this.state.items.map(item => <li key = { item }>{ item }</li>) }
                    </ul>
                }
            </div>
            
         );
    }
    showCount()
    {
        return this.state.count ? this.state.count : 'Zero';
    }
}
 
export default Home;