/*
****************Initial Setup*****************
1.visit-console.firebase.google.com
2. create project-(skip google analytics)
3.register app(create config)
4.install firebase : npm install firebase
5.add config file to your project
6.danger:do not publish/make firebase config to github


***************Integration*********************
7.visit : go to : docs>build>authentication>web>get started
8.export auth from firebase.config.js  : export default app
9.Login.jsx : import getAuth from firebase/auth
10.create const auth = getAuth(app)



*****************Provider Setup******************
11.import googleAuthProvider and create a new provider
12.use signInWithPopUp & pass -->auth & provider
13.activate sign in method(google,fb,github...)
14.[vite]:change 127.0.0.1 to localhost
15.active the auth provide(create app,provide redirect url,client id,client secret)
*/