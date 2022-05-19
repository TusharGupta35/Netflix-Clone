import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import NavbarComponent from './NavbarComponent';
import { FaPlay, FaVolumeUp } from 'react-icons/fa';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <div className='trailerContainer'>
                    <div className='posterIntro'>
                        <Row>
                            <Col md="10">
                                <p className='introType my-5'><img width='40vw' className='mx-2' src=".\Resources\Imgs\netflix sm.png" alt="" /><p>SERIES</p></p>
                                <img width='350vw' className='d-block' src="\Resources\Imgs\friends logo.png" alt="" />
                                <p className='intro'>The six friends prepare to part ways and set out on the next chapters of their lives, with momentous events and surprises in store.</p>
                                <button className='introPlay'><FaPlay /> <span className='px-2'>Play</span></button>
                                <button className='introMoreInfo'><img src="\Resources\Imgs\info.png" className='mx-2' width='30vw' alt="" /> <span className='mx-2'>More Info</span></button>
                            </Col>
                            <Col md="2" className='muteMaturity'>
                                <section className='d-flex'>
                                    <button className='posterMuteBtn'>
                                        <FaVolumeUp color='white' className='volUpBtn' />
                                    </button>
                                    <p className='posterRating mx-4'>U/A 13+</p>
                                </section>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent;
