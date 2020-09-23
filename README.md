# admin manager. :100:

> This project is a test for a job interview

---

## Requirements

## Goal

- the client needs to admit his users in a system to have more control :octocat:

## User Stories

1. CRUD in otehr words the user need to be able to :eyes: :
   - deltete users
   - create users
   - read users
   - update users
2. the user need a interface to work with the crud and alert it if do some error :shipit:

## user flow

you can see the flow at the following [link](https://drive.google.com/file/d/1redwR8KxPbkGkXYSmeLd2YR_LzDpT7cF/view?usp=sharing) :link:

## requirements

- components :construction_worker:
  - app
  - headder
  - user card
  - pagination
  - delete User
  - create user
  - update user
- pages :desktop_computer:
  - list of users
- crud :100:
  - create user
  - read users
  - delete user
  - update user

## dependencias :file_cabinet:

- material ui
- material ui icons
- react spring

## hosting

- **Front-end** firebase :fire: :octocat: [link](https://api-test-bernardo.web.app/)
- **Back-end** heroku :purple_heart: [link](https://reqres.in/api/)

## how to make a deploy in firebase?

1. install the firebase cli

```js
npm install -g firebase-tools
```

2. login with google inside your project

```js
firebase login
```

3. start your project

```js
firebase init
```

4. put inside firebase.json your web name

```js
{
 "hosting": {
   "site": "api-test-bernardo",
   "public": "public",
   ...
 }
}
```

5. enjoy your deploy!
