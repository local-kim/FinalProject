import React, { useEffect, useState } from "react";
const KakaoLogin = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const btnLogout=()=>{
    localStorage.clear();
    window.location.reload();

}
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  
  return (
    <div>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage}></img>
      <button type="button" className="btn btn-danger"
           style={{marginLeft:'50px'}} onClick={btnLogout}>로그아웃</button>
    </div>
  );
};
export default KakaoLogin;