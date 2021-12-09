let app_fireBase = {};

(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyA2xiE4qlBAUBGuM-XShCeCYIDynM3iizc",
        authDomain: "my-web-app-dbb3b.firebaseapp.com",
        databaseURL: "https://my-web-app-dbb3b.firebaseio.com",
        projectId: "my-web-app-dbb3b",
        storageBucket: "my-web-app-dbb3b.appspot.com",
        messagingSenderId: "989400992622",
        appId: "1:989400992622:web:1666d602e1a91eee484f7f",
        measurementId: "${config.measurementId}"
        };
        firebase.initializeApp(firebaseConfig);

        app_fireBase = firebase

        /********************************Create************************ */
        const createFnc = (path, body, callback) => {
            if(!path || !body) return;
            app_fireBase.database().ref(path).set(body, callback)
        }
        
        /********************************Read************************ */
        const readFnc = (path, onSuccess, onFailure) => {
            if(!path || !body) return;
            app_fireBase.database().ref(path).once('value').then(onSuccess, onFailure)
        }


        /********************************Update************************ */
        const updateFnc = (path, body, callback) => {
            if(!path || !body) return;
            app_fireBase.database().ref(path).update(body, callback)
        }

        /********************************Delete************************ */
        const deleteFnc = (path, callback) => {
            if(!path) return;
            app_fireBase.database().ref(path).remove(callback)
        }
        
        app_fireBase.databaseApi = {
            create: createFnc,
            read: readFnc,
            update: updateFnc,
            delete: deleteFnc
        }
})()
