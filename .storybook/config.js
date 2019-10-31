import React from 'react';
import { addParameters } from '@storybook/react';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { loadFontsForStorybook } from '../src/utils/index';
import 'storybook-chromatic';
import nbtheme from './nbtheme';

import { GlobalStyle } from '../src/components/shared/global';

addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));



// edit netbrain theme
addParameters({
  options: {
    theme: nbtheme,
  },
});

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src/components', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
    require.context('../src', true, /\.stories\.mdx$/),
  ],
  module
);

loadFontsForStorybook();
