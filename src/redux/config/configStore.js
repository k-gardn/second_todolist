//"중앙 state관리소"인 store를 만드는 설정코드들이 있는 파일.
//모듈과 스토어를 연결하는 곳!!

import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";//추가한 부분.

const rootReducer = combineReducers({
  todos, //새롭게 추가한 부분.
});
const store = createStore(rootReducer);

export default store;

//연결완료!