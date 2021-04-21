import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;
const SampleContainer = ({ getPost, getUsers, post, users, loadingPost, loadingUsers }) => {
  // 클래스 형태 컴포넌트 였다면 componentDidMount
  // 컴포넌트 마운트된 후 실행 useEffect
  useEffect(() => {
    // useEffect에 파라미터로 넣는 함수는 async로 할 수 없기에 내부에서 선언 후 호출
    const fn = async () => {
      try {
        getPost(1);
        getUsers(1);
      } catch (e) {
        console.log(e); // 에러조회
      }
    };
    fn();
  }, [getPost, getUsers]);
  return <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers} />;
};

export default connect(
  (state) => ({
    post: state.sample.post,
    users: state.sample.users,
    loadingPost: state.loading["sample/GET_POST"],
    loadingUsers: state.loading["sample/GET_USERS"],
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
