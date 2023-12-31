import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyA1i5WA8FSrTBDlafCoOAkAS0LtNJlfcRU",
//     authDomain: "mwdashboard - 9070c.firebaseapp.com",
//     projectId: "mwdashboard-9070c",
//     storageBucket: "mwdashboard-9070c.appspot.com",
//     messagingSenderId: "302612977543",
//     appId: "1:302612977543:web:dd9bade712056450c16522",
//     // apiKey: process.env.REACT_APP_API_KEY,
//     // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     // projectId: process.env.REACT_APP_PROJECT_ID,
//     // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     // appId: process.env.REACT_APP_APP_ID,


// };
const firebaseConfig = {
    apiKey: "AIzaSyA1i5WA8FSrTBDlafCoOAkAS0LtNJlfcRU",
    authDomain: "mwdashboard-9070c.firebaseapp.com",
    projectId: "mwdashboard-9070c",
    storageBucket: "mwdashboard-9070c.appspot.com",
    messagingSenderId: "302612977543",
    appId: "1:302612977543:web:dd9bade712056450c16522"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);