import { HeroParallax } from '@/components/hero-parallax'
import { AboutContent } from '@/components/about-content'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { BookingsSection } from '@/components/bookings-section'
import { siteContent } from '@/lib/content'

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
  },
  {
    quote:
      "I had a healing session with T'iam'arhat, I have to say it was the most powerful healing I have had, ever! It is difficult to put it into words, it felt as if I was being healed on a level beyond this incarnation. I felt strong divine feminine energy from Isis, amongst many other things. To experience such energies by simply lying on her healing table is very special. She really is a conduit for really powerful beings. I feel like I am on an entirely different timeline, already after just one session. She also used tarot cards to get a read on the progress done on the chakras which was great to understand. All in all, it was a genuine gift to experience such a healing.",
    author: 'Kunal M'
  },
  {
    quote:
      "I was introduced to T'iam'arhat two years ago at what was an extremely challenging point in my life. The help I received has changed my life forever! From clearing blockages, to teaching me how to transmute energy and even giving me a very simple but important message from my father (who passed away in 2020) and helping my 3-year-old daughter to regulate her emotions. I highly recommend her services!",
    author: 'Nicholas G'
  },
  {
    quote:
      "I never felt so peaceful in my life as during and after the healing session with T'iam'arhat. Deeply grateful!",
    author: 'Lee E'
  }
]

function formatWhyParagraph(text: string) {
  return text.replace(/^(Why )([^?]+)(\?)/, (_, why, term, q) => (
    `${why}<em>${term}</em>${q}`
  ))
}

export default function HomePage() {
  const home = siteContent.home

  return (
    <>
      <HeroParallax title={home.title} subtitle={home.subtitle} />
      <div className="hero-column home-body">
        {home.sections.map((paragraph) => (
          <p
            key={paragraph}
            className="home-why"
            dangerouslySetInnerHTML={{ __html: formatWhyParagraph(paragraph) }}
          />
        ))}
      </div>
      <blockquote className="landing-quote">
        "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle." — Albert Einstein
      </blockquote>
      <AboutContent heading />
      <blockquote className="landing-quote">
        "When a living system is suffering from ill health, the remedy is found by connecting with more of itself." — Francisco Varela
      </blockquote>
      <BookingsSection />
      <blockquote className="landing-quote">
        "Love is truth. Truth is love" — Tahkamenon
      </blockquote>
      <TestimonialsCarousel items={testimonials} />
    </>
  )
}
