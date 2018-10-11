
import React, { Component } from 'react';

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }  

    render() {
        const { article } = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className="card mx-auto" style = {{width: "90%"}}>
                <div className="card-header">
              
                    <h3>
                        {article.title}
                        <button onClick={this.handleClick} className="btn btn-dark float-right">
                            {this.state.isOpen ? 'свернуть' : 'читать'}
                        </button>
                    </h3>
            </div>
                <div className="card-body">
                    {body}
                    <br></br>
                    <h6 className="card-subtitle text-muted">
                        {article.author}
                                                 
                    </h6>
                </div>
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article;