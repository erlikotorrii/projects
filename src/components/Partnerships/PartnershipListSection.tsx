import Link from "next/link";
import styles from "../../app/styles/partnerships.module.css";

const PartnershipListSection = () => {
    return (
        <div className={styles.partnershipListSection}>
            <div className={`${styles.partnershipListContent} container`}>
                <div className={styles.brainsterPartnership}>
                    <div className={styles.brainsterDiv}>
                        <div className="">
                            <img src="/partnershipsImages/brainster-partner1.png" alt="Brainster" />
                        </div>
                        <div className="">
                            <img src="/partnershipsImages/brainster-partner2.png" alt="Brainster" />
                        </div>
                    </div>
                    <h4>Partnership with <span>Brainster</span></h4>
                    <p>Our partnership with Brainster enables us to recruit and train the next generation of cybersecurity professionals. Together, we bring fresh ideas and cutting-edge solutions to the forefront of cyber defense. By combining Brainster’s forward-thinking education programs with our industry expertise, we are building a stronger, more resilient cybersecurity workforce. This collaboration ensures that our team stays ahead of emerging threats, equipped with the skills and knowledge to protect businesses and individuals in an ever-evolving digital landscape.</p>
                </div>
                <div className={styles.microsoftPartnership}>
                    <div className={`${styles.microsoftDiv} row`}>
                        <div className="col">
                            <img src="/partnershipsImages/microsoft-partner.svg" alt="Microsoft" />
                        </div>
                        <div className={`${styles.microsoftText} col`}>
                            <h4>Partnership with <span>Microsoft</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.salesforcePartnership}>
                    <div className={`${styles.salesforceDiv} row`}>
                        <div className={`${styles.salesforceText} col`}>
                            <h4>Partnership with <span>Salesforce IQ</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque.</p>
                        </div>
                        <div className="col">
                            <img src="/partnershipsImages/salesforce-partner.svg" alt="Salesforce IQ" />
                        </div>
                    </div>
                </div>
                <div className={styles.azurePartnership}>
                    <div className={styles.azureDiv}>
                        <div className="">
                            <img src="/partnershipsImages/brainster-partner1.png" alt="Azure" />
                        </div>
                        <div className="">
                            <img src="/partnershipsImages/azure-partner.svg" alt="Azure" />
                        </div>
                    </div>
                    <h4>Partnership with <span>Azure</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque.</p>
                </div>
                <Link href="">View all Partners</Link>
            </div>
        </div>
    )
}

export default PartnershipListSection;