export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900/60 backdrop-blur-md">
      <div className="container mx-auto flex max-w-7xl items-center justify-center px-6 py-6 sm:px-8">
        <p className="text-center text-sm font-medium text-zinc-400">
          © {new Date().getFullYear()} Koryo Taekwondo Yaşamkent. Tüm hakları
          saklıdır.
        </p>
      </div>
    </footer>
  );
}
