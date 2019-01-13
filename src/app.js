import { http } from './http';

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
	http.get('http://localhost:3000/post')
		.then(data => console.log(data))
		.catch(err => console.log(err))
}