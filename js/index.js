function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function Enviar(){
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("mensaje").value;
  var nombre = document.getElementById("nombre").value;

  if(correo!="" && mensaje!="" && nombre!="" ){
      Email.send({
          Host : "smtp.gmail.com",
          secureToken:'2fb3e88b-a61b-442b-bab2-f187d59035fe',
          Username : "atencionintegralpiixan@gmail.com",
          Password : "jesusmisalvador2020",
          To:"atencionintegralpiixan@gmail.com",
          From: correo,
          Subject:"Persona interesada,con el nombre de:" +nombre,
          Body: mensaje,
  
      }).then(
          message => alert(message)
          // location.href="index.html"
      );
  }else{
      alert("Faltan campos por llenar");
  }
}