import styles from "../../app/styles/industries.module.css";

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={`${styles.heroSectionContent} container`}>
                <h1>Industries We <span>Protect</span></h1>
                <p>We continuously enhance our services to adapt to the ever-changing cyber landscape. Our commitment is to provide top-tier solutions to protect your data and operations, regardless of your industry.</p>
            </div>
        </div>
    )
}

export default HeroSection;