import React, { Component } from 'react';
import ReactDOM from "react-dom";

export class ModalPortal extends Component {
    el = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.el);

        if (!this.props.className) {
            return;
        }

        this.el.classList.add(this.props.className);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render () {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}
