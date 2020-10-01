window.addEventListener("load", inicio, false);

function inicio() {
  //opciones Estrategias para tus ofertas
  document.getElementById("E1").addEventListener("dragstart", drag, false);
  document.getElementById("E2").addEventListener("dragstart", drag, false);
  document.getElementById("E3").addEventListener("dragstart", drag, false);
  document.getElementById("E4").addEventListener("dragstart", drag, false);
  document.getElementById("E5").addEventListener("dragstart", drag, false);
  document.getElementById("E6").addEventListener("dragstart", drag, false);
  document.getElementById("E7").addEventListener("dragstart", drag, false);
  document.getElementById("E8").addEventListener("dragstart", drag, false);
  document.getElementById("E9").addEventListener("dragstart", drag, false);
  document.getElementById("E10").addEventListener("dragstart", drag, false);
  document.getElementById("E11").addEventListener("dragstart", drag, false);
  document.getElementById("E12").addEventListener("dragstart", drag, false);
  document.getElementById("E13").addEventListener("dragstart", drag, false);

  document.getElementById("E14").addEventListener("dragstart", drag, false);
  document.getElementById("E15").addEventListener("dragstart", drag, false);
  document.getElementById("E16").addEventListener("dragstart", drag, false);
  document.getElementById("E17").addEventListener("dragstart", drag, false);
  document.getElementById("E18").addEventListener("dragstart", drag, false);
  document.getElementById("E19").addEventListener("dragstart", drag, false);
  document.getElementById("E20").addEventListener("dragstart", drag, false);
  document.getElementById("E21").addEventListener("dragstart", drag, false);
  document.getElementById("E22").addEventListener("dragstart", drag, false);
  document.getElementById("E23").addEventListener("dragstart", drag, false);
  document.getElementById("E24").addEventListener("dragstart", drag, false);
  document.getElementById("E25").addEventListener("dragstart", drag, false);
  document.getElementById("E26").addEventListener("dragstart", drag, false);
  document.getElementById("E27").addEventListener("dragstart", drag, false);
  document.getElementById("E28").addEventListener("dragstart", drag, false);
  document.getElementById("E29").addEventListener("dragstart", drag, false);
  document.getElementById("E30").addEventListener("dragstart", drag, false);
  document.getElementById("E31").addEventListener("dragstart", drag, false);
  document.getElementById("E32").addEventListener("dragstart", drag, false);
  document.getElementById("E33").addEventListener("dragstart", drag, false);
  document.getElementById("E34").addEventListener("dragstart", drag, false);
  document.getElementById("E35").addEventListener("dragstart", drag, false);
  document.getElementById("E36").addEventListener("dragstart", drag, false);

  document
    .getElementById("recuadro")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro2")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro2").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro3")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro3").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro4")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro4").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro5")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro5").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro6")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro6").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro7")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro7").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro8")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro8").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro9")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro9").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro10")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro10").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro11")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro11").addEventListener("drop", drop, false);
  document
    .getElementById("recuadro12")
    .addEventListener("dragover", permitirDrop, false);
  document.getElementById("recuadro12").addEventListener("drop", drop, false);

  document.getElementById("boton1").addEventListener("click", () => mostrar());
}

function mostrar() {
  var estrategia1 = document.getElementById("spanrecuadro").innerText;
  var puntose1 = document.getElementById("puntose1").value;
  var comp1 = document.getElementById("spanrecuadro2").innerText;
  var puntosC1_1 = document.getElementById("puntosC1_1").value;
  var comp2 = document.getElementById("spanrecuadro3").innerText;
  var puntosC2_2 = document.getElementById("puntosC2_2").value;
  var comp3 = document.getElementById("spanrecuadro4").innerText;
  var puntosC3_3 = document.getElementById("puntosC3_3").value;

  var estrategia2 = document.getElementById("spanrecuadro5").innerText;
  var puntose2 = document.getElementById("puntose2").value;
  var comp4 = document.getElementById("spanrecuadro6").innerText;
  var puntosC1_4 = document.getElementById("puntosC1_4").value;
  var comp5 = document.getElementById("spanrecuadro7").innerText;
  var puntosC2_5 = document.getElementById("puntosC2_5").value;
  var comp6 = document.getElementById("spanrecuadro8").innerText;
  var puntosC3_6 = document.getElementById("puntosC3_6").value;

  var estrategia3 = document.getElementById("spanrecuadro9").innerText;
  var puntose3 = document.getElementById("puntose3").value;
  var comp7 = document.getElementById("spanrecuadro10").innerText;
  var puntosC1_7 = document.getElementById("puntosC1_7").value;
  var comp8 = document.getElementById("spanrecuadro11").innerText;
  var puntosC2_8 = document.getElementById("puntosC2_8").value;
  var comp9 = document.getElementById("spanrecuadro12").innerText;
  var puntosC3_9 = document.getElementById("puntosC3_9").value;

  if ($(estrategia1).val() != 0) {
    $.post(
      "registrardatos.php",
      {
        estrategia1: estrategia1,
        puntose1: puntose1,
        comp1: comp1,
        puntosC1_1: puntosC1_1,
        comp2: comp2,
        puntosC2_2: puntosC2_2,
        comp3: comp3,
        puntosC3_3: puntosC3_3,

        estrategia2: estrategia2,
        puntose2: puntose2,
        comp4: comp4,
        puntosC1_4: puntosC1_4,
        comp5: comp5,
        puntosC2_5: puntosC2_5,
        comp6: comp6,
        puntosC3_6: puntosC3_6,

        estrategia3: estrategia3,
        puntose3: puntose3,
        comp7: comp7,
        puntosC1_7: puntosC1_7,
        comp8: comp8,
        puntosC2_8: puntosC2_8,
        comp9: comp9,
        puntosC3_9: puntosC3_9,
      },
      function (data) {
        if (data != "") {
          alert("Datos enviados");
        }
      }
    );
  } else {
    alert("Ingrese todos los datos");
  }
}
//obtenemos el ID de los span que se crean al dropearse en el recuadro# ; Tipo dato: String.

//Codigo para obtener estratgias y competencias en texto

/*codigo para obtener los puntos de los select con nombre de los puntos de cada estrategia y competencia*/
// por ejemplo en el query $_REQUEST[puntose1] recoge los datos del select de puntos para la estrategia1
/*mysqli_query($conexion, "insert into alumnos(nombre,mail,codigocurso) values 
                       ('$_REQUEST[nombre]','$_REQUEST[mail]',$_REQUEST[codigocurso])")
    or die("Problemas en el select" . mysqli_error($conexion));*/

/*Codigo para insertar en la base de datos*/

function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function removeNode(node) {
  node.parentNode.removeChild(node);
}
function drop2(ev) {
  ev.preventDefault();
  var dato = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(dato));
}
function drop(ev) {
  ev.preventDefault();
  var dato = ev.dataTransfer.getData("Text");
  var nodeCopy = document.getElementById(dato).cloneNode(true);

  var isRight =
    "E14" == dato ||
    "E15" == dato ||
    "E16" == dato ||
    "E17" == dato ||
    "E18" == dato ||
    "E19" == dato ||
    "E20" == dato ||
    "E21" == dato ||
    "E22" == dato ||
    "E23" == dato ||
    "E24" == dato ||
    "E25" == dato ||
    "E26" == dato ||
    "E27" == dato ||
    "E28" == dato ||
    "E29" == dato ||
    "E30" == dato ||
    "E31" == dato ||
    "E32" == dato ||
    "E33" == dato ||
    "E34" == dato ||
    "E35" == dato ||
    "E36" == dato;
  nodeCopy.id = "span" + ev.target.id;
  if (isRight) {
    if (ev.target.nodeName == "SPAN") {
      ev.target.parentNode.appendChild(nodeCopy);
      removeNode(ev.target);
    } else ev.target.appendChild(nodeCopy);
  } else {
    if (ev.target.nodeName != "SPAN") {
      removeNode(document.getElementById(dato));
      ev.target.appendChild(nodeCopy);
    }
  }
  ev.stopPropagation();
}

function permitirDrop(ev) {
  ev.preventDefault();
}
