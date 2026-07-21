// src/app/not-found.tsx
import Link from "next/link";
import { ChefHat } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-offwhite px-4 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-coral text-white shadow-lg shadow-coral/30">
        <ChefHat size={30} />
      </span>
      <div>
        <h1 className="text-4xl font-black text-slate-950">404</h1>
        <p className="mt-2 text-lg font-semibold text-slate-700">Trang không tìm thấy</p>
        <p className="mt-2 text-sm text-slate-500">
          Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex h-11 items-center rounded-full bg-coral px-6 text-sm font-bold text-white shadow-md hover:bg-coral-dark"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
