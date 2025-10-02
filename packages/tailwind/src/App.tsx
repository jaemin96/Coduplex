import { Button } from "@/components/ui/button";
import Layout from "./app/layout";

function App() {
  return (
    <>
      <Layout>
        <main className="pl-4">
          <div className="text-3xl font-bold underline">
            hello Tailwind + Vite
          </div>
          <Button
            onClick={() => {
              console.log("haha");
            }}
          >
            Click me
          </Button>
        </main>
      </Layout>
    </>
  );
}

export default App;
