
//    var paragraphElement = document.getElementsByTagName('a');
//    for (var key in paragraphElement){
//        document.write(paragraphElement[key].innerHTML+'<br/>');
//    }

var paragraphElement = document.getElementsByTagName('p');
for(var key=0; key<paragraphElement.length; key++){
    document.write(paragraphElement[key].innerHTML+'<br/>');
}

//          var x;
//          x=10;
//          document.write(x);

//          var arrayname=new Array();
//          var name=Array();
var data=[];
data[0]=10;
data[1]=20;
data[2]=30;

data['name']='Mehedi';
data['city']='Narayanganj';
data['country']='Bangladesh';
document.write('<br/>');
document.write(data[20]);
document.write('<br/>');
document.write(data['name']);
document.write('<br/>');
//here key is a variable ; can be anything!
//data is array name;
for(var key in data){
    document.write(data[key]+'<br/>');
}
var data =['one','one','one','one'];
document.write(data.length);




var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var firstNameValue= document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var fullName = firstNameValue+' '+lastNameValue;
    document.getElementById('fullName').value =fullName;


};


//    function demo() {
//
//        var firstName = 'rubel';
//        var lastName = 'khan';
//        var fullName =firstName+' '+lastName;
//        document.write(fullName+ '<br/>');
//    }
//
//    function demo(firstName, lastName) {
//
//        var fullName =firstName+' '+lastName;
//        document.write(fullName);
//    }


//    document.write('=====================');
//    demo('Imran', 'hossain');
//    document.write('=====================');
//    demo('Maruf', 'hossain');
//    document.write('=====================');
//    demo('mehedi', 'hasan');



