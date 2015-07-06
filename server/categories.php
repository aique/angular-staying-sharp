<?php

include 'dispatcher.php';

$jsonFilePath = $_SERVER['DOCUMENT_ROOT'] . '/server/data/categories.json';

$categories = file_get_contents($jsonFilePath);

echo dispatch($categories, $jsonFilePath);