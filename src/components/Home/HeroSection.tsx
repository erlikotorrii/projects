import styles from "../../app/styles/page.module.css";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={`${styles.heroTexts} container`}>
                <div className={styles.firstHeroTexts}>
                    <h2>Your Cybersecurity Experts</h2>
                    <h2>Securing the Future Today</h2>
                </div>
                <div className={styles.secondHeroTexts}>
                    <h1>Tailored, <span>AI-driven solutions</span> to protect your business</h1>
                    <p>"Protecting the digital future through innovative cybersecurity solutions, we empower businesses to safeguard their assets, ensure compliance, and maintain trust in an increasingly connected world."</p>
                </div>
                <div className={styles.heroButtons}>
                    <button>
                        <img src="/hero-image.svg" alt="Free Consultation" />
                        Free Consultation
                    </button>
                    <button>Get Started Today</button>
                </div>
                <div className={styles.heroCtaButtons}>
                    <ul>
                        <li>Finance</li>
                        <li>Healthcare</li>
                        <li>Government</li>
                        <li>Retail</li>
                        <li>Game</li>
                        <li>Education</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;