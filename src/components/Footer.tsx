import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-deepblack text-ivory/60 py-12 border-t border-ivory/10">
      <ScrollReveal className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="font-heading text-2xl text-ivory mb-2 tracking-widest text-center md:text-left">NAVARATNA</h2>
          <p className="font-body text-sm font-light">© {new Date().getFullYear()} Navaratna Jewellers. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-sm font-body tracking-wider">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold transition-colors">Contact</a>
        </div>
      </ScrollReveal>
    </footer>
  );
}
