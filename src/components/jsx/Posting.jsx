import Post from './Post';
import Anakin from './../img/Anakin.jpg';
import postImage from './../img/image_post.jpg';

const ANAKIN_IMAGE = Anakin;
const RAY_IMAGE = postImage;

function Posting() {
	return (
		<div className="App">
			<div className="container"></div>
			<Post
				author={{
					name: 'Anakin Skywalker',
					avatar: ANAKIN_IMAGE,
					nickname: '@dart_vader',
					date: 'Jul 31',
					text: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
					photo: RAY_IMAGE,
				}}
				amountComment="350"
				amountRetweet="124"
				amountLike="2350"
			/>
		</div>
	);
}

export default Posting;
