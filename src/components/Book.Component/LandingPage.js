import React, { Component } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export class LandingPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div className='landing'>
                <div style={{width: '100%'}}> {/* width in percetages is crucial for mobile view !!!*/}
                        <Slider
                            speed={500} // how it will cchanges in milliseconds !
                            slidesToShow={4} // how many items will be schowen per view !
                            slidesToScroll={4} // how many scroles at the time !
                            infinite={true} // when goes to last one it showes first again and again !
                            dots={true}
                        >
                            <button className='genre_slider'  onClick={this.props.history}> <img src={this.props.historyIcon} alt='slika'/>History</button>
                            <button className='genre_slider'  onClick={this.props.fantasy}> <img src={this.props.fantasyIcon} alt='slika'/>Fantasy</button>
                            <button className='genre_slider'  onClick={this.props.biography}> <img src={this.props.biographyIcon} alt='slika'/>Biography</button>
                            <button className='genre_slider'  onClick={this.props.romance}> <img src={this.props.romanceIcon} alt='slika'/>Romance</button>
                            <button className='genre_slider'  onClick={this.props.religion}> <img src={this.props.religionIcon} alt='slika'/>Religion</button>
                            <button className='genre_slider'  onClick={this.props.adventure}> <img src={this.props.adventureIcon} alt='slika'/>Adventure</button>
                            <button className='genre_slider'  onClick={this.props.genre}> <img src="https://img.icons8.com/cute-clipart/50/000000/anubis.png" alt='slika'/>History</button>
                            <button className='genre_slider'  onClick={this.props.genre}> <img src="https://img.icons8.com/cute-clipart/50/000000/anubis.png" alt='slika'/>History</button>
                            <button className='genre_slider'  onClick={this.props.genre}> <img src="https://img.icons8.com/cute-clipart/50/000000/anubis.png" alt='slika'/>History</button>
                            <button className='genre_slider'  onClick={this.props.genre}> <img src="https://img.icons8.com/cute-clipart/50/000000/anubis.png" alt='slika'/>History</button>
                        </Slider>
                </div>
                {/* <h1 className='quote'>Best Book For Me</h1> */}
            </div>
        )
    }

}

export default LandingPage


