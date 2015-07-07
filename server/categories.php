<?php

include 'dispatcher.php';

$jsonFilePath = $_SERVER['DOCUMENT_ROOT'] . '/server/data/categories.json';

$categories = file_get_contents($jsonFilePath);

if(notesInCategoryReq())
{
    echo 1;
}
else
{
    echo dispatch($categories, $jsonFilePath);
}

function notesInCategoryReq()
{
    $notesInCategoryReq = false;

    $url = $_SERVER['REQUEST_URI'];

    if(preg_match('/^\/server\/categories\.php\/notes-in-category$/', $url))
    {
        $notesInCategoryReq = true;
    }

    return $notesInCategoryReq;
}