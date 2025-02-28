<?php
session_start();
$pdo = new PDO("mysql:host=localhost;dbname=mon_site", "root", "");

// Récupération des données du formulaire
$email = $_POST['email'];
$password = $_POST['password'];

// Vérification de l'utilisateur
$stmt = $pdo->prepare("SELECT id, mot_de_passe FROM utilisateurs WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if ($user && password_verify($password, $user['mot_de_passe'])) {
    $_SESSION['user_id'] = $user['id'];
    header("Location: admin.html");
    exit();
} else {
    echo "Email ou mot de passe incorrect.";
}
?>
