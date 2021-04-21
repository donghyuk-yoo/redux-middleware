import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;
const SampleContainer = ({ getPost, getUsers, post, users, loadingPost, loadingUsers }) => {
  // 클래스 형태 컴포넌트 였다면 componentDidMount
  // 컴포넌트 마운트된 후 실행 useEffect
  useEffect(() => {
    getPost(1);
    getUsers(1);
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
