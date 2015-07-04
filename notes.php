<?php

$jsonFilePath = $_SERVER['DOCUMENT_ROOT'] . '/server/data/notes.json';

$notes = file_get_contents($jsonFilePath);

echo dispatch($notes);

function dispatch($notes)
{
    if(count($_POST) > 0)
    {
        $response = saveNote();
    }
    else
    {
        if(isset($_GET["id"]))
        {
            $response = noteDetail($notes);
        }
        else
        {
            $response = $notes;
        }
    }

    return $response;
}

function saveNote()
{

}

function noteDetail($notes)
{
    $notes = json_decode($notes, true);

    foreach($notes as $note)
    {
        if($note['id'] == $_GET["id"])
        {
            return json_encode($note);
        }
    }

    return '';
}