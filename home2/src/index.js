import $ from 'jquery';

import Container from './container';
import Card from './card';

const getData = () => {
    return new Promise((resolve) => {
        $.get('http://localhost:8000/api', (data) => {
            resolve(data);
        })
    });
};

const body = document.getElementById('body');
const card = new Card();
const container = new Container(card.render());
body.innerHTML = container.render();


getData().then((data) => {
    const {fullName, occupation} = data;
    document.getElementById('fullName').innerText = fullName;
    document.getElementById('occupation').innerText = occupation;

});
