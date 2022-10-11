// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; 
// import { auth } from "../../../Firebase/config";
// export const registerAuth = (email, password ) => {
//     return async ( dispatch ) => {
//         const response = await createUserWithEmailAndPassword(auth, email, password)
//         if (response) {

//             await updateProfile( auth, currentUser, {
//                 displayName: 'Juli',
//                 photoURL: ''
//             })
//         } else {
//             throw new Error('login failed')
//         }
//     }
// }