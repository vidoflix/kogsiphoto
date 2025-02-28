<?php
$host = "sql312.infinityfree.com"; 
$dbname = "if0_38419199_XXX"; 
$username = "if0_38419199"; 
$password = "guylann07"; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>
