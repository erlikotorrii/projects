import HeroSection from "./HeroSection"
import IndustriesWeServeSection from "./IndustriesWeServeSection";
import IsoCertificationSection from "./IsoCertificationSection";
import JoinSection from "./JoinSection";
import LeadershipSection from "./LeadershipSection";
import LoopVideoSection from "./LoopVideoSection";
import NewsletterSection from "./NewsletterSection";
import OurPartnersSection from "./OurPartnersSection";
import ReachOutSection from "./ReachOutSection";
import ServicesSection from "./ServicesSection";
import WhoWeAreSection from "./WhoWeAreSection";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <WhoWeAreSection />
            <LoopVideoSection />
            <IndustriesWeServeSection />
            <LeadershipSection />
            <OurPartnersSection />
            <ReachOutSection />
            <IsoCertificationSection />
            <NewsletterSection />
            <JoinSection />
        </>
    )
}

export default HomePage;