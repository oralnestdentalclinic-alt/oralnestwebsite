"use client";

import { useState } from "react"
import { ArrowRight, Clock, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"

const posts = [
  {
    category: "Dental Awareness",
    title: "Myth vs Fact | Dental Awareness Series",
    date: "May 15, 2024",
    readTime: "7 min read",
    image: "/images/blog-myth-fact.jpg",
    content: [
      "Myth: Dental Treatments Are Always Painful | Fact: Contemporary Dentistry Is Designed Around Precision, Comfort, And Pain Control",
      "Modern dentistry uses advanced anesthesia techniques that make most procedures virtually painless.",
      "The fear of pain often causes patients to delay treatment, making conditions more complex and difficult to manage.",
      "Early intervention typically results in faster recovery and easier treatment compared to treating advanced dental problems.",
      "Scientific advancement has dramatically improved local anesthesia effectiveness and minimally invasive approaches.",
      "Untreated dental infections tend to progress rather than stabilize, causing more suffering over time.",
      "Small cavities can evolve into nerve infections if left untreated for extended periods.",
      "Mild gum inflammation may progress to serious periodontal disease without proper dental care.",
      "Many patients report that anticipatory anxiety was worse than the actual modern dental procedure.",
      "At OralNest Dental Clinic, we prioritize patient comfort through advanced pain management and precision diagnostics.",
    ],
  },
  {
    category: "Oral Health",
    title: "Understanding Dental Infections and Early Prevention",
    date: "May 12, 2024",
    readTime: "6 min read",
    image: "/images/blog-infections.jpg",
    content: [
      "Dental infections begin small but grow progressively if left untreated without proper intervention.",
      "Early detection through regular checkups can prevent serious complications and expensive treatments.",
      "Bacterial growth in cavities can reach the pulp chamber, causing severe infections and abscess formation.",
      "Symptoms of dental infection include severe toothache, sensitivity to temperature, and facial swelling.",
      "Root canal treatment becomes necessary when infection reaches the tooth pulp and nerve tissues.",
      "Prevention is always more effective and affordable than treating advanced dental infections.",
      "Maintaining excellent oral hygiene significantly reduces your risk of bacterial infections.",
      "Professional cleanings remove tartar buildup that regular brushing cannot eliminate.",
      "Timely treatment of infections prevents them from spreading to adjacent teeth and bone structures.",
      "Modern diagnostic imaging allows dentists to detect infections early before symptoms appear.",
    ],
  },
  {
    category: "Cosmetic Dentistry",
    title: "Transform Your Smile With Modern Cosmetic Solutions",
    date: "May 08, 2024",
    readTime: "5 min read",
    image: "/images/blog-smile-transform.jpg",
    content: [
      "Cosmetic dentistry combines aesthetics with function to create beautiful, natural-looking smiles.",
      "Modern cosmetic treatments can address discoloration, misalignment, and tooth shape irregularities.",
      "Smile makeovers consider your facial features, skin tone, and personal preferences for optimal results.",
      "Dental veneers provide a durable solution for stained or damaged teeth with minimal preparation.",
      "Teeth whitening can safely lighten your smile by several shades with professional treatments.",
      "Composite bonding offers an affordable option for closing gaps and fixing minor imperfections.",
      "Gum contouring adjusts the gum line to create a more balanced and aesthetically pleasing smile.",
      "Digital smile design technology allows patients to preview their results before treatment begins.",
      "Cosmetic treatments enhance confidence and improve overall quality of life for many patients.",
      "At OralNest, we customize every cosmetic solution to match your unique facial characteristics and goals.",
    ],
  },
  {
    category: "Implants",
    title: "Dental Implants: The Gold Standard for Missing Teeth",
    date: "May 05, 2024",
    readTime: "6 min read",
    image: "/images/blog-implants-standard.jpg",
    content: [
      "Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots.",
      "Implants provide the most natural-looking and functional solution for tooth replacement available today.",
      "The success rate of dental implants exceeds 95% when properly maintained with good oral hygiene.",
      "Implants function like natural teeth, allowing you to eat, speak, and smile with complete confidence.",
      "The implant procedure typically takes 3-6 months including bone integration and healing time.",
      "Unlike dentures, implants do not require daily removal or special cleaning solutions.",
      "Implants preserve jawbone structure and prevent bone loss that occurs with missing teeth.",
      "Candidates require healthy gums and adequate bone density to support successful implant placement.",
      "Implants can last a lifetime with proper maintenance and regular professional care.",
      "Professional implant dentistry at OralNest ensures optimal placement and long-term success rates.",
    ],
  },
  {
    category: "Orthodontics",
    title: "Clear Aligners vs Traditional Braces: Which Is Right for You?",
    date: "Apr 30, 2024",
    readTime: "5 min read",
    image: "/images/blog-aligners-braces.jpg",
    content: [
      "Clear aligners are nearly invisible removable trays that gradually straighten teeth without metal brackets.",
      "Traditional braces use metal wires and brackets that work continuously to move teeth into alignment.",
      "Aligners require discipline as they must be worn 20-22 hours daily for optimal results.",
      "Braces work 24/7 and require periodic adjustments throughout the treatment period.",
      "Both options effectively straighten teeth and improve bite alignment in similar timeframes.",
      "Clear aligners allow you to eat whatever you want without dietary restrictions.",
      "Braces require avoiding certain foods to prevent damage to brackets and wires.",
      "Treatment cost varies based on complexity and severity of orthodontic issues.",
      "Retainers are necessary after both treatments to maintain your beautiful straight smile.",
      "Consult with our orthodontists to determine which option best suits your lifestyle and goals.",
    ],
  },
  {
    category: "Root Canal",
    title: "Modern Root Canal Treatment: Saving Your Natural Tooth",
    date: "Apr 25, 2024",
    readTime: "6 min read",
    image: "/images/blog-root-canal-modern.jpg",
    content: [
      "Modern root canal procedures are virtually painless thanks to advanced anesthesia and microscopic technology.",
      "Root canal treatment saves your natural tooth by removing infected pulp tissue from inside the tooth.",
      "The procedure typically requires 1-2 visits depending on the complexity of the infection.",
      "Microscopic root canal technology improves precision and significantly increases success rates.",
      "Recovery time is minimal, with most patients returning to normal activities the next day.",
      "A protective crown is usually placed after root canal to strengthen and seal the treated tooth.",
      "Warning signs include severe toothache, temperature sensitivity, and facial swelling or discomfort.",
      "Delaying treatment can lead to abscess formation and more serious systemic complications.",
      "Root canal therapy has a success rate exceeding 95% with proper follow-up care and maintenance.",
      "At OralNest, we use state-of-the-art equipment and techniques to ensure optimal treatment outcomes.",
    ],
  },
  {
    category: "Preventive Care",
    title: "The Importance of Regular Dental Checkups and Cleanings",
    date: "Apr 20, 2024",
    readTime: "5 min read",
    image: "/images/blog-preventive-care.jpg",
    content: [
      "Regular checkups help detect dental problems early when they are easier and significantly more affordable.",
      "Professional cleanings remove tartar buildup that cannot be removed by regular home brushing alone.",
      "Dentists can identify early signs of oral cancer during routine comprehensive examinations.",
      "Digital X-rays help detect cavities, bone loss, and other issues not visible to the naked eye.",
      "Gum disease can be caught and effectively treated before it leads to progressive tooth loss.",
      "Regular visits help maintain optimal oral health and fresh breath throughout your life.",
      "Dental professionals provide personalized advice and treatment recommendations for your specific needs.",
      "Children benefit tremendously from early dental visits to establish positive lifelong habits.",
      "Insurance often covers preventive care, making it a cost-effective investment in your health.",
      "Building a relationship with your dentist makes future treatments less stressful and more comfortable.",
    ],
  },
  {
    category: "Teeth Whitening",
    title: "Professional Teeth Whitening: Achieve Your Brightest Smile",
    date: "Apr 15, 2024",
    readTime: "4 min read",
    image: "/images/blog-whitening-professional.jpg",
    content: [
      "Professional teeth whitening is safe and does not damage enamel when performed by qualified dentists.",
      "Professional treatments are significantly more effective than over-the-counter products available commercially.",
      "Results typically last 6 months to 2 years depending on your diet and lifestyle habits.",
      "Whitening only works on natural teeth, not on existing crowns, fillings, or bridges.",
      "Professional whitening can lighten teeth by several shades in just one treatment session.",
      "Using too much whitening product can cause temporary tooth sensitivity and gum irritation.",
      "At-home treatments take longer but are effective for maintaining professional whitening results.",
      "Sensitivity after whitening is temporary and usually subsides within a few days.",
      "Avoiding staining foods and drinks like coffee, tea, and red wine helps maintain results.",
      "Regular dental cleanings and good oral hygiene complement whitening treatments beautifully.",
    ],
  },
  {
    category: "Gum Health",
    title: "Periodontal Disease: Prevention and Treatment Options",
    date: "Apr 10, 2024",
    readTime: "5 min read",
    image: "/images/blog-gum-health.jpg",
    content: [
      "Periodontal disease is a serious infection affecting the gums and supporting bone structures.",
      "Early symptoms include red, swollen gums that bleed easily during brushing or flossing.",
      "Advanced gum disease can lead to tooth mobility, severe discomfort, and eventual tooth loss.",
      "Professional deep cleaning removes bacterial buildup below the gum line that cannot be reached at home.",
      "Regular flossing is essential for preventing periodontal disease and maintaining gum health.",
      "Smoking significantly increases your risk of developing serious gum disease complications.",
      "Timely treatment can reverse early stages of gum disease and prevent progression.",
      "Maintenance therapy after treatment helps control bacterial growth and preserve teeth.",
      "Proper oral hygiene combined with regular professional care is the best prevention strategy.",
      "Our periodontal specialists at OralNest provide comprehensive gum disease treatment and management.",
    ],
  },
  {
    category: "Dental Technology",
    title: "Advanced Dental Technology: Improving Your Treatment Experience",
    date: "Apr 05, 2024",
    readTime: "6 min read",
    image: "/images/blog-dental-tech.jpg",
    content: [
      "Digital imaging technology provides detailed 3D views of your teeth and jaw structures.",
      "Intraoral cameras allow dentists to show you exactly what they see during examination.",
      "CAD/CAM technology enables same-day crown and bridge fabrication without waiting for a lab.",
      "Laser dentistry provides precise treatment with minimal discomfort and faster healing times.",
      "Electric toothbrushes are significantly more effective at removing plaque than manual brushes.",
      "Air abrasion technology removes decay gently without vibration or drilling sounds.",
      "Digital smile design helps you preview cosmetic results before committing to treatment.",
      "Ultrasonic scalers efficiently remove tartar and bacterial buildup from tooth surfaces.",
      "Advanced anesthesia techniques ensure comfort during even the most complex procedures.",
      "At OralNest, we invest in cutting-edge technology to provide superior patient care and outcomes.",
    ],
  },
  {
    category: "Lifestyle Dentistry",
    title: "Night Shifts, Sleep Disruption, And Bad Breath — The Oral Health Connection",
    date: "Mar 25, 2024",
    readTime: "7 min read",
    image: "/images/blog-night-shift-health.jpg",
    content: [
      "Night shift work disrupts circadian rhythms, leading to reduced saliva production and persistent bad breath.",
      "Saliva plays a critical protective role by washing away bacteria and neutralizing harmful acids in the mouth.",
      "During prolonged night work, dehydration, caffeine intake, and stress significantly reduce salivary flow.",
      "Irregular sleep cycles and mouth breathing create an ideal environment for odor-producing bacteria.",
      "Bad breath from night shifts may indicate underlying gum disease or plaque accumulation requiring treatment.",
      "Evidence-based prevention includes maintaining hydration, tongue cleaning, and avoiding sugary caffeinated drinks.",
      "Regular professional teeth cleaning helps remove tartar buildup that accumulates during shift work.",
      "Scheduling dental checkups specifically for early gum disease detection is important for night shift workers.",
      "Brushing before sleep regardless of shift timing helps maintain oral health despite irregular schedules.",
      "Modern preventive dentistry recognizes lifestyle-related oral disease patterns from occupational stress and disruption.",
    ],
  },
  {
    category: "Dental Awareness",
    title: "Wisdom Teeth Problems Often Begin Long Before Severe Pain Appears",
    date: "Mar 20, 2024",
    readTime: "6 min read",
    image: "/images/blog-wisdom-teeth.jpg",
    content: [
      "Wisdom tooth complications frequently develop silently for months or years before producing obvious symptoms.",
      "Modern human jaws are often smaller than earlier populations while wisdom teeth continue erupting naturally.",
      "This mismatch between available space and eruptive force creates the foundation for many third molar complications.",
      "Pericoronitis is inflammation and bacterial infection around partially erupted wisdom teeth trapping food debris.",
      "Patients often ignore early signs like mild intermittent discomfort, occasional swelling, or difficulty cleaning.",
      "Symptoms may fluctuate temporarily, causing many individuals to postpone evaluation until acute infection develops.",
      "Early assessment allows monitoring of eruption patterns and identification of hidden pathology before progression.",
      "Timely evaluation prevents adjacent tooth damage and reduces risk of severe infection developing later.",
      "Wisdom teeth may remain asymptomatic while contributing to silent decay, gum disease, or bone complications.",
      "Modern evidence-based dentistry emphasizes individualized clinical evaluation rather than universal extraction or neglect.",
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
