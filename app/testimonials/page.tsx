import { TestimonialsCarousel } from '@/components/testimonials-carousel'

const testimonials = [
  {
    quote: "Amazing healing with T'iam'arhat that cannot describe in words. I am forever grateful.",
    author: 'Marco B'
  },
  {
    quote:
      "I've been seeing T'iam'arhat for healing for a few years now and every session blows me away. Her healing range is incredible - nothing seems to be off limits for her. I've experienced health issues resolving spontaneously, puzzling the medical professionals, ancestral healing, past life trauma healing, soul fragment retrieval, implant removal, Galactic consciousness activation, and so much more. After each session I feel reborn, with flow and synchronicities flooding back into my life. Thank you, T'iam'arhat, for all the magic you brought into my life.",
    author: 'Claire P'
  },
  {
    quote:
      "T'iam'arhat was recommended to me by a psychic reader that I used to see regularly, who spoke very highly of her. I was still recovering from a painful breakup and betrayal at the time, struggling to find trust with a new man I was seeing. I was also stuck in a job I've outgrown, lacking courage and motivation to pursue my passion. After two sessions with T'iam'arhat, I was full of clarity, vitality, inspiration and peace. I left the job to build my own business as if it was a piece of cake. My new relationship also blossomed, and I'm now happily married with two beautiful children. So I feel it's no exaggeration to say that healing with T'iam'arhat has changed my life.",
    author: 'Emma S'
  },
  {
    quote:
      "I booked a session with T'iam'arhat on a friend's recommendation. I didn't know what to expect as I never had an energy healing before. I felt a lot of heat and other sensations during the session and had a significant shift in myself afterwards. I was calmer and kinder towards myself and others. The tension in my family dynamics magically dissolved somehow. During the session, she was spot on about the places where I had aches and pains in my body, which all disappeared after the session. Everything she was saying felt like exactly what I needed to hear. She also uncannily knew my self-sabotaging thought patterns, like she was reading my mind. Her knowledge, wisdom and compassion are deeply inspiring. I cannot recommend her strongly enough.",
    author: 'Natasha K'
  },
  {
    quote:
      "Had the most incredible session with T'iam'arhat. It was like a combination of Egyptian, Shamanic and Galactic ancestral healing all in one. I removed so much stuck, lower vibrational energy, trauma and released karmic soul contracts. I feel so much lighter, happier and free and have so much more energy and peace in my life.",
    author: 'Ash K'
  },
  {
    quote:
      "I had a session with T'iam'arhat, and it was a powerful experience. She's warm, professional and instantly puts you at ease. Her energy work is deeply effective, leaving me feeling lighter and more grounded. I couldn't recommend her more highly.",
    author: 'Steve B'
  }
]

export default function TestimonialsPage() {
  return (
    <main aria-label="Testimonials page">
      <section className="content-section">
        <div className="container narrow">
          <h1>Testimonials</h1>
        </div>
      </section>
      <TestimonialsCarousel items={testimonials} />
    </main>
  )
}
