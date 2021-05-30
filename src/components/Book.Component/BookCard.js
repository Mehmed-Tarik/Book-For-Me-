import React, {Component} from 'react'

import Modal from 'react-modal'

import './Book.style.css'

class BookCard extends Component {
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
            <div className='col-md-4 matchedMessage'>
                {/* <div className='book-card'>
                    <img  src={props.image} alt='' />
                    <div className='desc'>
                        <h4>{props.title}</h4>
                        <h5>Author: {props.author}</h5>
                        <p>Publish Date: {props.published === '0000' ? 'Not available' : props.published}</p>
                        <a href={props.pdf}> Read </a>
                        <p>{props.matchedMessage}</p>
    
                    </div>
                </div> */}
                
                {
                    this.props.matchedMessage ? <h6><img src="https://img.icons8.com/color/24/000000/christmas-star.png" alt='slika'/>{this.props.matchedMessage}</h6> : <h6><img src="https://img.icons8.com/color/24/000000/christmas-star.png" alt='slika'/>Not matched!</h6> 
                }
                    <div className='card'>
                        <div className='imageBox'>
                            <img src={this.props.image} alt='picture image' />
                        </div>
                        <div className='textBox'>
                            <h5 className='cardTitle'>{this.props.title}</h5>
                            <p><span style={{color: 'red'}}>By:</span> {this.props.author}</p>
                            <p className='minusMargin' style={{color: 'red'}}>Short summary:</p>
                            <p className='minusMargin'>{this.props.summary} --- {this.props.summary.length}</p>
                            <div className='row icons-card'>
                                <div className='col-4'>
                                    <p>Summary</p>
                                    <a><img onClick={this.onOpenModal} className='icons-card iq' src="https://img.icons8.com/material-two-tone/50/000000/summary-list--v1.png" alt='slika' /></a>
                                    <Modal className='myFirstModal' isOpen={this.state.login} onRequestClose={this.overlayer}>
                                        <h2>{this.props.title}</h2>
                                        <button className='btn btn-outline-danger' onClick={this.closeModal}>X</button>
                                        <hr />
                                        <p>{this.props.summary}</p>
                                        <hr />
                                        <div className='adStyling'>
                                            AD AD AD AD AD 
                                        </div>
                                    </Modal>
                                </div>
                                <div className='col-4'>
                                    <p>Read Book</p>
                                    <img className='icons-card iq' src="https://img.icons8.com/plasticine/50/000000/literature.png" alt='slika'/>
                                </div>
                                <div className='col-4'>
                                    <p>Download</p>
                                    <img className='icons-card iq' src="https://img.icons8.com/clouds/50/000000/download.png" alt='slika'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default BookCard