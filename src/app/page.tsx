"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { CheckCircle, MessageSquare, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="medium"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/vintage-vaping-logotypes-with-letterings-hand-holding-vape-illustration_225004-1868.jpg"
      logoAlt="Jackson Discount Tobacco Logo"
      brandName="Jackson Discount Tobacco"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardCarousel
      background={{
        variant: "plain",
      }}
      title="Welcome to Jackson Discount Tobacco"
      description="Your premier destination for a wide selection of tobacco, vapes, and accessories at unbeatable prices. Quality products and friendly service await you."
      tag="Your Local Tobacco Shop"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Get Directions",
          href: "https://www.google.com/maps/dir/?api=1&destination=Jackson+Discount+Tobacco,3309+US-43,Jackson,AL,36545",
        },
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-man-with-respiratory-problem-having-panic-attack-library_482257-130272.jpg",
          imageAlt: "Interior of Jackson Discount Tobacco shop",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-young-girl-city-with-vape_1157-34821.jpg",
          imageAlt: "Display of colorful vape devices and e-liquids",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/candle-leaves-glass-whiskey_140725-1899.jpg",
          imageAlt: "Premium cigar selection in a wooden humidor",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-chocolate-candy-box-full-candys_633478-1759.jpg",
          imageAlt: "Snuff and chewing tobacco products",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-dry-leaves_23-2148866530.jpg",
          imageAlt: "Pipe tobacco and smoking pipes",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/designers-using-3d-printer_23-2151037114.jpg",
          imageAlt: "Friendly staff assisting a customer at the counter",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="right"
      title="About Jackson Discount Tobacco"
      description="Jackson Discount Tobacco has been serving the local community with dedication and a vast selection of tobacco products, vapes, and accessories. We pride ourselves on offering competitive prices without compromising on quality or customer service. Our friendly and knowledgeable team is always here to help you find exactly what you need."
      bulletPoints={[
        {
          title: "Wide Selection",
          description: "Explore an extensive range of cigars, cigarettes, vapes, e-liquids, and more from top brands.",
        },
        {
          title: "Unbeatable Prices",
          description: "Enjoy significant savings on all your favorite tobacco and vaping products with our discount pricing.",
        },
        {
          title: "Friendly Staff",
          description: "Our team is known for their excellent service, ready to assist you with a smile and expert advice.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-buys-dishes-store_1157-36684.jpg"
      imageAlt="Interior of Jackson Discount Tobacco shop"
      mediaAnimation="opacity"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Vapes & E-Liquids",
          description: "From disposable vapes to advanced mod systems and a huge selection of e-liquid flavors, we have it all.",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-drinking-straws-table_23-2148339462.jpg",
          imageAlt: "Vape devices and e-liquids",
          titleImageSrc: "http://img.b2bpic.net/free-photo/photorealistic-colorful-smoke_23-2151206421.jpg",
          buttonText: "View Vapes",
        },
        {
          title: "Premium Cigars",
          description: "Indulge in our carefully curated collection of premium cigars, offering rich flavors and smooth smokes.",
          imageSrc: "http://img.b2bpic.net/free-photo/chocolate-waffle-sticks_114579-9893.jpg",
          imageAlt: "Premium cigars",
          titleImageSrc: "http://img.b2bpic.net/free-photo/tools-clay-work-sculpting_23-2149986270.jpg",
          buttonText: "Explore Cigars",
        },
        {
          title: "Smoking Accessories",
          description: "Find everything from lighters and ashtrays to rolling papers and pipes, enhancing your experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/hookah-still-life-arrangement_23-2149213293.jpg",
          imageAlt: "Smoking accessories",
          titleImageSrc: "http://img.b2bpic.net/free-photo/front-view-black-case-with-colorful-little-stones-white-floor_140725-14318.jpg",
          buttonText: "Browse Accessories",
        },
      ]}
      title="Our Product Categories"
      description="Discover a diverse range of high-quality products tailored to your preferences, all under one roof."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Advanced Vape Kit",
          price: "$59.99",
          imageSrc: "http://img.b2bpic.net/free-photo/dripper-one-hand-making-cloud-fume_158595-2898.jpg",
          imageAlt: "Advanced Vape Kit",
        },
        {
          id: "p2",
          name: "Finest Hand-Rolled Cigar",
          price: "$12.50",
          imageSrc: "http://img.b2bpic.net/free-photo/hookah-bowl-clipper-dark-background_140725-577.jpg",
          imageAlt: "Finest Hand-Rolled Cigar",
        },
        {
          id: "p3",
          name: "Berry Blast E-Liquid",
          price: "$14.99",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-product-container-with-art-nouveau-inspired-sun-relief-background_23-2151420628.jpg",
          imageAlt: "Berry Blast E-Liquid",
        },
        {
          id: "p4",
          name: "Classic Pipe Tobacco",
          price: "$19.95",
          imageSrc: "http://img.b2bpic.net/free-photo/old-leaf-organic-background-close-up_23-2148872834.jpg",
          imageAlt: "Classic Pipe Tobacco",
        },
        {
          id: "p5",
          name: "Disposable Vape - Mango",
          price: "$11.00",
          imageSrc: "http://img.b2bpic.net/free-photo/png-electronic-cigarettes-isolated-white-background_185193-163232.jpg",
          imageAlt: "Disposable Vape - Mango",
        },
        {
          id: "p6",
          name: "Organic Rolling Papers",
          price: "$3.75",
          imageSrc: "http://img.b2bpic.net/free-photo/cannabis-brownies-cannabis-leaves-put-fabric_1150-28184.jpg",
          imageAlt: "Organic Rolling Papers",
        },
      ]}
      title="Explore Our Top Products"
      description="Browse our best-selling and most popular items, hand-picked for their quality and value."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "deal1",
          badge: "Popular",
          badgeIcon: Sparkles,
          price: "2 for $25",
          subtitle: "Select Mid-Shelf Vapes",
          buttons: [
            {
              text: "Get This Deal",
              href: "#contact",
            },
          ],
          features: [
            "Choose from various brands",
            "Mix and match eligible items",
            "Great value for everyday use",
          ],
        },
        {
          id: "deal2",
          badge: "Premium",
          badgeIcon: Star,
          price: "2 for $45",
          subtitle: "Top-Shelf Vapes & E-Cigs",
          buttons: [
            {
              text: "Get This Deal",
              href: "#contact",
            },
          ],
          features: [
            "Premium brands included",
            "Exclusive flavors available",
            "Superior quality and performance",
          ],
        },
        {
          id: "deal3",
          badge: "Essentials",
          badgeIcon: CheckCircle,
          price: "Buy 3 Get 1 Free",
          subtitle: "On All Accessories",
          buttons: [
            {
              text: "View Offer",
              href: "#contact",
            },
          ],
          features: [
            "Applicable to lighters, papers, coils",
            "Lowest priced item is free",
            "Stock up and save",
          ],
        },
      ]}
      title="Unbeatable Deals & Bundles"
      description="Save more with our special offers and bundled deals on your favorite products."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/shopping-leisure-discounts-concept-smiling-happy-handsome-guy-shopaholic-likes-buying-things-special-offers-holding-bags-with-satisfied-expression-yellow-background_1258-60100.jpg",
          imageAlt: "Sarah J. customer review",
        },
        {
          id: "2",
          name: "Michael C.",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-shopping-mall-talking-phone_23-2148225605.jpg",
          imageAlt: "Michael C. customer review",
        },
        {
          id: "3",
          name: "Emily R.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-mature-customers-meeting-with-agent-giving-signed-insurance-agreement-her_74855-15165.jpg",
          imageAlt: "Emily R. customer review",
        },
        {
          id: "4",
          name: "David K.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-woman-holding-cup-tea-shop_23-2147974699.jpg",
          imageAlt: "David K. customer review",
        },
        {
          id: "5",
          name: "Jessica L.",
          imageSrc: "http://img.b2bpic.net/free-photo/personal-shopper-office-with-client_23-2148929565.jpg",
          imageAlt: "Jessica L. customer review",
        },
      ]}
      cardTitle="What Our Customers Say"
      cardTag="Happy Shoppers"
      cardTagIcon={MessageSquare}
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "What are your operating hours?",
          content: "We are open from 0:30 (12:30 AM) daily. Please call or check our social media for any holiday hours.",
        },
        {
          id: "faq2",
          title: "Do you offer online ordering or delivery?",
          content: "Currently, we operate as a brick-and-mortar store only. Please visit us in person to explore our full selection.",
        },
        {
          id: "faq3",
          title: "What types of payment do you accept?",
          content: "We accept cash, major credit cards (Visa, MasterCard, American Express, Discover), and debit cards.",
        },
        {
          id: "faq4",
          title: "Do you have age restrictions for purchases?",
          content: "Yes, all customers must be 21 years or older to purchase tobacco and vaping products, as per state law. Valid ID is required.",
        },
        {
          id: "faq5",
          title: "Can I return or exchange products?",
          content: "Due to the nature of our products, all sales are final. Please inspect your items carefully before purchase. Exceptions may apply for defective items.",
        },
        {
          id: "faq6",
          title: "Do you carry specific brands not listed?",
          content: "Our inventory is constantly updated. If you're looking for a specific brand, please visit or call us, and we'll be happy to check for you.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our products, store policies, and more."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Visit Us Today"
      tagAnimation="opacity"
      title="Get Directions or Ask a Question"
      description="We are conveniently located in Jackson, AL. Stop by to see our selection or reach out with any inquiries."
      buttons={[
        {
          text: "View on Map",
          href: "https://www.google.com/maps/dir/?api=1&destination=Jackson+Discount+Tobacco,3309+US-43,Jackson,AL,36545",
        },
        {
          text: "Call Us",
          href: "tel:+12512461122",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="http://img.b2bpic.net/free-vector/vintage-vaping-logotypes-with-letterings-hand-holding-vape-illustration_225004-1868.jpg"
      logoAlt="Jackson Discount Tobacco Logo"
      logoText="Jackson Discount Tobacco"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "Products",
              href: "#products",
            },
            {
              label: "About Us",
              href: "#about",
            },
          ],
        },
        {
          title: "Customer Service",
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Reviews",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Jackson Discount Tobacco. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
