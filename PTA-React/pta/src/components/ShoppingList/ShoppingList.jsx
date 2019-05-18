import React, { Component } from 'react';
import Product from '../Product/Product';

class ShoppingList extends Component {
    state = { 
        items:
        [
            {
                name: 'Arroz',
                price: 3.22,
                code: 48902,
                img: 'https://static.carrefour.com.br/medias/sys_master/images/images/h27/had/h00/h00/9359499657246.jpg',
            },
            {
                name: 'Feijão',
                price: 5.12,
                code: 48903,
                img: 'https://www.paodeacucar.com/img/uploads/1/66/574066.jpg?type=product',
            },
            {
                name: 'Batata',
                price: 3.12,
                code: 48904,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1DwSC7kSKu1Y75lH6Gas_wwWZJkf89M4a1haW-6sOIXM_GcO',
            },
            {
                name: 'Desodorante',
                price: 6.49,
                code: 48905,
                img: 'https://ikesaki.vteximg.com.br/arquivos/ids/199417-1000-1000/Desodorante-Monange-Aerosol-Frutas-Vermelhas-90g-25049.09.jpg?v=636427208313400000',
            }
        ]
     }
    render() { 
        return ( 
            <section>
                <h1>Shopping</h1>
                {this.state.items.map(item => <Product name={ item.name } price={ item.price } key={ item.code } image={ item.img }/>)}
            </section>
         );
    }
}
 
export default ShoppingList;