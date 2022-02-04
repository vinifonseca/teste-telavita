import React from 'react';

import PostCard from './PostCard';


export default {
  component: PostCard,
  title: 'PostCard',
  excludeStories: /.*Data$/,
};

export const postData = {
    id: '1',
    attributes: {
        posterImage:{
            large: 'https://media.kitsu.io/anime/poster_images/1/large.jpg'
        },
        canonicalTitle: 'Test Post',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        abbreviatedTitles: [
            'abbreviatedTitles1',
            'abbreviatedTitles2',
            'abbreviatedTitles3'
        ]
    }    
};

export const Default = () => <PostCard post={postData} />;