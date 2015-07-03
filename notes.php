<?php

$json =
'[
  {
    "id": 1,
    "title": "Primera nota",
    "description": "Descripción de la primera nota"
  },
  {
    "id": 2,
    "title": "Segunda nota",
    "description": "Descripción de la segunda nota"
  }
]';

if(isset($_GET["id"]))
{
    $notes = json_decode($json, true);

    foreach($notes as $note)
    {
        if($note['id'] == $_GET["id"])
        {
            echo json_encode($note);
        }
    }
}
else
{
    echo $json;
}