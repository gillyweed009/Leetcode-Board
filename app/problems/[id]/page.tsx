"use client"
import dynamic from "next/dynamic";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
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
// w-screen
export default function Problems() {
  const params:Params=useParams<{id : string}>()
  const identifier:string=params.id
  return (
    <main>
      <div className="w-screen">
      <ExcalidrawWrapper identifier={identifier}/>
      </div>
    </main>
  )
}
