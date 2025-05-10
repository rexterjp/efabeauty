import "./index.css";
import Footer from "./components/Footer";

const galleryImages = [
  "/images/gorgeous_miersanda.jpg",
  "/images/super_cute.jpg",
  "/images/luvluvv_meanggie.jpg",
  "/images/makeup.jpg",
  "/images/makeup_by_miersanda.jpg",
  "/images/cantiknyaaa_nataliechelsy.jpg"
];

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1b1914] font-sans">
      <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-5 sm:py-6 border-b border-gray-100">
        <div className="font-serif text-lg tracking-wide mb-3 sm:mb-0">Efa beauty</div>
        <nav className="flex space-x-4 sm:space-x-8 text-sm mb-3 sm:mb-0">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#" className="hover:underline">PORTFOLIO</a>
          <a href="#" className="hover:underline">ABOUT</a>
          <a href="#" className="hover:underline">CONTACT</a>
        </nav>
        <div className="flex space-x-3 sm:space-x-4 text-gray-400">
          <a href="https://twitter.com/pixpa" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg fill="none" stroke="currentColor" strokeWidth="2" height="20" width="20" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 2c-2.5 0-4.5 2.02-4.5 4.5 0 .35.04.7.12 1.03C7.73 7.3 4.1 5.54 1.67 2.9c-.38.65-.6 1.4-.6 2.2 0 1.52.78 2.86 1.96 3.64A4.52 4.52 0 012 7.15v.05c0 2.13 1.52 3.91 3.55 4.3-.37.1-.76.15-1.16.15-.28 0-.56-.03-.82-.08.56 1.75 2.19 3.02 4.13 3.06A9.06 9.06 0 012 20.42 12.72 12.72 0 008.29 22c7.54 0 11.67-6.15 11.67-11.5 0-.18-.01-.36-.02-.54A8.35 8.35 0 0023 3z"/></svg>
          </a>
          <a href="https://www.instagram.com/efabeauty.makeup/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg fill="none" stroke="currentColor" strokeWidth="2" height="20" width="20" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 flex-grow">
        <section className="pt-12 sm:py-16">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3">Hello, I am Efa.</h1>
          <p className="font-light text-lg sm:text-xl md:text-2xl">Make-up artist based in Indonesian.</p>
        </section>

        <section className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mb-24 mt-8">
          {galleryImages.map((img, idx) => (
            <div key={img} className="w-full aspect-[3/4] rounded overflow-hidden shadow-sm bg-gray-200">
              <img
                src={img}
                alt={"Galeri makeup Efa Beauty " + (idx + 1)}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
