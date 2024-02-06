import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function authorization(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        console.log("failure");
    })
}