import About1 from "./components/home/About1";
import About2 from "./components/home/About2";
import Hero from "./components/home/Hero";
import Steps from "./components/home/Steps";
import Tech from "./components/home/Tech";

export default function Home() {
  return (
    <main className="space-y-6">
      <Hero />
      <About1 />
      <About2 />
      <Steps />
      <Tech />
    </main>
  );
}
