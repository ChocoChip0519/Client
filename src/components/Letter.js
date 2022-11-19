import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//css
import styles from "../css/Letter.module.css";

const Letter = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookies"]);
  const navigate = useNavigate();
  const [userName, setUsername] = useState("test"); //토큰으로 유저 정보 갖고오기

  const authCheck = () => {
    //페이지에 들어올 때 쿠키로 사용자 체크
    const token = cookies;
    //console.log("받은", token);
    //console.log("user", token.cookies.user.username);

    setUsername(token.cookies.user.username);
  };

  useEffect(() => {
    authCheck();
  });

  return (
    <div id={styles.home}>
      <h1 id={styles.usertitle}>
        {userName}의 2022 <br />
        Self Advent Calender
      </h1>
      <div id={styles.letterform}>
        <p className={styles.formelement}>
          <label htmlFor="nickname">작성자</label>
          <h1 type="text" name="nickname">000님</h1>
        </p>
        <p className={styles.formelement}>
          <label htmlFor="nickname">
            받은 메세지
          </label>
          {/* <div id={styles.content} >편지 내용~~~~~~~</div> */}
          <h2>
              하잉<br></br><br></br>크리스마스 잘보내!!
          </h2>
        </p>
        <Link to="/calender">
        <button type="button" className={styles.LinkBT} >뒤로가기</button>
        </Link>
      </div>
    </div>
  );
};

export default Letter;
