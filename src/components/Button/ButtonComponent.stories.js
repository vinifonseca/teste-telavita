import React from 'react';
import { action } from '@storybook/addon-actions';

import ButtonComponent from './ButtonComponent';

export default {
  component: ButtonComponent,
  title: 'ButtonComponent',
  excludeStories: /.*Data$/,
};

export const buttonData = {   
    text: 'Button Component Test'
};

export const actionsData = {
    handleClick: action('handleClick'),
};

export const Default = () => <ButtonComponent handleClick={actionsData.handleClick} text={buttonData.text} />;

export const Disabled = () => <ButtonComponent handleClick={actionsData.handleClick} text={buttonData.text} disabled={true} />;
