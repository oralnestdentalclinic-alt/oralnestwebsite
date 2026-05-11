import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "3D Digital Scanning",
  "AI Treatment Planning",
  "Painless Precision Dentistry",
  "Faster & Better Results",
]

export function Technology() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - X-Ray Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl">
              {/* Simulated X-Ray Screen */}
              <div className="aspect-[4/3] rounded-2xl bg-slate-900 relative overflow-hidden">
                {/* X-Ray Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* Simulated Dental X-Ray */}
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Background glow */}
                  <defs>
                    <radialGradient id="xrayGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect fill="url(#xrayGlow)" width="400" height="300" />

                  {/* Jawline */}
                  <path
                    d="M50 200 Q100 250 200 250 Q300 250 350 200"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="2"
                    opacity="0.5"
                  />

                  {/* Teeth Row */}
                  {[80, 120, 160, 200, 240, 280, 320].map((x, i) => (
                    <g key={i}>
                      <rect
                        x={x - 15}
                        y={150}
                        width={30}
                        height={50}
                        rx={5}
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="1.5"
                        opacity={0.7}
                      />
                      <rect
                        x={x - 10}
                        y={155}
                        width={20}
                        height={20}
                        rx={3}
                        fill="#14b8a6"
                        opacity={0.2}
                      />
                    </g>
                  ))}

                  {/* Highlight on specific tooth */}
                  <circle
                    cx="200"
                    cy="175"
                    r="25"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                  />

                  {/* Scan lines animation effect */}
                  <rect
                    x="0"
                    y="0"
                    width="400"
                    height="4"
                    fill="#14b8a6"
                    opacity="0.3"
                  >
                    <animate
                      attributeName="y"
                      from="0"
                      to="300"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>

                {/* UI Elements */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-primary font-mono">SCANNING...</span>
                </div>

                <div className="absolute bottom-4 right-4 text-xs text-primary/70 font-mono">
                  AI Analysis: 98.5%
                </div>
              </div>

              {/* Control Panel */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i === 1 ? "bg-primary" : "bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 rounded bg-slate-700 text-xs text-slate-300">
                    2D
                  </div>
                  <div className="px-3 py-1 rounded bg-primary text-xs text-white">
                    3D
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="text-sm font-medium text-primary uppercase tracking-wider">
              Advanced Technology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              AI-Powered Precision
              <br />
              For Perfect Smiles
            </h2>
            <p className="text-muted-foreground">
              We combine advanced AI technology with expert care to deliver
              accurate diagnosis, personalized treatment and beautiful,
              long-lasting results.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6">
              Discover Technology
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
