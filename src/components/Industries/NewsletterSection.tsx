import Link from "next/link";
import styles from "../../app/styles/industries.module.css";

const NewsletterSection = () => {
    return (
        <div className={styles.newsletterSection}>
            <div className={`${styles.newsletterContent} container`}>
                <div className={`${styles.newsletterRow} row`}>
                    <div className="col-lg-7 col-sm-12">
                        <h2>Not sure if we cover your industry?</h2>
                        <p>Cyber threats are constantly evolving, and every industry faces unique challenges. If you don’t see your sector listed or want to learn more about how we can tailor our solutions to your specific needs, we’re here to help. Contact us today, and let’s discuss how we can protect your business</p>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <div className={styles.newsletterInput}>
                            <input type="text" name="email" id="email" placeholder="Your Email Address" />
                        </div>
                        <div className={styles.newsletterBtn}>
                            <Link href="/newsletter">Discuss Your Security Needs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterSection;