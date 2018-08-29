import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import TodoItem from './TodoItem';
import { getInputChangeAction, getAddItemAction } from './store/actionCreators';

const TododList = ({ inputValue, handleBtnClick, onInputChange }) => (
  <div style={{ margin: 16 }}>
    <Input
      value={inputValue}
      placeholder="Todo Info"
      style={{ width: '20%', marginRight: 16 }}
      onChange={onInputChange}
    />
    <Button type="primary" onClick={handleBtnClick}>
      提交
    </Button>
    <TodoItem />
  </div>
);

// 将store中的数据映射到该组件，变为该组件的props属性
const mapStateToProps = state => ({
  inputValue: state.inputValue,
  list: state.list
});

// 将store的dispatch方法挂载到组件的props上
const mapDispatchToProps = dispatch => ({
  onInputChange(e) {
    const value = e.target.value;
    const action = getInputChangeAction(value);
    dispatch(action);
  },
  handleBtnClick() {
    const action = getAddItemAction();
    dispatch(action);
  }
});

// 通过connect方法将组件和store做连接
// connect方法执行返回的是一个容器组件，TodoList是一个UI组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TododList);
