import { Button } from 'antd';
import React, { Component } from 'react';
import './App.css';
import ModalComponent from './Components/modal/modal';

class App extends Component {
    state = { counter: 0 };

    modalRef: any = React.createRef();

    handleOk = () => {
        alert('Clicou!');
    }

    openModal = () => {
        this.modalRef.current.toggleModal(true);
    }

    render = () => {
        return (

            <div className="App">
                <ModalComponent ref={this.modalRef} title='Meu modal' handleOk={this.handleOk} hideButton={true}
                    customFooter={[<Button type="primary" onClick={() => { this.openModal() }}> Oiee </Button>]}>
                    <h1>Olá</h1>
                </ModalComponent>

                <Button type="primary" onClick={() => { this.openModal() }}> Abrir </Button>
            </div>
        )
    }
}

export default App;
