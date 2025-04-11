export default function HeroSection() {
  return (
    <div
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: "url('/images/heroimage1.png')" }}
    >
      <div className="absolute inset-0 bg-orange-400/60" />
    </div>
  );
}
