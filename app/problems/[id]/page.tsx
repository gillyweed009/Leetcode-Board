"use client"
import dynamic from "next/dynamic";
import { useParams } from "next/navigation"


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
  const params = useParams<{id:string}>()
  const identifier= params.id
  console.log(params.id)
  return (
    <main>
      <div className="w-screen ">
        <ExcalidrawWrapper identifier={identifier} />
      </div>
    </main>
  )
}
