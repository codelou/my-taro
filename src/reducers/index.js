import { combineReducers } from 'redux'
import counter from './counter'
import cate from './cate'
import cart from './cart'
import home from './home'
import item from './item'
import user from './user'

export default combineReducers({
  counter,
  home,
  cate,
  cart,
  item,
  user
})
