import React, {Component} from 'react'

import * as ReactBootStrap from 'react-bootstrap'
import './Navbar.style.css'

import LandingPage from '../Book.Component/LandingPage'
import Modal from 'react-modal'

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sign: false,
            login: false
        }
    }

    onOpenModal = (e) => {
        e.preventDefault()
        this.setState({login: true})
    }

    closeModal = (e) => {
        e.preventDefault()
        this.setState({login: false})
    }

    overlayer = (e) => {
        e.preventDefault()
        this.setState({login: false})
    }

    render(){
        return (
            <div className='main'>
                  <ReactBootStrap.Navbar collapseOnSelect expand="md">
                    <ReactBootStrap.Navbar.Brand className='logo'><img src="https://img.icons8.com/plasticine/50/000000/literature.png"/><span style={{color: 'white'}}>F</span>or<span style={{color: 'white'}}>M</span>e</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="m-auto">
                        <ReactBootStrap.Nav.Link><i className='Readers'>Not all readers are Leaders, but all Leaders are readers !</i></ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav className="ml-auto">
                        <ReactBootStrap.Nav.Link className='SingIn' onClick={this.onOpenModal}><img src="https://img.icons8.com/metro/50/000000/user-male-circle.png"/><p>Sing In</p></ReactBootStrap.Nav.Link>
                        <Modal className='book_wrapper' isOpen={this.state.login} onRequestClose={this.overlayer} id='style-6'>
                            <div className='book1'>
                            <img src="https://img.icons8.com/plasticine/50/000000/book-and-pencil.png"/>
                                <h2>Book Sing Up</h2>
                                <div>
                                    <label>HA HA HA HA HA</label>
                                    <input className='form-control' />
                                    <label>HA HA HA HA HA</label>
                                    <input className='form-control' />
                                    <label>HA HA HA HA HA</label>
                                    <input className='form-control' />
                                </div>
                            </div>
                            <div className='book2'>
                            <img src="https://img.icons8.com/cute-clipart/50/000000/forgot-password.png"/>
                                <h2>Book Log In</h2>
                                <p>
                                    <label>HA HA HA HA HA</label>
                                    <input className='form-control' />
                                    <label>HA HA HA HA HA</label>
                                    <input className='form-control' />
                                </p>
                            </div>
                    </Modal>
                    </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
                {/* <LandingPage /> */}
            </div>
        )
    }

}

export default Navbar
