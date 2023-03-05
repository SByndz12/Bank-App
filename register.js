// console.log("HELLO");
function register(e) {
    console.log(e);
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const pnumber = document.getElementById("pnumber").value;
    // console.log("fname" + pnumber);
    const emailid = document.getElementById("email").value;
    // console.log("fname" + emailid);
    const uid = document.getElementById("userid").value;
    // console.log("fname" + uid);
    const passwd = document.getElementById("passwd").value;
    // console.log("fname" + passwd);
    let exists = false;
    for (let i = 0; i < localStorage.length; ++i){
        if (localStorage.key(i) === uid){
            exists = true;
        }
    }
    if (exists){
        document.innerHTML += "<p>The username you entered is already in use";
        window.location.assign('/Users/shraddhabyndoor/Documents/MadHacks/login.html');
        return;
    }
    const user = {
        first_name: fname,
        last_name: lname,
        phone_number: pnumber,
        email: emailid,
        password: passwd,
        checking: 0,
        saving: 0,
        amount_donated: 0,
        pets_amount: 0,
        homeless_amount: 0,
        food_amount: 0,
        orphanage_amount: 0,
        healthcare_amount: 0
      }
    localStorage.setItem(uid, JSON.stringify(user));
    // const button = document.getElementById("submit_registration");
    window.location.assign('/Users/shraddhabyndoor/Documents/MadHacks/login.html');
}

var loginForm = document.getElementById("login-form");
function handleSubmit(event) {
    event.preventDefault();
}
loginForm.addEventListener('submit', handleSubmit);
// console.log("HOIHO" + fname);
// let bank = new BankAccount(fname, lname, emailid, pnumber, uid, passwd);

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "shraddhabyndoor",
//   password: "Apple2002"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("SELECT Count(userid) FROM users WHERE userid = uid", function (err, result, fields) {
//       if (err) throw err;
//       if (result == 0) {
//         con.connect(function(err) {
//             if (err) throw err;
//             console.log("Connected!");
//             con.query("INSERT INTO users (first_name, last_name, phone_number, email, userid, password) VALUES (fname, lname, pnumber, emailid, uid, passwd)", function (err, result) {
//               if (err) throw err;
//               console.log("Database created");
//             });
//           });
//       }
//       else {
//         document.innerHTML += "<p>The username you entered is already in use";
//       }
//       console.log("Database created");
//     });
//   });