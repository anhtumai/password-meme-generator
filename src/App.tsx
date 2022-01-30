import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section className="bg-gray-200 min-h-full h-auto pt-0">
        <Body />
      </section>
    </>
  );
}
