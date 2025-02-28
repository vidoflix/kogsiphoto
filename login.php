<?php
session_start();
require "config.php"; // On inclut la connexion à la base de données

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Vérification de l'utilisateur
    $stmt = $pdo->prepare("SELECT id, mot_de_passe FROM utilisateurs WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['mot_de_passe'])) {
        $_SESSION['user_id'] = $user['id'];
        header("Location: admin.html"); // Redirige vers la page admin
        exit();
    } else {
        echo "Email ou mot de passe incorrect.";
    }
}
?>
