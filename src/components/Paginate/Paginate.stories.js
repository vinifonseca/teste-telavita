import React from 'react';
import { action } from '@storybook/addon-actions';

import Paginate from './Paginate';

export default {
  component: Paginate,
  title: 'Paginate',
  excludeStories: /.*Data$/,
};

export const actionsData = {
    handlePagination: action('handlePagination'),
};

export const Default = () => <Paginate handlePagination={actionsData.handlePagination} links={{
    first: 'firstURL',
    prev: 'prevURL',
    next: 'nextURL',
    last: 'lastURL'
}} />;

export const NoPrev = () => <Paginate handlePagination={actionsData.handlePagination} links={{
    first: 'firstURL',
    next: 'nextURL',
    last: 'lastURL'
}} />;

export const NoNext = () => <Paginate handlePagination={actionsData.handlePagination} links={{
    first: 'firstURL',
    prev: 'prevURL',
    last: 'lastURL'
}} />;

