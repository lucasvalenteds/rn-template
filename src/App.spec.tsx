import React from 'react';
import Native from 'react-native';
import ReactRenderer, {
  ReactTestRenderer,
  ReactTestInstance,
} from 'react-test-renderer';

import { App } from './App';

test('It renders the text', () => {
  const renderer: ReactTestRenderer = ReactRenderer.create(<App />);

  const node: ReactTestInstance = renderer.root.findByType(Native.ScrollView);

  expect(node).toBeDefined();
});
