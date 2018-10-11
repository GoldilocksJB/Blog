import React, {Component} from 'react';
import ArticleList from './ArticleList/index.js';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.min.css';

class Blog extends Component {
    state = {
        reverted: false
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        <strong>Серебряный век</strong>
                    </h1>
                </div>
                <ArticleList articles ={ articles }/>
            </div>
        )
    }

}
export default Blog ;