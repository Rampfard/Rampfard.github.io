<?php
// echo var_dump($_POST);

$data = file_get_contents("php://input");

echo json_encode( $data );

