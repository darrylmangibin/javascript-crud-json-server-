import { http } from './http';
import { ui } from './UI';

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
	http.get('http://localhost:3000/post')
		.then((data) => {
			ui.showPosts(data)
		})
		.catch(err => console.log(err))
}