import React from 'react';
import { Header } from 'components/header/'
import { Drawers } from 'components/drawer/'
import { Tabbars } from 'components/tabbar/'
import { Provider } from 'react-redux'
import store from './store/'
import { AppWrap } from './Appstyled'

function App() {

  return (
    <AppWrap>
      <Provider store={store}>
        <Header></Header>
        <Drawers></Drawers>
      </Provider>
      <Tabbars></Tabbars>
    </AppWrap >
  );
}

export default App;
