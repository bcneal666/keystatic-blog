import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-foreground">Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
}
