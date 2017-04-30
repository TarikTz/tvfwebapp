function getArduion() {
  
  var path = window.location.search;
  path = path.substring(1);
  //var url = window.location.href;
  console.log(path);

   var res = path.split("&");
   console.log(res);

   var jsonArr = [];

   for(i=0;i<res.length;i++) {
     jsonArr[i] = res[i].split("=");
     console.log(jsonArr[i]);
   }

   console.log(jsonArr);

   var myJsonString = JSON.stringify(jsonArr);
   console.log(myJsonString);

   var firebaseRef = firebase.database().ref('node/');

   firebaseRef.push().set(myJsonString);

}
