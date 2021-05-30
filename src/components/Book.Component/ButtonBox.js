import React from 'react'

const ButtonBox = (props) => {
    return (
        <div>

                <div className='row'>
                        <div className='col-4'>
                            <div className='check_filters'>
                                <button className={`${props.filterColorr[0]} filter_btn`} onClick={props.happyy}>happy</button>
                            </div>
                            <div className='check_filters'>
                                <button className={`${props.filterColorr[1]} filter_btn`} onClick={props.sadd}>sad</button>
                            </div>
                            <div className='check_filters'>
                                <button className={`${props.filterColorr[2]} filter_btn`}>happy/ sad</button>
                            </div>
                        </div>
                        <div className='col-4'>
                        <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>serious</button>
                            </div>
                            <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>funny</button>
                            </div>
                            <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>serious/ funny</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                        <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>expected</button>
                            </div>
                            <div className='check_filters' style={{visibility: 'hidden'}}>
                                <label id='sad'>sad: </label>
                                <input type='checkbox'/>
                                <button className='btn btn-danger filter_btn'>happy</button>
                            </div>
                            <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>unpredictable</button>
                            </div>
                        </div>
                        <div className='col-4'>
                        <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>gentle</button>
                            </div>
                            <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>violent</button>
                            </div>
                            <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>gentle/ violent</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                        <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>study</button>
                            </div>
                            <div className='check_filters' style={{visibility: 'hidden'}}>
                                <label id='sad'>sad: </label>
                                <input type='checkbox'/>
                                <button className='btn btn-danger filter_btn'>happy</button>
                            </div>
                            <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>health& Fitness</button>
                            </div>
                        </div>
                        <div className='col-4'>
                        <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>conventional</button>
                            </div>
                            <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>unusual</button>
                            </div>
                            <div className='check_filters'>
                                <button className='btn btn-danger filter_btn'>ayes opening</button>
                            </div>
                            
                        </div>
                    </div>
        </div>
    )
}

export default ButtonBox
