import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import PriceForm from './components/features/PriceForm/PriceFormContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PriceForm />
      </div>
    </Provider>
  );
}

export default App;
