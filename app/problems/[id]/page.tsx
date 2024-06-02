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

export default function Problems() {
  return (
    <main>
      <div className="w-screen">
      <ExcalidrawWrapper />
      </div>
    </main>
  )
}
