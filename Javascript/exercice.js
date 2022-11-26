function valider() {
  
    var nom = document.getElementsByTagName('input')[0].value;
    var email = document.getElementsByTagName('input')[1].value;
    var adresse =  document.getElementsByTagName('input')[2].value;
    var age = document.getElementsByTagName('input')[3].value;
   
    document.getElementById("nom").innerHTML = nom;
    document.getElementById("email").innerHTML = email;
    document.getElementById("adresse").innerHTML = adresse;
    document.getElementById("age").innerHTML = age;
}

function Somme() {
  
  var input = new Number(document.getElementById("nombre1").value);
  var input1 = new Number(document.getElementById("nombre2").value);
  var somme = input + input1;


  var text = 'Le résultat de la somme est: ' + somme;
  
  document.getElementById("resultat").innerHTML = text;
}


function Soustraction() {
  
   var input = new Number(document.getElementById("nombre3").value);
   var input1 = new Number(document.getElementById("nombre4").value);
   var soustraction = input - input1;


   var text = 'Le résultat de la soustraction est: ' + soustraction;
  
  document.getElementById("resultat").innerHTML = text;
}

function Multiplication() {
  
   var input = new Number(document.getElementById("nombre5").value);
   var input1 = new Number(document.getElementById("nombre6").value);
   var soustraction = input * input1;


   var text = 'Le résultat de la multiplication est: ' + soustraction;
  
  document.getElementById("resultat").innerHTML = text;
}
function Division() {
  
   var input = new Number(document.getElementById("nombre5").value);
   var input1 = new Number(document.getElementById("nombre6").value);
   var soustraction = input / input1;


   var text = 'Le résultat de la Division: ' + soustraction;
  
  document.getElementById("resultat").innerHTML = text;
}

const personne=[
                {nom:'Siby',prenom:'Lassana',age:27,note:18},
                {nom:'Ndiaye',prenom:'Amara',age:20,note:13}
                   
                ];

         

const tbody = document.getElementById('donne');


personne.map((element)=>{
    const j = Object.values(element);
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    
    console.log(j);
    for (let i = 0; i < j.length; i++) {
     
        let td = document.createElement('td');
                          tr.appendChild(td);


        td.innerText=j[i];
       }

    tableau = document.getElementById("tableau");
    const ligne = tableau.getElementsByTagName("tr");
           
    })
   