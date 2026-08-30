export type Treatment = {
  group: string
  title: string
  summary: string
  detail: string
  image: string
}

export type TreatmentCategory = {
  name: string
  treatments: Treatment[]
}

const googleProductCategories: TreatmentCategory[] = [
  {
    name: "Root Canal Treatment",
    treatments: [
      {
        group: "Root Canal Treatment",
        title: "Microscopic Endodontics",
        summary: "Highly precise root canal treatment using advanced magnification and modern endodontic techniques.",
        image: "/images/blog-root-canal-modern.jpg",
        detail:
          "Need a highly precise root canal treatment? Microscopic Endodontics at OralNest Dental Clinic, Wakad combines advanced magnification and modern endodontic techniques to improve accuracy while preserving your natural tooth. A dental operating microscope enables enhanced visualization of tiny root canals, hidden anatomy, fractures, and complex infections that may not be visible to the naked eye. This technology is especially beneficial for complex root canal cases, retreatment of failed root canals, calcified canals, and management of persistent dental infections. Our goal is to provide precise, minimally invasive treatment with long-term success and patient comfort. Conveniently located in Wakad, we serve patients from Hinjawadi, Baner, Balewadi, Tathawade, Punawale, Pimple Saudagar, Ravet, Pimpri-Chinchwad, and Pune. Schedule your consultation today for advanced microscopic root canal treatment focused on precision, preservation, and predictable outcomes.",
      },
      {
        group: "Root Canal Treatment",
        title: "Single Sitting Root Canal Treatment",
        summary: "Advanced single-sitting root canal treatment whenever clinically appropriate.",
        image: "/images/blog-root-canal.jpg",
        detail:
          "Save your natural tooth with advanced single sitting root canal treatment whenever clinically appropriate. Designed to relieve tooth pain, remove infection, and preserve your tooth comfortably using modern endodontic techniques. Ideal for patients with deep decay, sensitivity, or dental infection. Conveniently located in Wakad and serving nearby Hinjawadi, Baner, Balewadi, Tathawade and Pimpri-Chinchwad.",
      },
    ],
  },
  {
    name: "TMJ Treatment",
    treatments: [
      {
        group: "TMJ Treatment",
        title: "TMJ Disorder Treatment",
        summary: "Comprehensive TMJ evaluation and personalized care for jaw pain, clicking and chewing discomfort.",
        image: "/images/blog-dental-tech.jpg",
        detail:
          "Experiencing jaw pain, clicking sounds, difficulty opening your mouth, headaches, facial pain, or discomfort while chewing? These may be signs of a Temporomandibular Joint (TMJ) disorder. At OralNest Dental Clinic, Wakad, we provide comprehensive TMJ evaluation and personalized treatment to identify the underlying cause of your symptoms. Our assessment includes detailed clinical examination, bite analysis, and advanced imaging when indicated to diagnose jaw joint disorders, muscle-related pain, teeth grinding (bruxism), and jaw dysfunction. Treatment focuses on relieving pain, improving jaw movement, restoring function, and enhancing long-term oral health through evidence-based, patient-specific care. Conveniently located in Wakad, we serve patients from Hinjawadi, Baner, Balewadi, Tathawade, Punawale, Pimple Saudagar, Ravet, Pimpri-Chinchwad, and Pune. Schedule your TMJ consultation today for expert diagnosis and effective management of jaw joint disorders.",
      },
    ],
  },
  {
    name: "Oral Medicine",
    treatments: [
      {
        group: "Oral Medicine",
        title: "Oral Cancer Screening",
        summary: "Detailed oral tissue screening for ulcers, patches and suspicious oral changes.",
        image: "/images/blog-checkup.jpg",
        detail:
          "Concerned about a mouth ulcer that isn't healing, white or red patches, burning sensation, or unusual changes inside your mouth? Early detection can significantly improve outcomes. At OralNest Dental Clinic, Wakad, our comprehensive Oral Cancer Screening includes a detailed examination of the lips, tongue, cheeks, gums, palate, and oral tissues to identify potentially malignant or suspicious lesions at an early stage. This evaluation is especially recommended for tobacco users, smokers, alcohol consumers, areca nut (gutkha/pan masala) users, and patients with persistent oral ulcers or unexplained oral symptoms. Conveniently located in Wakad, we serve patients from Hinjawadi, Baner, Balewadi, Tathawade, Punawale, Pimple Saudagar, Ravet, Pimpri-Chinchwad, and Pune. Schedule your oral cancer screening today for expert evaluation, early diagnosis, and timely management by an Oral Medicine Specialist.",
      },
    ],
  },
  {
    name: "Full Mouth Rehabilitation",
    treatments: [
      {
        group: "Full Mouth Rehabilitation",
        title: "Full Mouth Rehabilitation",
        summary: "Comprehensive rehabilitation for multiple missing, damaged, worn or failing teeth.",
        image: "/images/teeth-transformation.jpg",
        detail:
          "Struggling with multiple missing, damaged, worn, or failing teeth? Full Mouth Rehabilitation at OralNest Dental Clinic, Wakad is a comprehensive treatment designed to restore your oral health, chewing efficiency, bite alignment, comfort, and smile aesthetics. Every treatment plan is personalized and may include dental implants, crowns, bridges, root canal treatment, veneers, gum therapy, or full-mouth prosthetic rehabilitation based on your clinical condition. Using advanced digital diagnostics and meticulous treatment planning, we focus on achieving long-lasting function and natural-looking results. Whether your teeth have been affected by decay, trauma, severe wear, or multiple missing teeth, our goal is to help you regain confidence and improve your quality of life. Conveniently located in Wakad, we serve patients from Hinjawadi, Baner, Balewadi, Tathawade, Punawale, Pimple Saudagar, Ravet, Pimpri-Chinchwad, and Pune. Book your comprehensive smile rehabilitation consultation today.",
      },
    ],
  },
  {
    name: "Dental Implants",
    treatments: [
      {
        group: "Dental Implants",
        title: "Dental Implants in Wakad",
        summary: "Personalized implant solutions for single, multiple or full-mouth tooth replacement.",
        image: "/images/blog-implants.jpg",
        detail:
          "Replace missing teeth with advanced dental implants that look, feel, and function like natural teeth. Our personalized implant solutions are designed for long-term stability, improved chewing, and confident smiles. Suitable for single, multiple, or full-mouth tooth replacement after clinical evaluation. Trusted by patients from Wakad, Hinjawadi, Baner, Balewadi, Tathawade, Punawale, Ravet, Pimple Saudagar and Pune.",
      },
    ],
  },
  {
    name: "Teeth Whitening",
    treatments: [
      {
        group: "Teeth Whitening",
        title: "Teeth Whitening in Wakad",
        summary: "Professional teeth whitening for stains from coffee, tea, smoking and aging.",
        image: "/images/blog-whitening-professional.jpg",
        detail:
          "Brighten your smile safely with professional teeth whitening performed under dental supervision. Remove stains caused by coffee, tea, smoking, and aging while protecting your enamel. Ideal before weddings, interviews, special occasions, or smile makeovers. Serving Wakad, Baner, Hinjawadi, Balewadi, Tathawade and surrounding areas.",
      },
    ],
  },
  {
    name: "Dental Crowns",
    treatments: [
      {
        group: "Dental Crowns",
        title: "Zirconia Dental Crowns",
        summary: "Premium zirconia crowns for strength, natural aesthetics and long-lasting performance.",
        image: "/images/blog-dental-tech.jpg",
        detail:
          "Restore damaged teeth with premium zirconia crowns designed for exceptional strength, natural aesthetics, and long-lasting performance. Recommended after root canal treatment or for severely damaged teeth requiring full coverage. Available at OralNest Dental Clinic, Wakad for patients across Pune and Pimpri-Chinchwad.",
      },
    ],
  },
  {
    name: "Oral Surgery",
    treatments: [
      {
        group: "Oral Surgery",
        title: "Wisdom Tooth Removal",
        summary: "Safe and comfortable wisdom tooth removal using diagnostic imaging and precise planning.",
        image: "/images/blog-wisdom-teeth.jpg",
        detail:
          "Experiencing pain, swelling, jaw stiffness, or an impacted wisdom tooth? OralNest Dental Clinic, Wakad offers safe and comfortable wisdom tooth removal using advanced diagnostic imaging and precise surgical techniques. Our comprehensive evaluation includes digital X-rays and CBCT when indicated, allowing accurate treatment planning while prioritizing patient comfort and faster recovery. Whether your wisdom tooth is impacted, infected, partially erupted, causing recurrent pain, gum infection, food lodgement, or damage to adjacent teeth, we provide personalized care based on your clinical needs. Conveniently located in Wakad, we serve patients from Hinjawadi, Baner, Balewadi, Tathawade, Punawale, Pimple Saudagar, Ravet, Pimpri-Chinchwad, and Pune. Schedule your consultation today for expert oral surgery, detailed evaluation, and compassionate care at OralNest Dental Clinic.",
      },
    ],
  },
  {
    name: "Smile Design & Cosmetic Dentistry",
    treatments: [
      {
        group: "Smile Design & Cosmetic Dentistry",
        title: "OralNest Signature Wedding Smile Makeover™",
        summary: "A naturally beautiful, camera-ready smile plan tailored to wedding timelines.",
        image: "/images/blog-smile-transform.jpg",
        detail:
          "Achieve a naturally beautiful, camera-ready smile with the OralNest Signature Wedding Smile Makeover™. Personalized treatment plans may include Digital Smile Design, professional teeth whitening, porcelain veneers, zirconia crowns, clear aligners, and cosmetic smile enhancement based on your goals and wedding timeline. Every smile is carefully planned to complement your facial features while preserving a natural appearance. Our focus is to help you smile confidently in every wedding photograph and create lasting memories with a radiant smile. Available at OralNest Dental Clinic, Wakad, proudly serving patients from Hinjawadi, Baner, Balewadi, Tathawade, Punawale, Pimple Saudagar, Pimpri-Chinchwad, and Pune. Book your Wedding Smile Consultation today and begin your smile transformation with our expert team.",
      },
      {
        group: "Smile Design & Cosmetic Dentistry",
        title: "Digital Smile Design in Wakad",
        summary: "Digital planning that previews a natural-looking smile before treatment begins.",
        image: "/images/teeth-transformation.jpg",
        detail:
          "Transform your smile with personalized Digital Smile Design at OralNest Dental Clinic, Wakad. Using advanced digital planning, we create a preview of your new smile before treatment begins, helping you achieve natural-looking, facially balanced results. Ideal for patients considering veneers, crowns, whitening, or a complete smile makeover. Serving patients from Wakad, Hinjawadi, Baner, Balewadi, Tathawade, Pimple Saudagar, Punawale and across Pimpri-Chinchwad & Pune. Schedule your smile consultation today.",
      },
    ],
  },
  {
    name: "Cosmetic Dentistry",
    treatments: [
      {
        group: "Cosmetic Dentistry",
        title: "Porcelain Veneers",
        summary: "Custom porcelain veneers for chipped, discolored, uneven or worn teeth.",
        image: "/images/blog-smile-transform.jpg",
        detail:
          "Improve the appearance of chipped, discolored, uneven, or worn teeth with custom porcelain veneers. Designed to create a naturally beautiful smile while preserving healthy tooth structure whenever possible. Personalized smile enhancement available at OralNest Dental Clinic, Wakad.",
      },
    ],
  },
  {
    name: "Oral Medicine & Diagnosis",
    treatments: [
      {
        group: "Oral Medicine & Diagnosis",
        title: "Specialist Oral Medicine & Oral Diagnosis",
        summary: "Specialist evaluation of oral mucosal and jaw-related conditions.",
        image: "/images/blog-oral-care.jpg",
        detail:
          "Concerned about a persistent mouth ulcer, white or red patch, burning sensation, oral swelling, unexplained pain, or another unusual change inside your mouth? OralNest Specialist Oral Medicine & Oral Diagnosis provides comprehensive evaluation and management of oral mucosal and jaw-related conditions. Assessment may include clinical examination, digital imaging, CBCT when indicated, and diagnostic investigations to identify the underlying cause. Services include persistent mouth ulcers, oral cancer screening, white and red oral lesions, Oral Submucous Fibrosis (OSMF), Oral Lichen Planus, burning mouth symptoms, oral infections, tobacco-related oral changes, and other oral mucosal disorders. Located in Wakad, Pune, OralNest serves patients from Hinjawadi, Baner, Balewadi, Tathawade, Punawale, Pimple Saudagar, Ravet, Pimpri-Chinchwad, and nearby areas. Book a specialist oral diagnosis consultation for timely evaluation and personalized care.",
      },
    ],
  },
  {
    name: "Invisible Braces",
    treatments: [
      {
        group: "Invisible Braces",
        title: "Invisalign & Clear Aligners",
        summary: "Comfortable, removable and virtually invisible clear aligners for teens and adults.",
        image: "/images/blog-aligners-braces.jpg",
        detail:
          "Straighten your teeth discreetly with clear aligners customized for your smile. Comfortable, removable, and virtually invisible, clear aligners are an excellent option for teens and adults seeking orthodontic treatment without traditional braces.",
      },
    ],
  },
]

export const allTreatments = googleProductCategories.flatMap((category) => category.treatments)

const treatmentByTitle = (title: string) => {
  const treatment = allTreatments.find((item) => item.title === title)

  if (!treatment) {
    throw new Error(`Treatment not found: ${title}`)
  }

  return treatment
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    name: "Pain & Diagnosis",
    treatments: [
      treatmentByTitle("Microscopic Endodontics"),
      treatmentByTitle("Single Sitting Root Canal Treatment"),
      treatmentByTitle("TMJ Disorder Treatment"),
      treatmentByTitle("Oral Cancer Screening"),
      treatmentByTitle("Specialist Oral Medicine & Oral Diagnosis"),
    ],
  },
  {
    name: "Restoration & Surgery",
    treatments: [
      treatmentByTitle("Full Mouth Rehabilitation"),
      treatmentByTitle("Dental Implants in Wakad"),
      treatmentByTitle("Zirconia Dental Crowns"),
      treatmentByTitle("Wisdom Tooth Removal"),
    ],
  },
  {
    name: "Smile & Aligners",
    treatments: [
      treatmentByTitle("Teeth Whitening in Wakad"),
      treatmentByTitle("OralNest Signature Wedding Smile Makeover™"),
      treatmentByTitle("Digital Smile Design in Wakad"),
      treatmentByTitle("Porcelain Veneers"),
      treatmentByTitle("Invisalign & Clear Aligners"),
    ],
  },
]

export const featuredTreatments = [
  "Microscopic Endodontics",
  "Dental Implants in Wakad",
  "TMJ Disorder Treatment",
  "Oral Cancer Screening",
  "Full Mouth Rehabilitation",
  "OralNest Signature Wedding Smile Makeover™",
].map(treatmentByTitle)
