import data from "./data/portfolio.json";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProjetCard from "./components/ProjetCard.jsx";
export default function App() {
const { profil, projets } = data;
return (
<>
<Navbar nom={profil.nom} />
<main className="container">
<Hero profil={profil} />
<section id="projets">
<h2 className="section-title">Projets</h2>
<div className="grid">
{projets.map((p) => (
<ProjetCard key={p.slug} projet={p} />
))}
</div>
</section>
</main>
</>
);
}