let mainFunc = {};

(() => {
    let uid = null;
    app_fireBase.auth().signInWithEmailAndPassword(email="demo@gmail.com", password= "1234_simon")
    .then((credential) => {
        uid = credential.user.uid
    })
    .catch((err) => console.log(err))

    function messageHandler(err) {
        if(!!err) {
            console.log(err)
        } else {
            console.log("success")
        }
    }

    /************************Create function [C] */
    const name = document.getElementById('name').value;
    const ageN = document.getElementById('age').value;
    const yHobby = document.getElementById('hobby').value;
    function createFnc(){
        const path = `users/${uid}`;
        const data = {
            name,
            age: ageN,
            hobby: yHobby
        }
        app_fireBase.databaseApi.create(path, data, messageHandler)
    }

    /************************Read function [R] */
    function readFnc(){
        const path = `users/${uid}`;
        const onSuccess = (snapShot) => {
            if(!!snapShot && !!snapShot.val()) {
                console.log(snapShot.val())
            } else {
                console.log("No data found")
            }
        }
        app_fireBase.databaseApi.read(path, onSuccess, messageHandler)
    }

     /************************Update function [U] */
    function updateFnc(){
        const path = `users/${uid}`;
        data = {
            age: 21
        }
        app_fireBase.databaseApi.update(path, data, messageHandler)
    }

      /************************Delete function [D] */
      function deleteFnc(){
        const path = `users/${uid}`;
        app_fireBase.databaseApi.delete(path, messageHandler)
    }
    mainFunc.Create = createFnc;
    mainFunc.Read = readFnc;
    mainFunc.Update = updateFnc;
    mainFunc.Delete = deleteFnc;

})()