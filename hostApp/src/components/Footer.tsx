import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-2 w-full h-10 flex items-center justify-center">
      <p className="text-gray-100">
        Desenvolvido por{" "}
        <a
          href="https://rafaelalmendra.com"
          target="_blank"
          className="text-primary-400"
        >
          Rafael Almendra
        </a>
      </p>
    </div>
  );
};

export { Footer };
