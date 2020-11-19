// CORS

const corsOrigin = 'https://cors-anywhere.herokuapp.com/'

export const baseUrl = `${corsOrigin}https://hacker-news.firebaseio.com/v0/`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
    const response = await fetch(newStoriesUrl);
    const data = await response.json();
    return data;
}

export const getStory = async (storyId) => {
    const response = await fetch(`${storyUrl + storyId}.json`);
    const data = await response.json();
    return data;
}