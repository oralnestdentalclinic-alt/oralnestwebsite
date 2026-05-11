"use client";

import { useState } from "react"
import { ArrowRight, Clock, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"

const posts = [
  {
    category: "Oral Care Tips",
    title: "10 Daily Habits for a Healthy Smile",
    date: "May 10, 2024",
    readTime: "5 min read",
    image: "/images/blog-oral-care.jpg",
    content: [
      "Brush your teeth twice daily with fluoride toothpaste for at least 2 minutes each time.",
      "Floss daily to remove plaque and food particles between teeth where your brush cannot reach.",
      "Limit sugary foods and drinks as sugar feeds bacteria that cause tooth decay.",
      "Drink plenty of water throughout the day to wash away food particles and keep your mouth hydrated.",
      "Replace your toothbrush every 3-4 months or sooner if bristles are frayed.",
      "Visit your dentist regularly for professional cleanings and checkups.",
      "Avoid tobacco products which stain teeth and increase risk of gum disease.",
      "Use mouthwash to kill bacteria and freshen breath.",
      "Eat a balanced diet rich in calcium and vitamin D for strong teeth.",
      "Consider using an electric toothbrush for more effective plaque removal.",
    ],
  },
  {
    category: "Dental Implants",
    title: "Everything You Need to Know About Implants",
    date: "May 05, 2024",
    readTime: "6 min read",
    image: "/images/blog-implants.jpg",
    content: [
      "Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots.",
      "They provide a strong foundation for permanent or removable replacement teeth.",
      "Success rate of dental implants is over 95% when properly maintained.",
      "The procedure typically takes 3-6 months to complete including healing time.",
      "Implants look, feel, and function like natural teeth.",
      "They help preserve jawbone and prevent bone loss that occurs with missing teeth.",
      "Candidates must have healthy gums and adequate bone to support the implant.",
      "Proper oral hygiene is essential for implant longevity.",
      "Implants can last a lifetime with proper care.",
      "They are an excellent investment in your long-term oral health.",
    ],
  },
  {
    category: "Teeth Whitening",
    title: "Teeth Whitening: Myths vs Facts",
    date: "Apr 28, 2024",
    readTime: "4 min read",
    image: "/images/blog-whitening.jpg",
    content: [
      "MYTH: Whitening damages enamel. FACT: Professional whitening is safe and does not harm enamel.",
      "MYTH: Results last forever. FACT: Results typically last 6 months to 2 years depending on habits.",
      "MYTH: All whitening products are the same. FACT: Professional treatments are more effective and safer.",
      "MYTH: Whitening works on all teeth. FACT: Whitening only works on natural teeth, not on crowns or fillings.",
      "MYTH: More whitening product means better results. FACT: Using too much can cause sensitivity.",
      "Professional whitening can lighten teeth by several shades in one session.",
      "At-home treatments take longer but are effective for maintenance.",
      "Sensitivity after whitening is temporary and usually subsides within days.",
      "Avoiding staining foods and drinks helps maintain results.",
      "Regular dental cleanings complement whitening treatments.",
    ],
  },
  {
    category: "Preventive Care",
    title: "Why Regular Dental Checkups Matter",
    date: "Apr 20, 2024",
    readTime: "4 min read",
    image: "/images/blog-checkup.jpg",
    content: [
      "Regular checkups help detect dental problems early when they are easier and cheaper to treat.",
      "Professional cleanings remove tartar buildup that cannot be removed by brushing alone.",
      "Dentists can identify early signs of oral cancer during routine examinations.",
      "X-rays help detect cavities, bone loss, and other issues not visible to the naked eye.",
      "Gum disease can be caught and treated before it leads to tooth loss.",
      "Regular visits help maintain overall oral health and fresh breath.",
      "Dental professionals can provide personalized advice for your specific needs.",
      "Children benefit from early dental visits to establish good habits.",
      "Insurance often covers preventive care, making it cost-effective.",
      "Building a relationship with your dentist makes future treatments less stressful.",
    ],
  },
  {
    category: "Root Canal",
    title: "Modern Root Canal: What to Expect",
    date: "Apr 15, 2024",
    readTime: "5 min read",
    image: "/images/blog-root-canal.jpg",
    content: [
      "Modern root canal procedures are virtually painless thanks to advanced anesthesia.",
      "The treatment saves your natural tooth, avoiding the need for extraction.",
      "Root canals remove infected pulp tissue from inside the tooth.",
      "The procedure typically takes 1-2 visits depending on complexity.",
      "Microscopic root canal technology improves precision and success rates.",
      "Recovery time is minimal, with most patients returning to normal activities the next day.",
      "A crown is usually placed after root canal to protect the treated tooth.",
      "Success rate is over 95% with proper follow-up care.",
      "Warning signs include severe toothache, sensitivity, and swelling.",
      "Delaying treatment can lead to abscess and more serious complications.",
    ],
  },
  {
    category: "Orthodontics",
    title: "Clear Aligners vs Traditional Braces",
    date: "Apr 10, 2024",
    readTime: "5 min read",
    image: "/images/blog-orthodontics.jpg",
    content: [
      "Clear aligners are nearly invisible and removable for eating and cleaning.",
      "Traditional braces are more effective for complex orthodontic cases.",
      "Aligners require discipline to wear 20-22 hours per day.",
      "Treatment time is similar for both options in most cases.",
      "Clear aligners allow you to eat whatever you want without restrictions.",
      "Braces require more frequent adjustments but are working 24/7.",
      "Both options effectively straighten teeth and improve bite alignment.",
      "Cost varies based on treatment complexity and duration.",
      "Retainers are necessary after both treatments to maintain results.",
      "Your orthodontist can recommend the best option for your specific needs.",
    ],
  },
]

function BlogModal({ post, open, onOpenChange }: { post: typeof posts[0], open: boolean, onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 animate-in fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in fade-in-0 zoom-in-95">
          {/* Header Image */}
          <div className="aspect-[2/1] relative overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-primary">
                {post.category}
              </span>
            </div>
            <Dialog.Close className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
              <X className="w-4 h-4 text-foreground" />
            </Dialog.Close>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <Dialog.Title className="text-2xl font-bold text-foreground mb-2">
              {post.title}
            </Dialog.Title>
            <div className="flex items-center gap-3 mb-6 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
            
            {/* Bullet Points */}
            <ul className="space-y-3">
              {post.content.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null)
  
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              From Our Blog
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Tips, Trends & Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              onClick={() => setSelectedPost(post)}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium"
          >
            View All Blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      
      {/* Modal */}
      {selectedPost && (
        <BlogModal
          post={selectedPost}
          open={!!selectedPost}
          onOpenChange={(open) => !open && setSelectedPost(null)}
        />
      )}
    </section>
  )
}
