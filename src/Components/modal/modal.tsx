import { Button, Modal } from 'antd';
import React, { Component } from 'react';
import { ModalProps } from './modal-props';

class ModalComponent extends Component<ModalProps> {

    state = { visible: false };

    toggleModal = (visible: boolean) => {
        this.setState({ visible })
    }

    handleOk = () => {
        if (this.props.handleOk) this.props.handleOk();
    }

    handleCancel = () => {
        this.toggleModal(false);
        if (this.props.handleCancel) this.props.handleCancel();
    }

    render = () => {
        return (
            <div>
                {!this.props.hideButton && <Button type="primary" onClick={() => { this.toggleModal(true) }}> Abrir </Button>}

                <Modal
                    title={this.props.title}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={this.props.customFooter || []}
                >
                    {this.props.children}
                </Modal>
            </div>
        );
    }
}

export default ModalComponent;
