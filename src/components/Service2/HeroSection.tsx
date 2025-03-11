import styles from "../../app/styles/service1.module.css"

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={`${styles.heroSectionContent} container`}>
                <h1><span>Penetration</span> Testing</h1>
                <p>"Identify and eliminate vulnerabilities in your network with our comprehensive penetration testing services."</p>
                <button>Get a Demo</button>
            </div>
        </div>
    )
}

export default HeroSection;
