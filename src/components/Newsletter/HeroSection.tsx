import styles from "../../app/styles/newsletter.module.css";
import { NewsArticle } from "@/data/articleData";

interface HeroSectionProps {
    selectedArticle: NewsArticle;
}

const HeroSection = ({ selectedArticle }: HeroSectionProps) => {
    return (
        <div className={styles.heroSection}>
            <div className={`${styles.heroContent} container`}>
                <h4>{selectedArticle.subTitle}</h4>
                <h1>{selectedArticle.title}</h1>
            </div>
        </div>
    );
};

export default HeroSection;
