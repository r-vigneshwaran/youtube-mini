import axios from 'axios';

const YOUTUBE_API_KEY = "AIzaSyBE-oQCWJ8nDKxmZjrc8LVwsnLMcGCqEV8";
const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search';
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD8FVYsAVpciKLBCgAJkO0h2hoJke9VXF4&type=video&maxResults=5&q=trump
export const fetchData = async (query) => {
    const { data } = await axios.get(`${YOUTUBE_API}?part=snippet&key=${YOUTUBE_API_KEY}&maxResults=5&type=video&q=${query}`);
    // console.log(YOUTUBE_API_KEY)
    return data
}

export default fetchData 