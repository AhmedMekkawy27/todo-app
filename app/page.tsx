import Footer from "./components/Footer";
import ThemeSwitch from "./components/ThemeSwitch";
import Form from "./components/Form";
import TodosBody from "./components/TodosBody";
export default function Home() {
  return (
    <main className="h-screen relative ">
      <div className="absolute z-10 left-0 top-0 w-full h-[35%] bg-light-mobile dark:bg-dark-mobile md:bg-light-desktop dark:md:bg-dark-desktop bg-cover" />
      <div className="absolute bottom-0 left-0 w-screen h-screen dark:bg-[#181824] bg-[#fafafa]" />
      <div className="flex justify-evenly mx-auto items-center flex-col h-[750px] w-[85vw] md:h-[750px] md:w-[620px] z-30 h relative md:top-10 ">
        <div className="flex justify-between items-center w-full h-[8%]">
          <h1 className="text-white text-6xl tracking-widest">Todo</h1>
          <ThemeSwitch />
        </div>
        <Form />
        <div className="w-full h-[65%] dark:bg-[#25273c] bg-white rounded-md shadow-2xl flex flex-col justify-between">
          <TodosBody />
          <Footer />
        </div>
      </div>
    </main>
  );
}
