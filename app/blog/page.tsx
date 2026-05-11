import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Blog } from "@/components/blog"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tips, Trends & <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest dental health tips, treatment updates, 
              and expert insights from our team.
            </p>
          </div>
        </div>
      </section>

      <Blog />
      <Footer />
    </main>
  )
}
