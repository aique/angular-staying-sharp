<?php

include 'dispatcher.php';

$jsonFilePath = $_SERVER['DOCUMENT_ROOT'] . '/server/data/users.json';

$users = file_get_contents($jsonFilePath);

echo dispatch($users);

