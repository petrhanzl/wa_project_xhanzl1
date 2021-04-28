import { db, auth } from '../util/firebaseInit'

const currentUser = auth.currentUser;



export const createRoom = (roomName) => {
    const newRoom = {
        createdAt: new Date(),
        name: roomName,
        userCreator: currentUser.getIdToken(),
    }
    db.collection("rooms").add(newRoom)
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.error(error)
        })


/*
    db.collection('rooms').doc(roomName).set({
        createdAt: new Date(),
        name: roomName,
        userCreator: currentUser
    })
        .then(() => {
            console.log('Room created successfully');
        })
        .catch((error) => {
            console.error("Error while creating new room: ", error);
        })*/
}
