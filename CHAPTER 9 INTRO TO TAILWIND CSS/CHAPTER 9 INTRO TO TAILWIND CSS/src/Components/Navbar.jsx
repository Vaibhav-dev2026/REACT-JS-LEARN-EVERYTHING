import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul className="hidden md:flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {open && (
        <ul className="mt-4 flex flex-col gap-3 md:hidden">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;



// 🧠 IMPORTANT CONCEPT CLEARANCE
// ❓ Component CSS vs Tailwind?

// ✔ Tailwind recommended
// ✔ No class conflicts
// ✔ Faster UI building
// ✔ Industry standard (2026)