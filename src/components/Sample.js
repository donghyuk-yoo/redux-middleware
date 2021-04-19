import React from "react";

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && "로딩 중..."}
        {/* 요청 성공 */}
        {!loadingPose && post && (
          <div>
            {/* API를 통해 전달받은 post 데이터 중 title과 body만 보여 줌 */}
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>유저</h1>
        {loadingUsers && "로딩 중..."}
        {!loadingUsers && user && (
          <ul>
            {users.map((user) => (
              // map 함수 key값 필요
              <li key={user.id}>
                {users.username} ({users.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
