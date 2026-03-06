// Mock data for Maybeify Publication House

export const publishedBooks = [
  {
    id: 1,
    title: "Revealing The Dark Realities : Analysing The Crime In India And The POCSO Act 2012",
    author: "Ashmeet Kaur",
    genre: "Crime Stats",
    coverImage: "https://m.media-amazon.com/images/I/71FM-2EYmXL._SL1500_.jpg",
    amazonLink: "https://amzn.in/d/0bnciNzd",
    rating: 4.7,
    reviews: 112,
    description: "The POCSO Act and its function in preventing crimes against children are thoroughly examined in this book, which also addresses potential problems and makes suggestions for enhancements to a child protection system."
  },
  {
    id: 2,
    title: "Art Of Mind",
    author: "Deborah Tungnung",
    genre: "Mental-Wellness",
    coverImage: "https://m.media-amazon.com/images/I/61HjNK0PzvL._SL1500_.jpg",
    amazonLink: "https://www.amazon.in/Art-Mind-Deborah-M-Tungnung/dp/B0CL1T4KBP",
    rating: 4.8,
    reviews: 148,
    description: "An inspiring journey through self-discovery and personal growth."
  },
  {
    id: 3,
    title: "तुम और तुम्हारी बातें: एक पूजा, एक इबादत",
    author: "Kaish Siddiqui",
    genre: "Poetry",
    coverImage: "https://m.media-amazon.com/images/I/718XI6k3T2L._SL1500_.jpg",
    amazonLink: "https://amzn.in/d/02GGIqTv",
    rating: 4.2,
    reviews: 128,
    description: "Immerse yourself in this enchanting anthology of Hindi poetry that beautifully captures the essence of love, devotion, and unspoken emotions."
  },
  {
    id: 4,
    title: "Embers of Musings",
    author: "Aranyaa Pattnaik",
    genre: "Poetry",
    coverImage: "https://m.media-amazon.com/images/I/712rSbZYygL._SL1500_.jpg",
    amazonLink: "https://amzn.in/d/034LykKM",
    rating: 5,
    reviews: 174,
    description: "This book depicts love, resilience, and raw introspection - a safe zone where thoughts can be spoken without fear of being judged. "
  }
];

export const featuredAuthors = [
  {
    id: 1,
    name: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Bestselling author with 5 published novels, specializing in historical fiction.",
    booksPublished: 5,
    genre: "Historical Fiction"
  },
  {
    id: 2,
    name: "James Anderson",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "Award-winning writer focusing on personal development and motivational literature.",
    booksPublished: 8,
    genre: "Self-Help"
  },
  {
    id: 3,
    name: "Emily Clarke",
    image: "https://images.unsplash.com/photo-1722371131066-e37037ecf109",
    bio: "Contemporary poet and literary critic with works featured in major publications.",
    booksPublished: 3,
    genre: "Poetry"
  }
];

export const testimonials = [
  {
    id: 1,
    author: "Sarah Mitchell",
    role: "Fiction Author",
    content: "Maybeify transformed my manuscript into a beautiful published book. Their professionalism and attention to detail are unmatched. The entire process was smooth and transparent.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    id: 2,
    author: "James Anderson",
    role: "Self-Help Author",
    content: "Working with Maybeify was the best decision for my writing career. They guided me through every step and helped me reach a wider audience. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    id: 3,
    author: "Emily Clarke",
    role: "Poet",
    content: "The team at Maybeify understood my vision perfectly. They brought my poetry collection to life with stunning design and excellent marketing support.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1722371131066-e37037ecf109"
  },
  {
    id: 4,
    author: "Michael Chen",
    role: "Academic Writer",
    content: "Exceptional service from start to finish. Maybeify's editorial team enhanced my work while preserving my voice. The final product exceeded all expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  }
];

export const packages = [
  {
    id: 1,
    name: "STANDARD",
    price: "₹5,499",
    description: "Perfect for first-time authors",
    features: [
      "Premium editing & proofreading",
      "Custom cover design",
      "ISBN registration",
      "Print + eBook formatting",
      "Multi-platform distribution",
      "Marketing support",
      "Author copies (5 books)",
      "Social media promotion"
    ],
    popular: false
  },
  {
    id: 2,
    name: "PLUS",
    price: "₹7,499",
    description: "Most popular choice for serious authors",
    features: [
      "Premium editing & proofreading",
      "Custom cover design",
      "ISBN registration",
      "Print + eBook formatting",
      "Multi-platform distribution",
      "Marketing support",
      "Author copies (5 books)",
      "Social media promotion"
    ],
    popular: true
  },
  {
    id: 3,
    name: "PRO",
    price: "₹14,499",
    description: "Complete publishing solution",
    features: [
      "Comprehensive editing",
      "Premium cover design",
      "ISBN registration",
      "Print + eBook + Audiobook",
      "Global distribution",
      "Full marketing campaign",
      "Author website",
      "Author copies (10 books)",
      "Book launch event",
      "PR & media outreach"
    ],
    popular: false
  }
];

export const howItWorksSteps = [
  {
    id: 1,
    step: "01",
    title: "Submit Your Manuscript",
    description: "Send us your manuscript along with your vision and genre. We'll review it and get back to you within 48 hours."
  },
  {
    id: 2,
    step: "02",
    title: "Choose Your Package",
    description: "Select the publishing package that best fits your needs and budget. Our team will guide you through the options."
  },
  {
    id: 3,
    step: "03",
    title: "Professional Editing",
    description: "Our expert editors will work with you to refine your manuscript while preserving your unique voice."
  },
  {
    id: 4,
    step: "04",
    title: "Design & Formatting",
    description: "We create stunning cover designs and format your book for both print and digital platforms."
  },
  {
    id: 5,
    step: "05",
    title: "Publication & Distribution",
    description: "Your book goes live on Amazon and other platforms. We handle all technical aspects of distribution."
  },
  {
    id: 6,
    step: "06",
    title: "Marketing & Promotion",
    description: "We help promote your book through our marketing channels and guide you on building your author brand."
  }
];

export const contestInfo = {
  name: "LITX AWARDS 2026",
  tagline: "Celebrating Literary Excellence",
  description: "Submit your best work and compete with talented authors nationwide. Winners receive cash prizes, e-books, and e-certificates.",
  prizes: [
    { position: "1st Prize", amount: "₹1,500", color: "#C9A961" },
    { position: "2nd Prize", amount: "₹700", color: "#A8A8A8" },
    { position: "3rd Prize", amount: "₹300", color: "#CD7F32" }
  ],
  additionalBenefits: [
    "E-book to all participating authors",
    "E-certificate to all participants",
    "Feature in Maybeify newsletter",
    "Publication opportunity for winners"
  ],
  contactEmail: "contestmaybeify@gmail.com"
};

export const socialMediaLinks = {
  instagram: "https://www.instagram.com/_.maybeify?utm_source=qr&igsh=MTA5YTVkM3hvazMxYQ%3D%3D",
  facebook: "https://facebook.com/maybeify",
  linkedin: "https://www.linkedin.com/company/maybeify/"
};
