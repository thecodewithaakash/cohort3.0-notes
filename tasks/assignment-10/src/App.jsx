import React from "react";

const App = () => {
  return (
    <div>
      <aside
        className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#111] border-l border-white/10
      z-50 flex flex-col transition-transform duration-300 ease-out
      translate-x-full"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-bag text-volt"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <h2 className="font-heading font-bold text-lg">Cart</h2>
          </div>
          <button className="p-2 hover:bg-white/8 rounded-xl transition-colors text-white/50 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-package-open text-white/20"
              >
                <path d="M12 22v-9"></path>
                <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"></path>
                <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"></path>
                <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"></path>
              </svg>
            </div>
            <div>
              <p className="font-heading font-semibold text-white/70 text-lg">
                Cart is empty
              </p>
              <p className="text-white/30 text-sm mt-1">
                Go shop something cool!
              </p>
            </div>
            <button className="btn-volt mt-2">Browse Products</button>
          </div>
        </div>
      </aside>
      <div className="min-h-screen bg-[#0d0d0d] flex">
        <div className="hidden lg:flex flex-col w-1/2 bg-[#111] border-r border-white/8 p-12 relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-volt/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-volt/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-volt rounded-2xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap text-ink fill-ink"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </div>
            <span className="font-heading font-bold text-2xl">
              Sky<span className="text-volt">Mart</span>
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center relative z-10">
            <p className="text-volt text-sm font-body font-medium mb-4 tracking-widest uppercase">
              Welcome back
            </p>
            <h1 className="font-heading font-bold text-5xl leading-tight mb-6">
              Shop the future.
              <br />
              <span className="text-volt">Today.</span>
            </h1>
            <p className="text-white/40 text-base font-body max-w-sm leading-relaxed">
              Thousands of products, lightning-fast delivery, and prices that
              make your wallet happy.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center">
                <p className="font-heading font-bold text-xl text-volt">20K+</p>
                <p className="text-white/40 text-xs font-body mt-1">Products</p>
              </div>
              <div className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center">
                <p className="font-heading font-bold text-xl text-volt">50K+</p>
                <p className="text-white/40 text-xs font-body mt-1">Users</p>
              </div>
              <div className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center">
                <p className="font-heading font-bold text-xl text-volt">4.9★</p>
                <p className="text-white/40 text-xs font-body mt-1">Rating</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md animate-scale-in">
            <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
              <div className="w-9 h-9 bg-volt rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap text-ink fill-ink"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <span className="font-heading font-bold text-xl">
                Sky<span className="text-volt">Mart</span>
              </span>
            </div>
            <div className="auth-card">
              <h2 className="font-heading font-bold text-2xl mb-1">Sign in</h2>
              <p className="text-white/40 text-sm font-body mb-8">
                Enter your credentials to continue
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="field pl-10"
                    autoComplete="email"
                    fdprocessedid="ldubf7"
                  />
                </div>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="field pl-10 pr-10"
                    autoComplete="current-password"
                    fdprocessedid="o3p6l"
                  />
                  <button
                    type="button"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                    fdprocessedid="9kn11c"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-eye"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
                <button
                  type="submit"
                  className="btn-volt w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-heading font-bold"
                  fdprocessedid="2dgoye"
                >
                  Sign in
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </form>
              <p className="text-center text-white/30 text-sm font-body mt-6">
                Don't have an account?{" "}
                <a
                  className="text-volt hover:text-volt-light font-semibold transition-colors"
                  href="/register"
                >
                  Create one
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-rht-toaster=""
        style={{
          position: "fixed",
          zIndex: 9999,
          inset: "16px",
          pointerEvents:"none",
        }}
      ></div>
    </div>
  );
};

export default App;
