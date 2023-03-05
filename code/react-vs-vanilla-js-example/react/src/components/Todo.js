import React from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal:false
        }
    }


  showModalHandler() {
        this.setState({...this.state,showModal: true});
  }

  closeModalHandler() {
        this.setState({...this.state,showModal: false});
    }

    render() {
      return (
              <div className='card'>
                  <h2>{this.props.text}</h2>
                  <div className='actions'>
                      <button className='btn' onClick={this.showModalHandler.bind(this)}>
                          Delete
                      </button>
                  </div>
                  {this.state.showModal && <Backdrop onClick={this.closeModalHandler.bind(this)} />}
                  {this.state.showModal && <Modal text='Are you sure?' onClose={this.closeModalHandler.bind(this)} />}
              </div>
              );
    }

}