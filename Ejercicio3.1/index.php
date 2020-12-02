<!DOCTYPE html>
<?php
    require 'conexion.php';
    session_start();
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3.5</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <h1>Lista de libros</h1>
        <a href="registrar.php">Nuevo</a>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Precio</th>
                    <th>Editorial</th>
                    <th>Enlace</th>
                </tr>
                
            </thead>
            <tbody>
                <?php
                    $q = "SELECT id,titulo,autor,editorial,precio,enlace FROM libros";
                                
                    $consulta = $conexion->query($q);
                    $numero = $consulta->num_rows;

                    for ($i = 0; $i < $numero; $i++) {
                        $fila = $consulta->fetch_object();
                        echo "<tr>";
                            echo "<td> $fila->id </td>";
                            echo "<td> $fila->titulo </td>";
                            echo "<td> $fila->autor </td>";
                            echo "<td> $fila->editorial </td>";
                            echo "<td> $fila->precio </td>";
                            echo "<td>  <a href='$fila->enlace'>Enlace</a> </td>";
                        echo "</tr>";
                    }
                ?>
            </tbody>
        </table>
    </main>
</body>
</html>