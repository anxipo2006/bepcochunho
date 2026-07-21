// src/app/loading.tsx
// Skeleton toàn trang — hiển thị khi route đang fetch data
export default function RootLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-offwhite">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-coral" />
        <p className="text-sm font-semibold text-slate-500">Đang tải...</p>
      </div>
    </div>
  );
}
