import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="max-w-7xl mx-auto w-full py-5 px-4 flex items-center justify-between border-b-[1px] border-neutral-300">
      <div>
        <h2 className="text-4xl font-extrabold">Py<span className="text-primary">Zon</span></h2>
      </div>

      <nav className="flex items-center gap-4">
        <Link href="/" className="text-lg font-medium">Men</Link>
        <Link href="/" className="text-lg font-medium">Women</Link>
        <Link href="/" className="text-lg font-medium">Electronics</Link>
      </nav>

      <button className="border-x-[1px] border-primary h-full">
        <ShoppingBag/>
      </button>
    </header>
  )
}
