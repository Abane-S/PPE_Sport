<?php 
    if(!empty($_POST['email']) && !empty($_POST['password'])){
        $secret = '6LcctiYgAAAAAK2figsXvTOxFZkJJNZ-lxA4JZDk';
        $response = htmlspecialchars($_POST['g-recaptcha-response']);
        $remoteip = $_SERVER['REMOTE_ADDR'];
        $request = 'https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip';


        $get = file_get_contents($request);
        $decode = json_decode($get, true);

        var_dump($decode);
    }