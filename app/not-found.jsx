import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-pure flex items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient Blue Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 relative z-10 p-8 bg-dark-card border border-dark-border rounded-2xl shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-xs">
          <span>ERROR 404</span>
        </div>

        <h1 className="text-6xl font-black text-white font-mono">404</h1>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white">Halaman Tidak Ditemukan</h2>
          <p className="text-muted text-sm leading-relaxed">
            Halaman yang Anda tuju telah dipindahkan atau tidak lagi tersedia.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider font-mono rounded-xl shadow-[0_0_20px_#2563eb] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}
