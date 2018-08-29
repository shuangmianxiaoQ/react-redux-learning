import React from 'react';
import { connect } from 'react-redux';
import { List, Icon } from 'antd';
import { getDeleteItemAction } from './store/actionCreators';

const TodoItem = ({ list, handleItemDelete }) => (
  <List
    bordered
    dataSource={list}
    renderItem={(item, index) => (
      <List.Item
        actions={[
          <Icon type="close" onClick={() => handleItemDelete(index)} />
        ]}
      >
        {item}
      </List.Item>
    )}
    style={{ width: '30%', marginTop: 16 }}
  />
);

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
