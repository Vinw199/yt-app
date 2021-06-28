import axios from 'axios';
const KEY = "AIzaSyDN-C1g-Top4qR4-nh6DtfqaJhUoE_VT04";

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxrRsults: 5,
		key: KEY
	}
});
