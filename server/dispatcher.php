<?php

function dispatch($data, $filePath)
{
    $params = getParams();

    if(count($params) > 0)
    {
        $response = save($data, $params, $filePath);
    }
    else
    {
        $id = getIdParam();

        if($id)
        {
            $response = detail($data, $id);
        }
        else
        {
            $response = $data;
        }
    }

    return $response;
}

function getParams()
{
    $params = array();

    if(count($_GET))
    {
        if(isset($_GET['title']))
        {
            $params['title'] = $_GET['title'];
        }

        if(isset($_GET['description']))
        {
            $params['description'] = $_GET['description'];
        }
    }

    return $params;
}

function save($data, $params, $filePath)
{
    print_r($params);
    $data = json_decode($data, true);

    $data[] = $params;

    file_put_contents($filePath, json_encode($data));
}

function detail($data, $id)
{
    $data = json_decode($data, true);

    foreach($data as $item)
    {
        if($item['id'] == $id)
        {
            return json_encode($item);
        }
    }

    return '';
}

function isCreate()
{
    $url = $_SERVER['REQUEST_URI'];

    return preg_match('/^\/server\/[a-z]+\.php\/create$/', $url);
}

function getIdParam()
{
    $id = '';

    $url = $_SERVER['REQUEST_URI'];

    if(preg_match('/^\/server\/[a-z]+\.php\/\d+$/', $url))
    {
        $id = substr($url, strrpos($url, '/') + 1, strlen($url));
    }

    return $id;
}