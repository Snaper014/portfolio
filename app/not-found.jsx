import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[100vh] text-2xl w-full bg-Home text-[white] flex flex-col items-center gap-2">
      <h2>Error 404</h2>
      <p>Chemin non trouver</p>
      <Link href="/">Retour à l'accueil</Link>
    </div>
  );
}
