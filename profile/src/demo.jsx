import { useState, useEffect } from "react";

export default function Demo() {
  const roles = ["Frontend Developer", "Backend Developer", "MERN Developer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 80 : 150; // speed up deleting

    const interval = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1) // remove letters
          : currentRole.substring(0, prev.length + 1) // add letters
      );

      // if finished typing
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      }
      // if finished deleting
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length); // move to next role
      }
    }, typingSpeed);

    return () => clearTimeout(interval);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900">
      <h1 className="text-5xl font-bold text-white mb-4">Shashank Soni</h1>

      <h2 className="text-2xl text-teal-300">
        {text}
        <span className="animate-pulse">|</span>
      </h2>
    </div>
  );
}
