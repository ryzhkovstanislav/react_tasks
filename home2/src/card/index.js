import 'bootstrap/dist/css/bootstrap.min.css';
import '../card/index.css';
import pic from '../card/stas.jpg';

class Card {
    constructor(htmlContent = '') {
        this.htmlContent = `
            <img src="${pic}" class="d-block my-img" alt="pic">
            <div class="">
                <h4 id="fullName" class="text-white">RS</h5>
                <h5 id="occupation" class="text-white">FSD</h6>
            </div>
        `;
    }

    render() {
        return `
            <div class="mx-auto my-4 card d-flex flex-row justify-content-around align-items-center">
                ${this.htmlContent}
            </div>
        `;
    }
}

export default Card;
