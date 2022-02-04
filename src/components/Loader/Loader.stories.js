import React from 'react';

import Loader from './Loader';

export default {
  component: Loader,
  title: 'Loader',
  excludeStories: /.*Data$/,
};

export const Default = () => <Loader />;
