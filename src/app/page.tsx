import Navbar from "../components/Navbar";
import MyStory from "../components/MyStory";
import Support from "../components/Support";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <MyStory />
        <Support />
      </main>
      <Footer />
    </>
  );
}