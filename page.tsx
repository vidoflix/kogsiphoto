"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Header */}
      <header className="w-full bg-[#000000] p-6 flex justify-between items-center">
        <div className="w-36 h-10 bg-[#f3f3f3] rounded flex items-center justify-center text-black">LOGO EDIT</div>
        <div className="flex gap-3">
          {["Portfolio", "Services", "Contact", "À propos"].map((item) => (
            <button
              key={item}
              className="px-6 py-1.5 rounded-full bg-[#6B4D85] text-white hover:bg-[#7e5c99] transition-colors text-sm"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-[200px] h-[120px] relative">
          <Image src="/placeholder.svg?height=120&width=200" alt="Camera" fill className="object-contain" />
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full min-h-[calc(100vh-180px)] relative">
        {/* Background Image */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YnzgupP2Oixhz6Zi68kwcClOuOxPxi.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Grid */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 gap-8 p-8">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="group relative bg-[#f3f3f3] rounded-lg overflow-hidden">
              <div className="aspect-[3/2] relative">
                <Image src="/placeholder.svg?height=300&width=450" alt={`Gallery ${i}`} fill className="object-cover" />
                <Badge
                  className="absolute bottom-4 right-4 bg-[#4CAF50] hover:bg-[#45a049] text-white"
                  variant="secondary"
                >
                  K
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

