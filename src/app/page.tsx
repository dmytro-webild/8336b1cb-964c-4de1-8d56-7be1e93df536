"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Suites",
          id: "suites",
        },
        {
          name: "Location",
          id: "location",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Beyoğlu Suites"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="Stay in the Heart of Istanbul — Steps from Istiklal Street"
      description="Luxury suites designed for comfort, privacy, and unforgettable Istanbul experiences."
      buttons={[
        {
          text: "Check Availability",
          href: "#contact",
        },
        {
          text: "Book Direct & Save",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DDwzqjxeS2xLVBfYFHPXBY9S7H/uploaded-1777830741581-titnb8y0.jpg"
      imageAlt="Beyoğlu Suites Hotel exterior at night"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/dining-set-modern-luxury-dining-room_105762-1797.jpg",
          alt: "Guest 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2721.jpg",
          alt: "Guest 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-beautiful-woman-resting-home_7502-9290.jpg",
          alt: "Guest 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg",
          alt: "Guest 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/soft-pastel-hues-room-kids_23-2151690357.jpg",
          alt: "Guest 5",
        },
      ]}
      avatarText="Join 5,000+ happy travelers"
      marqueeItems={[
        {
          type: "text",
          text: "Prime Location",
        },
        {
          type: "text",
          text: "5-Star Service",
        },
        {
          type: "text",
          text: "Modern Amenities",
        },
        {
          type: "text",
          text: "Quiet Privacy",
        },
        {
          type: "text",
          text: "Best Rate Guaranteed",
        },
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "5.0 Guest Rating",
        "10 Steps from Istiklal",
        "Premium Cleanliness",
        "24/7 Guest Support",
        "Luxury Design",
      ]}
      title="Experience Excellence"
      description="Consistently rated 5 stars by our guests."
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="A Boutique Stay in the Heart of Istanbul"
      description="Beyoğlu Suites Hotel offers modern, fully equipped suites designed for travelers who want both comfort and location. Whether you’re visiting for business or leisure, our apartments provide a private, quiet escape just steps away from the energy of Taksim."
      bulletPoints={[
        {
          title: "Prime Location",
          description: "Located in the heart of the Beyoğlu district.",
        },
        {
          title: "Modern Comfort",
          description: "Fully equipped rooms with latest amenities.",
        },
        {
          title: "Privacy Assured",
          description: "Quiet, private space for your Istanbul stay.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/lifestyle-people-living-boho-interiors_23-2149662241.jpg"
      imageAlt="Beyoğlu Suites Hotel interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="suites" data-section="suites">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "suite-1",
          name: "Deluxe Studio Suite",
          price: "From $180/night",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2065.jpg",
          imageAlt: "Deluxe Studio Suite",
        },
        {
          id: "suite-2",
          name: "Executive 1+1 Suite",
          price: "From $250/night",
          imageSrc: "http://img.b2bpic.net/free-photo/sharing-ideas-with-pretty-girlfriend_1098-15697.jpg",
          imageAlt: "Executive 1+1 Suite",
        },
        {
          id: "suite-3",
          name: "Panorama Suite",
          price: "From $320/night",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-smiling-caucasian-woman-traveller-fitting-dress-sunglasses-high-floor-bangkok_343596-1438.jpg",
          imageAlt: "Panorama Suite",
        },
        {
          id: "suite-4",
          name: "Premium Studio",
          price: "From $210/night",
          imageSrc: "http://img.b2bpic.net/free-photo/bed-pillow_74190-129.jpg",
          imageAlt: "Premium Studio",
        },
        {
          id: "suite-5",
          name: "City View Suite",
          price: "From $280/night",
          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-modern-bedroom-with-comfortable-bedding-elegant-decor-generated-by-ai_188544-29870.jpg",
          imageAlt: "City View Suite",
        },
        {
          id: "suite-6",
          name: "Family Suite",
          price: "From $350/night",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-dining-set-modern-luxury-dining-room_105762-1798.jpg",
          imageAlt: "Family Suite",
        },
      ]}
      title="Luxury Suite Collection"
      description="Find your perfect space in Istanbul."
    />
  </div>

  <div id="love" data-section="love">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Cleanliness",
          description: "Strict premium cleanliness standards in all suites.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-caucasian-female-with-long-blonde-hair-nice-face-bright-earrings-white-suit_132075-9619.jpg",
        },
        {
          title: "Location",
          description: "Steps away from Istiklal Street and Taksim.",
          imageSrc: "http://img.b2bpic.net/free-photo/bride-with-dress-room_1153-1072.jpg",
        },
        {
          title: "Friendly Staff",
          description: "Helpful team available 24/7 for you.",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-shot-luxurious-house-dining-room_181624-10412.jpg",
        },
      ]}
      title="Why Guests Love Us"
      description="Experience Istanbul like a local."
    />
  </div>

  <div id="location" data-section="location">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "1 Min",
          title: "Istiklal Street",
          description: "Just steps away.",
          imageSrc: "http://img.b2bpic.net/free-photo/city-street-night-valencia-spain_1398-2409.jpg",
        },
        {
          id: "m2",
          value: "3 Min",
          title: "Taksim Square",
          description: "The heart of the city.",
          imageSrc: "http://img.b2bpic.net/free-photo/hammocks-overlooking-city_1203-696.jpg",
        },
        {
          id: "m3",
          value: "10 Min",
          title: "Galata Tower",
          description: "Historical landmark nearby.",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-slim-african-american-model-wear-black-blouse-green-long-legs-pants-posed-chinese-cafe_627829-5911.jpg",
        },
      ]}
      title="Walk Everywhere"
      description="Strategically located in Beyoğlu."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Perfect location, clean rooms, highly recommended. The staff were extremely helpful and kind during our entire stay. It truly felt like a home in Istanbul."
      rating={5}
      author="Sarah Johnson, CEO"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-home-doing-her-beauty-routine_23-2150420952.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-bathrobe-reading-magazine-while-relaxing-beauty-spa-looking-camera_637285-7434.jpg",
          alt: "Michael",
        },
        {
          src: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe-with-shopping-bags_1157-31449.jpg",
          alt: "Emily",
        },
        {
          src: "http://img.b2bpic.net/free-photo/caucasian-woman-sunglasses-with-view-barcelona-background-spain_1268-18046.jpg",
          alt: "David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-inspired-elderly-woman-with-orange-backpack-sporty-woman-casual-clothes-looking-forward-with-smile-sport-adventure-hobby-concept_74855-23347.jpg",
          alt: "Elena",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="booking" data-section="booking">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          name: "Standard Booking",
          price: "Standard Rate",
          features: [
            "Best available price",
            "Instant confirmation",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
        },
        {
          id: "p2",
          name: "Direct Advantage",
          price: "Exclusive Benefits",
          features: [
            "Free early check-in",
            "Priority room selection",
          ],
          buttons: [
            {
              text: "Book Direct",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Direct Booking Advantage"
      description="Book direct for exclusive benefits."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Check-in / Check-out?",
          content: "14:00 - 12:00",
        },
        {
          id: "q2",
          title: "Location central?",
          content: "Yes, steps from Taksim Square.",
        },
        {
          id: "q3",
          title: "Airport Transfer?",
          content: "Yes, available upon request.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Rooms",
              href: "#suites",
            },
          ],
        },
        {
          items: [
            {
              label: "Location",
              href: "#location",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Beyoğlu Suites Hotel"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
