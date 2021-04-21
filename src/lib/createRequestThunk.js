// 반복되는 로직 리팩토링
import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  // 성공 실패 타입을 정의
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type }); // 시작 됨
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      }); // 성공
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }); // 에러 발생
      dispatch(startLoading(type));
      throw e;
    }
  };
}

// createRequestThunk('GET_USERS', api.getUsers)
