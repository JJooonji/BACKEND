# Twitter 클론코딩
## 2022.08.19 ~ 2022.08.25 미니프로젝트

## 주제
### > 프로젝트 이름 : Twitter 클론코딩
### > 프로젝트 설명 : Twitter 서비스에 back-end 자체적인 기능이 추가된 클론 프로젝트입니다.
---
## 팀원 정보
| 이름 | BE/FE |
| ---- | ---- |
| 이창현 | BE |
| 조은지 | BE |
| 김대린 | BE |
| 전민지 | FE |
| 김수환 | FE |
| 최효선 | FE |

---
## Backend 기술 스택
- express
- mysql
- sequelize
- jsonwebtoken
- passport
---
## 구현 기능
### - 사용자 인증 미들웨어
### - 유저 로그인 기능 구현
### - 소셜로그인 구현
---
## 트러블슈팅
### - aws ec2 서버 관리 중 .env의 Port 번호 인식 문제
- 서버 배포 과정 중 .env로 보안처리 되어있는 Port 번호를 app.js가 인식하지 못해 서버 실행에 대한 문제 발생함.
- solution :  포트에 대한 인식이 안될 시 3000번 포트를 명시함. ex) port = process.env.PORT || 3000

<br>

### - 유효성 검사 처리 오류
- 게시글 작성에 email,content,image가 있는데 원래 다 필요한 요소로 설정해두었다가 없어도 문제없게 바꿀려고 하니 allNull:false등을 지웠는데도 계속 image가 필요하다가 떴음. 
- solution :  image를 joi에서 제외하고 validate에도 제외하니 문제없이 동작함.

<br>

### - 소셜로그인 기능 구현
- 소셜로그인 기능을 구현하던 중 email값을 받아오고 싶었지만, email은 카카오자체에서 필수동의항목이 아니여서 받올 수 없었음.
- solution : 카카오 디벨로퍼에서 비즈니스로 개발자 비즈앱을 신청하여 email값을 필수항목으로 변경하여 값을 받아올 수 있었음.
