export default function HeroSection() {
  return (
    <section className="w-full h-full">
      <div
        className="h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/heroimage.png')" }}
      >
        <div className="absolute inset-0 bg-[rgba(var(--primary-color-rgb),0.6)]" />
      </div>
    </section>
  );
}
