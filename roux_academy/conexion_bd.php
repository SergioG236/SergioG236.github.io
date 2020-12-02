<?php
    $bd = 'roux';
    $servidor = 'localhost';
    $usuario = 'root';
    $contrasena = '';
    $conexion = mysqli_connect($servidor, $usuario, $contrasena, $bd);

    if (!$conexion) {
        die('La conexion a la base de datos ' . $bd . ' fallo' . mysqli_connect_error());
    }

    echo "Conectado a la base de datos $bd <br>";


    function valida_usuario_bd($usuario, $contrasena, $conexion) {
        $query = "SELECT 1 AS user_valido FROM usuarios WHERE usuario = '$usuario' AND contrasena = MD5('$contrasena')";
        $resultado = mysqli_query($conexion, $query) or die('Error al ejecutar la consulta');
        
        if (mysqli_num_rows($resultado) == 0) {
            return false;
        }
        return true;
    }
?>