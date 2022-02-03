import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "components/Footer";

export default function App() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section className="bg-gray-200 min-h-full h-auto pt-0">
        <Body />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
