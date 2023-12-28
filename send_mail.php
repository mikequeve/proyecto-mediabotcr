<?php
if(isset($_POST)){
  error_reporting(0);
  // Variables del formulario
  $name = $_POST['name'];
  $email = $_POST['email'];
  $comments = $_POST['comments'];

  // Variables para que trabaje la petición
  $domain = $_SERVER['HTTP_HOST']; // Obtiene el dominio desde el cual se está ejecutando la petición.
  $to = "michaelvega46@gmail.com"; // Correo a donde se quiera enviar los datos del formulario.
  $subject = "Contacto desde el formulario del sitio $domain";
  $message = "
    <p>
      Datos enviados desde el formulario en <b>$domain</b>
    </p>
    <ul>
      <li>Nombre: <b>$name</b></li>
      <li>Email: <b>$email</b></li>
      <li>Comentarios: $comments</li>
    </ul>
  ";

  //Cabeceras: sirve, entre otras cosas,  para que el contenido del formulario no llegue al correo en formato plano.
  //MIME-TYPES: Tipos de contenido que se envian dentro de las cabeceras cuando hacemos una peticio hacia la web. Cada tipo de archivo diferente tiene una MIME. (/r = enter, /n = salto de linea)
  //From = para que no llegue a la bandeja de spam.
  $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html, charset=utf-8\r\n"."From: Envío Automático No Responder <no-replay@$domain>";

  $send_mail = mail($to, $subject, $message, $headers);
  if($send_mail){
    $res = [
      "err" => false,
      "message" => "Tus datos han sido enviados"
    ];
  }else{
    $res = [
      "err" => true,
      "message" => "Error al enviar tus datos, intenta nuevamente"
    ];
  }

  header("Access-Control-Allow-Origin: *"); // * si quiero recibir la petición desde cualquier origen.(Agregar el dominio donde se encuentre el formulario).
  header("Content-type: application/json");
  echo json_encode($res);
  exit;
}
