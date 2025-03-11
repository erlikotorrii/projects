import styles from "../../app/styles/service1.module.css"

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={`${styles.heroSectionContent} container`}>
                <h1><span>Incident</span> Response</h1>
                <p>"In the event of a breach, our expert team reacts swiftly to minimize damage and restore your systems quickly."</p>
                <button>Get a Demo</button>
            </div>
        </div>
    )
}

export default HeroSection;
