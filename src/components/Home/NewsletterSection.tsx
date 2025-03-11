import Link from "next/link";
import styles from "../../app/styles/page.module.css";

const NewsletterSection = () => {
    return (
        <div className={styles.newsletterSection}>
            <div className={`${styles.newsletterContent} container`}>
                <div className={`${styles.newsletterRow} row`}>
                    <div className="col-lg-5 col-sm-12">
                        <h2>Stay informed with the latest threat insights delivered directly to your inbox through our Newsletter.</h2>
                    </div>
                    <div className="col-lg-7 col-sm-12">
                        <div className={styles.newsletterInput}>
                            <input type="text" name="email" id="email" placeholder="Your Email Address" />
                        </div>
                        <div className={styles.newsletterBtn}>
                            <Link href="/newsletter">Join for Free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterSection;