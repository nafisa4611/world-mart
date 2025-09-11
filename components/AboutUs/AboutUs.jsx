import HeroIntro from './HeroIntro';
import StatCards from './StatCards';
import QuoteImageStrip from './QuoteImageStrip';
import PhotoRow from './PhotoRow';
import Testimonials from './Testimonials';
import ClosingCTA from './ClosingCTA';

export default function AboutUs() {
  return (
    <>
      <HeroIntro 
        role="Frontend Developer"
        name="Nafisa Mila"
        bio="Passionate Frontend Developer to make premium look websites"
        avatar="/avatar.jpg"
        bgImage="/shop-hero-bg.jpg"
        ctaLink="/contact"
      />

      <StatCards stats={[
        { number: "7", label: "Years in this field", note: "Delivering quality design consistently." },
        { number: "500+", label: "Clients happy", note: "Satisfied clients worldwide." },
        { number: "650+", label: "Finished works", note: "Projects across multiple industries." },
        { number: "4", label: "Years work", note: "Focused on UI/UX excellence." },
      ]} />

      <QuoteImageStrip 
        quote="Creativity is intelligence having fun."
        author="Robert Fox"
        images={["/team1.jpg","/team2.jpg"]}
      />

      <PhotoRow photos={["/photo1.jpg","/photo2.jpg","/photo3.jpg"]} />

      <Testimonials 
        eyebrow="Seemingly Elegant Design"
        title="Reviews about my work"
        lead="What clients say about collaborating with me."
        testimonials={[
          { rating: 5, review: "Amazing work!", reviewer: "Sarah Connor — Google Inc." },
          { rating: 5, review: "Creative and reliable designer.", reviewer: "John Doe — Apple Inc." },
          { rating: 5, review: "Delivered beyond expectations.", reviewer: "Jane Smith — Microsoft Corp." },
        ]}
      />

      <ClosingCTA 
        headline="I will be glad to work with you!"
        subline="Let's create something amazing together."
        ctaText="Ready to Hire"
        ctaLink="/contact"
        bgImage="/workplace.jpg"
      />
    </>
  );
}
