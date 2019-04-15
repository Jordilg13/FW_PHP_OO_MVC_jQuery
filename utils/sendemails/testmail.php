<?php
function send_mailgun($email, $subject, $html){
	$credentials=parse_ini_file(dirname(__FILE__)."/credentials_email.ini");


	$config = array();
	$config['api_key'] = $credentials['api_key']; //API Key
	$config['api_url'] = $credentials['api_url']; //API Base URL

	$message = array();
	$message['from'] = "jordillopisiestacio@gmail.com";
	$message['to'] = $email;
	$message['h:Reply-To'] = $email;
	$message['subject'] = $subject;
	$message['html'] = $html;
	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $config['api_url']);
	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
	curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_POST, true); 
	curl_setopt($ch, CURLOPT_POSTFIELDS,$message);
	$result = curl_exec($ch);
	curl_close($ch);
	return $result;
}
if ($_SERVER['HTTP_HOST'] == "localhost" || $_SERVER['HTTP_HOST'] =="127.0.0.1") {
	$json = send_mailgun('jordillopis00@gmail.com',"SubjectExample","afsadfasfDFSFASDDFASDFdfs");
	print_r($json);  
}
   