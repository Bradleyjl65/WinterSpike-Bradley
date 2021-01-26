//const btnSubmitOrder = document.getElementById('btnSubmitOrder');
var total = 400;
var order = "";

btnSubmitOrder.addEventListener('click', e => {
    if(isValidTime() == true){
        if(document.getElementById("c1").checked == true){
           total = total + parseInt(document.getElementById("c1").value);
           order = order + "\n" + document.getElementById("c1").name;
        }
        if(document.getElementById("c2").checked == true){
           total = total + parseInt(document.getElementById("c2").value);
           order = order + "\n" + document.getElementById("c2").name;
        }
        if(document.getElementById("c3").checked == true){
           total = total + parseInt(document.getElementById("c3").value);
           order = order + "\n" + document.getElementById("c3").name;
        }
        if(document.getElementById("m1").checked == true){
           total = total + parseInt(document.getElementById("m1").value);
           order = order + "\n" + document.getElementById("m1").name;
        }
        if(document.getElementById("m2").checked == true){
           total = total + parseInt(document.getElementById("m2").value);
           order = order + "\n" + document.getElementById("m2").name;
        }
        if(document.getElementById("m3").checked == true){
           total = total + parseInt(document.getElementById("m3").value);
           order = order + "\n" + document.getElementById("m3").name;
        }
        if(document.getElementById("t1").checked == true){
           total = total + parseInt(document.getElementById("t1").value);
           order = order + "\n" + document.getElementById("t1").name;
        }
        if(document.getElementById("t2").checked == true){
           total = total + parseInt(document.getElementById("t2").value);
           order = order + "\n" + document.getElementById("t2").name;
        }
        if(document.getElementById("t3").checked == true){
           total = total + parseInt(document.getElementById("t3").value);
           order = order + "\n" + document.getElementById("t3").name;
        }
        if(document.getElementById("t4").checked == true){
           total = total + parseInt(document.getElementById("t4").value);
           order = order + "\n" + document.getElementById("t4").name;
        }
            total = total/100;
            console.log(total);
            document.getElementById("total").innerHTML = total;
            console.log(order);
            alert("Thank You! Please pay now so that we can start making your order.");
     }
     else
        alert("Please enter a time between 7am and 8pm in intervals of 15 minutes.");
        //Code to send the owner a confirmation email
//              Email.send({
//                Host: "smtp.gmail.com",
//                Username: "jasminebradley2213@gmail.com",

//                To: 'jasminebradley2213@gmail.com',
//                From: "jasminebradley2213@gmail.com",
//                Subject: "New Order",
//                Body: order,
//              })
//                .then(function (message) {
//                  alert("mail sent successfully")
//                });

});

function getTotal(){
    return total;
}

function getHour(){
var timeVal = document.getElementById("time").value;
    var hour = "";
    if(isValidTime() == true){
        hour = hour + timeVal.charAt(0);
    }
    if(isValidTime() == true && timeVal.charAt(1) != ':'){
        hour = hour + timeVal.charAt(1);
    }
    return hour;
}

function getMinute(){
var timeVal = document.getElementById("time").value;
    var min = "";
    if(isValidTime() == true && timeVal.charAt(1) != ":"){
        min = min + timeVal.charAt(3);
        min = min + timeValid.charAt(4);
    }
    else{
        min = min + timeVal.charAt(2);
        min = min + timeVal.charAt(3);
    }
    console.log(min);
    return min;
}

function isValidTime(){
    var timeVal = document.getElementById("time").value;
    var hasColon = false;
    var cntBeforeCol = 0;
    var cntAfterCol = 0;
    for(let i = 0; i < 5; i++){
        if(timeVal.charAt(i) === ':'){
            hasColon = true;
        }
//        else{
//            if(hasColon == true)
//                cntAfterCol = cntAfterCol + 1;
//            else
//                cntBeforeCol = cntBeforeCol + 1;
//        }

    }
    console.log(hasColon);
    console.log(cntAfterCol);
    console.log(cntBeforeCol);
//    if(hasColon == true && (cntBeforeCol == 2 || cntBeforeCol == 1) && (cntAfterCol == 2 && cntAfterCol ==1))
    if(hasColon == true)
        return true;
    else
        return false;
}