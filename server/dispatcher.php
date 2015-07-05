<?php

function dispatch($data)
{
    if(count($_POST) > 0)
    {
        $response = save();
    }
    else
    {
        if(isset($_GET["id"]))
        {
            $response = detail($data);
        }
        else
        {
            $response = $data;
        }
    }

    return $response;
}

function save()
{

}

function detail($data)
{
    $data = json_decode($data, true);

    foreach($data as $item)
    {
        if($item['id'] == $_GET["id"])
        {
            return json_encode($item);
        }
    }

    return '';
}