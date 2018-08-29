import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import store from './store';
import 'antd/dist/antd.css';

function App() {
  return (
    // Provider 相当于一个提供器，用来连接store，在Provider 组件下面的所有组件都可以获取store的数据
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
