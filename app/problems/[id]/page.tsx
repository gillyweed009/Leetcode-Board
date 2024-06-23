import dynamic from "next/dynamic";


// Since client components get prerenderd on server as well hence importing
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
  async () =>
    (await import("../../../components/custom/excalidraw-wrapper")).default,
  {
    ssr: false,
  },
);
// w-screen
export default function Problems() {
  const identifier: "hello"="hello"
  return (
    <main>
      <div className="w-screen">
      <ExcalidrawWrapper identifier={identifier}/>
      </div>
    </main>
  )
}
