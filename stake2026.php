<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NeonJackpot 2026 — Casino en ligne</title>
  <link rel="stylesheet" href="styles/stake2026.css" />
</head>
<body>
  <aside class="sidebar">
    <div class="logo">Neon<span>Jackpot</span></div>
    <nav>
      <a class="active" href="#">Casino</a>
      <a href="#">Paris Sportifs</a>
      <a href="#">Live Casino</a>
      <a href="#">Promotions</a>
      <a href="#">VIP Club</a>
    </nav>
    <button class="cta">S'inscrire</button>
  </aside>

  <main class="content">
    <header class="topbar">
      <input type="search" placeholder="Rechercher des jeux" />
      <div class="wallet">Balance: 1,250.00 €</div>
      <button class="deposit">Déposer</button>
    </header>

    <section class="hero">
      <div>
        <p class="tag">NOUVEAU EN 2026</p>
        <h1>Expérience casino moderne</h1>
        <p>Design original inspiré des plateformes modernes, optimisé mobile et desktop.</p>
        <div class="hero-actions">
          <button>Jouer maintenant</button>
          <a href="#games">Voir les jeux</a>
        </div>
      </div>
    </section>

    <section id="games" class="games-section">
      <h2>Jeux populaires</h2>
      <div class="grid">
        <?php
          $games = [
            ["Aviator X", "Crash", "98.7%"],
            ["Roulette Neo", "Table", "97.9%"],
            ["Slots Prism", "Slot", "96.3%"],
            ["Blackjack Pro", "Carte", "99.1%"],
            ["Plinko Max", "Arcade", "97.0%"],
            ["Dice Rush", "Dés", "98.2%"],
          ];

          foreach ($games as $g) {
            echo "<article class='card'>";
            echo "<h3>{$g[0]}</h3>";
            echo "<p>{$g[1]}</p>";
            echo "<small>RTP {$g[2]}</small>";
            echo "<button>Jouer</button>";
            echo "</article>";
          }
        ?>
      </div>
    </section>

    <section class="banner">
      <h3>Bonus de bienvenue jusqu'à 2 000 €</h3>
      <p>+ 200 tours gratuits. Conditions applicables. Jouez de manière responsable.</p>
    </section>
  </main>
</body>
</html>
