// src/app/error.tsx
"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to error reporting service nếu có
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-offwhite px-4 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-red-50 text-red-500">
        <AlertTriangle size={30} />
      </span>
      <div>
        <h1 className="text-2xl font-black text-slate-950">Đã có lỗi xảy ra</h1>
        <p className="mt-2 text-sm text-slate-500">
          Hệ thống gặp sự cố. Vui lòng thử lại hoặc liên hệ Bếp nếu lỗi tiếp tục.
        </p>
        {error.digest && (
          <p className="mt-1 font-mono text-xs text-slate-400">Mã lỗi: {error.digest}</p>
        )}
      </div>
      <button
        onClick={reset}
        className="inline-flex h-11 items-center rounded-full bg-coral px-6 text-sm font-bold text-white shadow-md hover:bg-coral-dark"
      >
        Thử lại
      </button>
    </div>
  );
}
