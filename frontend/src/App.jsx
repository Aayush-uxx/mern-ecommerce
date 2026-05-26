import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";
import { toast } from "sonner";

function App() {
  return (
    <div className="p-8">
      <Toaster />
      <Button onClick={() => toast.success("Buttton clciked")}>Click Me</Button>
    </div>
  );
}
export default App;
