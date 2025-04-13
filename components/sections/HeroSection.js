export default function HeroSection() {
  return (
    <section id="hero" className="w-full h-full">
      <div
        className="h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/heroimage.png')" }}
      >
        <div className="absolute inset-0 bg-orange-400/60" />
      </div>
    </section>
  );
}
