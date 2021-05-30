import React, { Component } from 'react'
import axios from 'axios'

import ButtomBox from './ButtonBox'

export class Filters extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             nationality: [],
             genre: [],

        }

        console.log(this.props.filterColor + " ..-.-.-.-.-.-");
        

    }
    componentDidMount = () => {
        axios.get('http://localhost:8080/bookcard/nationality')
        .then(response => {

            if(response.data.length > 0) {
                this.setState({
                    nationality: response.data.map(nation => nation.nationality)
                },() => {
                    console.log(this.state.nationality);
                    
                })
            }
        })
        //-------------------------------------------------------
        axios.get('http://localhost:8080/bookcard/genre')
        .then(response => {

            if(response.data.length > 0) {
                this.setState({
                    genre: response.data.map(genre => genre.genre)
                },() => {
                    console.log(this.state.genre);
                    
                })
            }
        })
    }

    // Filter Button methods ---------

    

    render(){
        
        return (
            <div className='filter_container' >
                <form onSubmit={this.props.filter}>
                    <div className='row'>
                        <div className='col-5'>
                            <label id='author'>Book Author: </label>
                        </div>
                        <div className='col-7'>
                            <input type='text' onChange={this.props.author} placeholder='All' className='form-control'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-5'>
                            <label id='authorNat'>Author Nationality: </label>
                        </div>
                        <div className='col-7'>
                            <select onChange={this.props.authorNationa} className='form-control'>
                                {
                                    this.state.nationality.map(nationality => {
                                        return(
                                            <option
                                                key={nationality}
                                                value={nationality}>{nationality}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-5'>
                            <label id='mainNat'>Main Character Nationality: </label>
                        </div>
                        <div className='col-7'>
                            <select onChange={this.props.mainCharacterNation} className='form-control'>
                                {
                                    this.state.nationality.map(nationality => {
                                        return(
                                            <option
                                                key={nationality}
                                                value={nationality}>{nationality}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    

                
                    <hr></hr>
                    {/* 
                    <ButtomBox  happyy = {this.props.happy}
                                sadd = {this.props.sad}
                                filterColorr = {this.props.filterColor}/> 
                    */}
                    <div className='row'>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <p>happy:</p>
                                <img className='fiterButtons' onClick={this.props.happy} src={this.props.filterColor[0]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[0]} circle`} onClick={this.props.happy}></button> */}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <p>sad:</p>
                                <img className='fiterButtons' onClick={this.props.sad} src={this.props.filterColor[1]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[1]} circle`} onClick={this.props.sad}></button> */}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <p>happy/ sad:</p>
                                <img className='fiterButtons' onClick={this.props.hs} src={this.props.filterColor[2]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[2]} circle`} onClick={this.props.hs}></button> */}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                        <div className='check_filters'>
                                <p>serious:</p>
                                <img className='fiterButtons' onClick={this.props.serious} src={this.props.filterColor[3]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[3]} circle`} onClick={this.props.serious}></button> */}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <p>funny</p>
                                <img className='fiterButtons' onClick={this.props.funny} src={this.props.filterColor[4]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[4]} circle`} onClick={this.props.funny}></button> */}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <p>serious/ funny</p>
                                <img className='fiterButtons' onClick={this.props.sf} src={this.props.filterColor[5]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[5]} circle`} onClick={this.props.sf}></button> */}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                        <div className='check_filters'>
                                <p>expected</p>
                                <img className='fiterButtons' onClick={this.props.expected} src={this.props.filterColor[6]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[6]} circle`} onClick={this.props.expected}></button> */}
                        </div>
                        </div>
                        <div className='col-4'>
                            <div className='check_filters' style={{visibility: 'hidden'}}>
                                <label id='sad'>sad: </label>
                                <input type='checkbox'/>
                                {/* <button className='btn btn-danger filter_btn'>happy</button> */}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <p>unexpected</p>
                                <img className='fiterButtons' onClick={this.props.unexpected} src={this.props.filterColor[7]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[7]} circle`} onClick={this.props.unexpected}></button> */}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                        <div className='check_filters'>
                                <p>gentle</p>
                                <img className='fiterButtons' onClick={this.props.gentle} src={this.props.filterColor[8]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[8]} circle`} onClick={this.props.gentle}></button> */}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <p>violent</p>
                                <img className='fiterButtons' onClick={this.props.violent} src={this.props.filterColor[9]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[9]} circle`} onClick={this.props.violent}></button> */}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <p>gentle/ violent</p>
                                <img className='fiterButtons' onClick={this.props.gv} src={this.props.filterColor[10]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[10]} circle`} onClick={this.props.gv}></button> */}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                        <div className='check_filters'>
                                <p>ordinary</p>
                                <img className='fiterButtons' onClick={this.props.ordinary} src={this.props.filterColor[11]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[11]} circle`} onClick={this.props.ordinary}></button> */}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <p>weird</p>
                                <img className='fiterButtons' onClick={this.props.unusual} src={this.props.filterColor[12]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[12]} circle`} onClick={this.props.unusual}></button> */}
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <p>ayes opening</p>
                                <img className='fiterButtons' onClick={this.props.ayes} src={this.props.filterColor[13]} alt='slika'/>
                                {/* <button className={`${this.props.filterColor[13]} circle`} onClick={this.props.ayes}></button> */}
                            </div>
                        </div> 
                    </div>
                    <button className='btn btn-success saveBtn'><img src="https://img.icons8.com/cotton/32/000000/search--v1.png"/>Search... </button>
                </form>
            </div>
        )
    }

}

export default Filters