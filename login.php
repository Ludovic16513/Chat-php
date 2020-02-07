<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="login.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>

  <h1>Espace de connection</h1>
  <div id="container">
    <form action="check_login.php" method="post">
      <div>
        <label for="username">Identifiant</label>
        <input type="text" name="username">
      </div>
      <div>
        <label for="password">Mot de passe </label>
        <input type="password" name="password">
      </div>
      <div>
        <input type="submit" name="button" value="connection">
      </div>
    </form>
  </div>
  </body>
</html>
