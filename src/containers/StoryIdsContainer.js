import React, {useState, useEffect} from 'react';
import {getStoryIds} from '../services/storiesApi';
import {Story} from '../components/Story';

export const StoryIdsContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data));
    }, [])
  
    return storyIds.map(storyId => <Story key={storyId} storyId={storyId}/>);
  };