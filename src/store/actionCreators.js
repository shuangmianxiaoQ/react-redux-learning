import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './actionTypes';

const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export { getInputChangeAction, getAddItemAction, getDeleteItemAction };
