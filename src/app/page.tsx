'use client'

export default function Home() {
  return (
    <>
           {/* Header Section */}
           <header id="hero" className="flex items-center justify-center h-screen text-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="hero-content">
          <h1 className="text-5xl font-bold opacity-0 animate-fadeIn">Sanjai Uthup Thomas</h1>
          <p className="text-2xl mt-4 opacity-0 animate-fadeIn">Web & Mobile App Developer</p>
          <p className="text-l mt-4 opacity-0 animate-fadeIn">sanjaiuthupthomas@gmail.com</p>

        </div>
      </header>

      {/* Add other sections like About, Skills, Portfolio, Contact, etc., similarly */}
      
      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInBottom {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
          opacity: 0;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-in-out forwards;
          opacity: 0;
          transform: translateX(-100%);
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-in-out forwards;
          opacity: 0;
          transform: translateX(100%);
        }

        .animate-slideInBottom {
          animation: slideInBottom 1s ease-in-out forwards;
          opacity: 0;
          transform: translateY(100%);
        }
      `}</style>
    </>
  );
}
