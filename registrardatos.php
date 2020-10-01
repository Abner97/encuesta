<html>
<html>

<head>
  <title>Enviado</title>
</head>

<body>
  <?php
     $estrategia1 = $_POST['estrategia1'];
     $puntose1 = $_POST['puntose1'];
     $comp1 = $_POST['comp1'];
     $puntosC1_1 = $_POST['puntosC1_1'];
     $comp2 = $_POST['comp2'];
     $puntosC2_2 = $_POST['puntosC2_2'];
     $comp3 = $_POST['comp3'];
     $puntosC3_3 = $_POST['puntosC3_3'];
  
     $estrategia2 = $_POST['estrategia2'];
     $puntose2 = $_POST['puntose2'];
     $comp4 = $_POST['comp4'];
     $puntosC1_4 = $_POST['puntosC1_4'];
     $comp5 = $_POST['comp5'];
     $puntosC2_5 = $_POST['puntosC2_5'];
     $comp6 = $_POST['comp6'];
     $puntosC3_6 = $_POST['puntosC3_6'];
  
     $estrategia3 = $_POST['estrategia3'];
     $puntose3 = $_POST['puntose3'];
     $comp7 = $_POST['comp7'];
     $puntosC1_7 = $_POST['puntosC1_7'];
     $comp8 = $_POST['comp8'];
     $puntosC2_8 = $_POST['puntosC2_8'];
     $comp9 = $_POST['comp9'];
     $puntosC3_9 = $_POST['puntosC3_9'];
  
     //Seccion de conexion a la base de datos---
  $conexion = mysqli_connect("localhost", "gerardon_pulixe", "07-Marzo1998", "gerardon_resultadosE") or die ('I cannot connect to the database because:');
        
  if ($conexion)
  {
      mysqli_query($conexion, "insert into encuestados
      (estrategia1,puntose1,estrategia2,puntose2,estrategia3,puntose3,
      comp1,puntosC1_1,comp2,puntosC2_2,comp3,puntosC3_3,
      comp4,puntosC1_4,comp5,puntosC2_5,comp6,puntosC3_6,
      comp7,puntosC1_7,comp8,puntosC2_8,comp9,puntosC3_9) values 

      ('$estrategia1',$puntose1,'$estrategia2',$puntose2,'$estrategia3',$puntose3,
      '$comp1',$puntosC1_1,'$comp2',$puntosC2_2,'$comp3',$puntosC3_3,
      '$comp4',$puntosC1_4,'$comp5',$puntosC2_5,'$comp6',$puntosC3_6,
      '$comp7',$puntosC1_7,'$comp8',$puntosC2_8,'$comp9',$puntosC3_9)") or die("Problemas" . mysqli_error($conexion));
      mysqli_close($conexion);
  }
  else 
  {
      echo "Error al conectarse";
  }
  ?>
</body>

</html>

