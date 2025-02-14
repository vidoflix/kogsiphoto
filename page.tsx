"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="w-full p-4 flex justify-between items-center border-b border-gray-800">
        <div className="w-32 h-8 bg-gray-800 rounded flex items-center justify-center">LOGO EDIT</div>
        <div className="flex gap-2">
          {["Portfolio", "Services", "Contact", "À propos"].map((item) => (
            <button key={item} className="px-4 py-1 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors">
              {item}
            </button>
          ))}
        </div>
        <Image
          src="/placeholder.svg?height=100&width=150"
          width={150}
          height={100}
          alt="Camera"
          className="object-contain"
        />
      </header>

      {/* Main Content */}
      <main className="relative p-8">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YnzgupP2Oixhz6Zi68kwcClOuOxPxi.png"
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        {/* Grid */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 gap-6 mt-12">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="group relative bg-gray-800/50 backdrop-blur-sm overflow-hidden">
              <div className="aspect-[3/2] relative">
                <Image
                  src="/placeholder.svg?height=300&width=450"
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <Badge className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600" variant="secondary">
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

