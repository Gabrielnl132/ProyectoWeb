<?php
    include 'conexion.php';
    $nombre=$_POST['Nombre'];
    $apellido=$_POST['Apellido'];
    $email=$_POST['Email'];
    $contrasenia=$_POST['contrasenia'];
    $comentarios=$_POST['comentarios'];

    $consulta="INSERT into usuario(nombre,apellido,email,contrasenia ,mensaje) values('$nombre','$apellido','$email','$contrasenia','$comentarios')";
    $resultado=mysqli_query($conexion, $consulta);

    if($resultado){
        echo "Registro Exitoso";
    }else{
        echo "No se Pudo Registar";
    }
?>