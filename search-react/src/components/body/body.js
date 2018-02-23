import React, { Component }  from 'react';
import './body.css';
import axios from 'axios';

class Body extends Component {
    constructor(props){
        super(props)

        this.state = {
            value: '',
            gits : []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value })
    }

    handleSubmit(event) {
        let query;
        if(this.state.value === '') {
            query = 'angular';
        }else{
            query = this.state.value;
        }
        axios.get('https://api.github.com/search/repositories', {params:{q : query}})
            .then(res =>{
                const gits = res.data.items;
                this.setState({gits});
            })
        event.preventDefault();
    }

    render() {
        let results = this.state.gits.map((git, index)=>{
            return(
                <div key={index} className="card-block card-header">
                    {git.full_name}
                </div>
            )
        });


        return (
            <div>
                <div className="info-form">
                    <form onSubmit={this.handleSubmit} className="form-inline justify-content-center">
                        <div className="form-group">
                            <label className="sr-only">git</label>
                            <input name = "search"
                                   value = { this.state.value }
                                   onChange = { this.handleChange }
                                   className="form-control"
                                    placeholder="search term e.g angular"/>
                        </div>
                        <button type="submit"
                                value="Search Github!"
                                className="btn btn-success">Search Github!
                        </button>
                    </form>
                    <div></div>
                </div>
                <div className="text-center">
                    <div>
                        {results}
                    </div>
                </div>
            </div>

        );
    }
}

export default Body;
