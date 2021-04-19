import { createAction, handleActions } from "redux-actions";

// 액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
// 1. 기본
export const increase = () => ({
  type: INCREASE,
});

// 2. createAction
export const decrease = createAction(DECREASE);

//Thunk 생성 함수, 일반 액션 객체가 아닌 함수 반환
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

// 초기 상태
const initialState = 0;

// 리듀서
// 1. 기본
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return (state = state + 1);
    case DECREASE:
      return (state = state - 1);
    default:
      return state;
  }
};

// handleActions
// const counter = handleActions(
//   {
//     [INCREASE]: (state) => state + 1,
//     [DECREASE]: (state) => state - 1,
//   },
//   initialState
// );

export default counter;
