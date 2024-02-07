import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className=" p-4">
  <span className="font-bold">
   <p className="text-medium"> Click for sending mail </p>
    <a href="mailto:jahanzaibkhan081@gmail.com" className="underline px-2 text-large">jahanzaibkhan081@gmail.com</a>
  </span>
</p>

      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
