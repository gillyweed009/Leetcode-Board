// import { Button } from "@/components/ui/button"
// import { ModeToggle } from "@/components/mode-toggle"
//
// export default function Home() {
//   return (
//     <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
//       <div className="relative px-6 pt-10 pb-8 shadow-xl ring-2 ring-grey ring-opacity-10 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
//         <div className="flex space-x-4">
//           <Button className="bg-green-500 hover:bg-green-600 dark:bg-blue-700 dark:hover:bg-blue-600">
//             Hello
//           </Button>
//           <ModeToggle />
//         </div>
//       </div>
//     </div>
//   )
// }
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-2 ring-grey ring-opacity-10 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold">Welcome to my digital sanctuary...</h1>
          <p className="text-center">
            Discover a variety of features and tools we offer. Navigate through our site to find forms, resources, and much more. We aim to provide the best user experience for all your needs.
          </p>
          <Image
            src="/bleach.jpg"
            alt="Welcome Image"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div className="flex space-x-4">
            <Link href="/problems">
              <Button className="bg-green-500 hover:bg-green-600 dark:bg-blue-700 dark:hover:bg-blue-600">
                Go to Forms Page
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
