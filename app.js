const express = require("express");
const app = express();
const port = 3000;
const { sequelize } = require("./models");

//db 생성 부분
sequelize
  .sync({ force: false }) //db reset할 일 있으면 true 변경
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });


app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
