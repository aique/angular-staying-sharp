<?php

include 'dispatcher.php';

$jsonFilePath = $_SERVER['DOCUMENT_ROOT'] . '/server/data/notes.json';

$notes = file_get_contents($jsonFilePath);

echo dispatch($notes);