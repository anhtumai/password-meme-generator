import Header from "./components/Header";
import Editor from "./components/Editor";

export default function App() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section className="bg-gray-200 min-h-full h-auto pt-0">
        <Editor />
      </section>
    </>
  );
}
