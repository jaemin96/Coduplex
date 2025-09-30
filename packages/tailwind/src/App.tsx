import { Button } from "@/components/ui/button"

function App() {
  return (
    <>
      <div className="text-3xl font-bold underline">hello Tailwind + Vite</div>
      <Button onClick={() => {
        console.log("haha");
      }}>Click me</Button>
    </>
  );
}

export default App;
