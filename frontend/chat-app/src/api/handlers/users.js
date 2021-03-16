import { db, auth } from '../util/firebaseInit'


export const signup = (email, nickname, password) => {
  const newUser = {
    email: email,
    nickname: nickname,
    createTime: new Date()
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const userId = userCredential.user.uid;
      console.log('User ' + userId + ' auth created successfully!');
      return userId;
    })
    .then(userId => {
      db.collection('users')
        .doc(userId)
        .set(newUser)
        .then(() => {
          console.log('User ' + userId + ' added to the db successfully!');
        })
        .catch((error) => console.error(error))
    });
};

export const signIn = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      return userCredential.user.uid;
    })
    .then(userId => {
      let user = {};
      user = db.collection('users')
        .doc(userId)
        .get()
      alert('Welcome ' + user.nickname)
    })
    .catch(error => console.error(error))
}

/*
export default {
  signup, signin
}
*/
