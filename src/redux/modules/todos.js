// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
// const GET_TODO_BY_ID = "GET_TODO_BY_ID";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload }; /*payload
                                        {id: todos.length + 1,
                                        title: title,
                                        content: content,
                                        isDone: false},*/
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload }; //payload는 todo.id이다.
};

export const toggleTodo = (payload) => {
  return { type: TOGGLE_STATUS_TODO, payload };
};

// export const gettodobyid = (payload) => {
//   return { type: GET_TODO_BY_ID, payload };
// };


// initial State
const initialState = {
  todos: [              //todos는 배열의 형태. 각각의 todo를 id,title를 가진 객체의 형태로 저장. 
    {
      id: 1,
      title: "react를 배워봅시다.",
      content: "할 수 있다!!!",
      isDone: false,
    },
    {
      id: 2,
      title: "redux를 배워봅시다.",
      content: "I can do",
      isDone: true,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,   //추후 관리하는 state가 여러개라면 변경하지 않는 나머지 상태들을 가져올 때 필요할것이다.(??)
        todos: [...state.todos, action.payload], // 기존 배열을 살리고, 추가해준다.
      };

    case DELETE_TODO:
        return {
        ...state,
        todos : state.todos.filter((todo) => todo.id !== action.payload), //와...왜 됐다 안됐다해서ㅜㅜ 오류고치기 힘들게 ㅠㅠ
      };
  
    case TOGGLE_STATUS_TODO:
      return {
      ...state,
      todos : [...state.todos, state.todos.map((todo) => {
        if(todo.id === action.payload){
          todo.isDone = !todo.isDone
        }
        else{
          return null
        }
      })
    ],
      };
    
    // case GET_TODO_BY_ID:
    //   return {

    //   }
    default:
      return state;
  }
};

export default todos;