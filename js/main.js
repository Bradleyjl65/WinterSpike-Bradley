jQuery(document).ready(function($) {
    $(".loader").delay(1000).fadeOut("slow");
	$("#overlayer").delay(1000).fadeOut("slow");
 	//Connect to Firebase


     // Your web app's Firebase configuration
     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
     var firebaseConfig = {
       apiKey: "AIzaSyCIhHjjNl30kJ5zI8d8bRykq_MBcosxEEw",
       authDomain: "winter-spike.firebaseapp.com",
       projectId: "winter-spike",
       storageBucket: "winter-spike.appspot.com",
       messagingSenderId: "653554036949",
       appId: "1:653554036949:web:b7bf29b0e02c528ea8725c",
       measurementId: "G-SH09C6PS6M"
     };

     	firebase.initializeApp(firebaseConfig);

     	//Gather necessary page elements


 	firebase.auth().onAuthStateChanged(firebaseUser => {
 		if (firebaseUser) {
 			// NOTE() DEBUG ALERT. REMOVE AFTER TESTING
 			//alert("Congrats, you signed in");
 			var username = getUsername(firebaseUser);
 			console.log(`${firebaseUser ? `- User signed in: ${firebaseUser.email} => ${username}` : "No User Signed in"}`);

 		} else {
 			console.log("No user signed in");
 		}
 	});



});

//    function goodMsg(elem, msgTxt) {
// 		msg(elem, msgTxt);
// 		document.getElementById(elem).className = "alert";
// 		setTimeout(function() {
// 			window.location.replace("index.html");
// 		}, 3000);
// 	}

// 	function msg(elem, msgTxt) {
//// 	    console.log(msgTxt);
// 		document.getElementById(elem).innerHTML = msgTxt;
// 		document.querySelector('.alert').style.display = 'block';
//
// 		setTimeout(function() {
// 			document.querySelector('.alert').style.display = 'none';
// 		}, 10000);
// 	}

 	//Check to see whether the student is logged in or not

     	const txtEmail = document.getElementById('txtEmail');
     	const txtPassword = document.getElementById('txtPassword');
     	const txtNewPassword = document.getElementById('txtNewPassword');
     	const btnSignin = document.getElementById('btnSignin');
     	const btnSignup = document.getElementById('btnSignup');
     	const btnSignout = document.getElementById('btnSignout');
     	const btnChangePass = document.getElementById('btnChangePass')

 btnSignup.addEventListener('click', e => {
  			// Get Email and Password
  			const email = txtEmail.value;
  			const password = txtPassword.value;
  			const auth = firebase.auth();

  			console.log("We are working over here in signup.js");

  			// Sign Up
  			if (email != null && email != "" && password != null && password != "") {
  				firebase.auth().createUserWithEmailAndPassword(email, password)
  					.then((result) => {
  						console.log("testing...");
  						addUserToDB(getUsernameByEmail(email), email);
  						console.log("success!");
  						//goodMsg("signup-alert", "Sign-Up Successful!");
  					})
  					.catch(e =>
  						//msg("signup-alert", "nope")
  						console.log("failed")
  					);
  			}
  			return false;
  		})

  		 	//Add functionality to login button

//             		btnSignin.addEventListener('click', e => {
//             			e.preventDefault();
//             			// Get Email and Password
//             			const email = txtEmail.value;
//             			const password = txtPassword.value;
//             			const auth = firebase.auth();
//
//             			// Sign in
//             			if (email != null && email != "" && password != null && password != "") {
//             				//firebase.auth().signOut();
//             				const promise = auth.signInWithEmailAndPassword(email,
//             					password);
//             				promise
//             					.then(() =>
//             						goodMsg("signin-alert", "Sign-in Successful!")
//             					)
//             					.catch(e =>
//             						//msg("signin-alert", e.message)
//             						console.log("failed")
//             					);
//             			}
//             		});

             	    btnSignout.addEventListener('click', e => {
             	    signout()
             	    });


 function databaseWriteObject(path, object) {
    console.log("in write User");
 	//console.log(firebase.database().ref(path).val());
 	firebase.database().ref(path).update(object);
 	console.log("end write User");
 }


 function addUserToDB(username) {
    console.log("in add User");
//    let userBranch = this.database.ref('USERS');
// 	userBranch.push(username);
   var table = `USERS/${username}`;
   var object = {
        "USERNAME": `${username}`,
       // "CART": null,
        "EMAIL": `${txtEmail.value}`,
   }
   console.log(table.val());
    databaseWriteObject(table, object);
 	console.log("end add user");
 }
function signout() {
 	firebase.auth().signOut();
 	window.location.href = "index.html";

 	return false;
 }

 function getUser(firebaseUser) {
 	var userType = "";
 	var table = "USERS";
 	var username = getUsername(firebaseUser);
 	var dbQuery = `${table}/${username}`;

 	const user = firebase.database().ref(dbQuery);
 	user.on('value', snap => {
 		var userData = snap.val() //JSON.stringify(snap.val(), null, 3);
 		if (userData) {
 			/*console.log('- User retrieved:');
 			console.log('  - User\'s Favorites:')
 			for (var i in userData.FAVORITES) {
 				var fav = userData.FAVORITES[i];
 				console.log(`    -Favorite ${i}: ${fav}`);
 			}
 			/*for (var i in userData) {
 				var datum = userData[i];
 				console.log(`${datum}`);
 			}
 		} else {
 			console.log('- no user found.');
 		}
		*/
 			return userData;
 		} else {
 			return "";
 		}
 	});
 }

 function getUsernameByEmail(email) {
 	var user = "";
 	var atSign = false;
 	var index = 0;
 	for (let i = 0; i < email.length && atSign == false; i++) {
 		if (atSign == false) {
 			if (email.charAt(i) !== '@') {
 				index++;
 			} else if (email.charAt(i) == '@') {
 				atSign = true;
 			}
 		}
 	}
 	user = email.substring(0, index);
 	return user;
 }

 function getUsername(firebaseUser) {
 	var email = firebaseUser.email;
 	var user = "";
 	var atSign = false;
 	var index = 0;
 	for (let i = 0; i < email.length && atSign == false; i++) {
 		if (atSign == false) {
 			if (email.charAt(i) !== '@') {
 				index++;
 			} else if (email.charAt(i) == '@') {
 				atSign = true;
 			}
 		}
 	}
 	user = email.substring(0, index);

 	let userForm = document.getElementById("usernameForm");
 	if (userForm) {
 		userForm.value = user;
 	}

 	return user;
 }
