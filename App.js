import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store'
import Navigator from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
};

export default App;
