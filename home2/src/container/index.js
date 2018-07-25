import 'bootstrap/dist/css/bootstrap.min.css';

class Container {
    constructor(htmlContent = '') {
        this.htmlContent = htmlContent;
    }

    render() {
        return `<div class="container">${this.htmlContent}</div>`;
    }
}

export default Container;
