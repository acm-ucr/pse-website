"use client";
const NotFound = () => {
  return (
    <div className="text-pse-purple-400 font-pse-crimson-text flex min-h-screen flex-col items-center justify-center bg-white text-center font-light">
      <div className="text-[15rem] leading-none font-light">404</div>
      <p className="text-pse-purple-300 font-pse-gfs-display mt-4 text-5xl font-medium">
        Page Not Found
      </p>
      <a
        href="/"
        className="bg-pse-purple-400 hover:bg-pse-purple-300 mt-8 rounded-xl px-8 py-3 text-3xl text-white transition"
      >
        Home
      </a>
    </div>
  );
};
export default NotFound;
