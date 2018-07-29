import React, {Component} from 'react';

const containerStyle = {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
};

const elStyle = {
    color: '#0d47a1',
    fontSize: '22px',
    textDecoration: 'none',
    cursor: 'pointer',
    margin: '10px auto',
};

const textStyle = {
    color: '#2e2e2e',
    fontSize: '24px',
};

class Articles extends Component {
    state = {
        selectedArticle: 1,
    };

    findArticle = (id) => {
        const arr = this.props.articlesArray.filter(item => item.id === id);
        return arr[0];
    };


    changeArticle = (event) => {
        this.setState({
            selectedArticle: parseInt(event.target.id),
        });
    };

    renderArticles = (items) => items.map(item => (
        <h5 onClick={this.changeArticle} style={elStyle} key={item.id} id={item.id}>{item.header}</h5>
    ));

    render() {
        const article = this.findArticle(this.state.selectedArticle);
        return(
            <section id='articles'>
                <div className="container" style={containerStyle}>
                    {this.renderArticles(this.props.articlesArray)}
                </div>
                <div className="container">
                    <h3>{article.author}</h3>
                    <h1>{article.header}</h1>
                    <h5>{article.date}</h5>
                    <p style={textStyle}>{article.text}</p>
                </div>
            </section>
        )
    }
}

export default Articles;
