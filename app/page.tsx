import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-2 ring-grey ring-opacity-10 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="flex space-x-4">
          <Button className="bg-green-500 hover:bg-green-600 dark:bg-blue-700 dark:hover:bg-blue-600">
            Hello
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
