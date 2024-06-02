import { LeetcodeForms } from "@/components/custom/lc-forms"

export default function Problem() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-2 ring-grey ring-opacity-10 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="flex space-x-4">
          <LeetcodeForms />
        </div>
      </div>
    </div>
  )
}
