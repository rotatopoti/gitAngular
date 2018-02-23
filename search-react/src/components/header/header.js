import React from 'react';
import './header.css';
import octocat from '../../assets/images/octocat.png';

const Header = ()=> {

        return (
            <div >
                <section id="cover">
                    <div id="cover-caption">
                        <div id="container" className="container">
                            <div className="row">
                                <div className="col-sm-10 offset-sm-1 text-center">
                                    <h1>
                                        Welcome to Github Search!
                                    </h1>
                                    <img width="200" alt="Github Octocat" src={octocat} />
                                        <h3>Enter search terms in the box below: </h3>


                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
};


export default Header;