function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          {title}
        </h1>

        <p className="text-center text-gray-500 mt-2">
          {subtitle}
        </p>

        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;