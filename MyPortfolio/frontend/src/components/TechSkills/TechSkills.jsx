import React from "react";
import style from "./Tech.module.css";
function TechSkills() {
  return (
    <div className={style.conteiner}>
      <h2>Front End</h2>
      <div>
        <img
          className={style.img}
          src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
          alt="JavaScript"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white"
          alt="React"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Redux_Toolkit-764ABC?style=for-the-badge&logo=redux-toolkit&logoColor=white"
          alt="Redux Toolkit"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"
          alt="Vue.js"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          alt="CSS3"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
          alt="HTML5"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
          alt="Bootstrap"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Material_UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
          alt="Material UI"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Motion-FFA726?style=for-the-badge&logo=framer-motion&logoColor=white"
          alt="Motion"
          height="30"
        />
      </div>
      <h2>Back End</h2>
      <p style={{ textAlign: "center" }}>
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white"
          height="30"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white"
          height="30"
        />
      </p>

      <h2>Otras herramientas</h2>
      <p className={style.extra}>
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Slack-4A154B?style=flat-square&logo=Slack"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-GitLab-FCA121?style=flat-square&logo=GitLab"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=GitHub"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Canva-00C4CC?style=flat-square&logo=Canva"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=Figma"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Notion-000000?style=flat-square&logo=Notion"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Scrum-5C0099?style=flat-square&logo=Scrum"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Postman-FF6C37?style=flat-square&logo=Postman"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Thunderclient-20232A?style=flat-square&logo=Thunderclient"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Discord-5865F2?style=flat-square&logo=Discord"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Zoom-2D8CFF?style=flat-square&logo=Zoom"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-Render-1F232A?style=flat-square&logo=Render"
        />
        <img
          className={style.img}
          src="https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=Amazon-AWS"
        />
      </p>
      <div>
        <h2>Soft Skills</h2>
        <ul className={style.soft}>
          <li>Companionship 🤝</li>
          <li>Empathy 🤗</li>
          <li>Leadership 🧑‍💼</li>
          <li>Proactivity 🚀</li>
          <li>Enthusiasm 🎉</li>
          <li>Research 🔍</li>
          <li>Charisma 😊</li>
          <li>Patience 🙏</li>
        </ul>

       
      </div>
    </div>
  );
}

export default TechSkills;
