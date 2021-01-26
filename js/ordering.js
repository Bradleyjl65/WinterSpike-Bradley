//const btnSubmitOrder = document.getElementById('btnSubmitOrder');
var total = 400;
var order = "";
btnSubmitOrder.addEventListener('click', e => {
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
