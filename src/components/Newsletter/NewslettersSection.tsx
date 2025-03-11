import React, { useState } from "react";
import styles from "../../app/styles/newsletter.module.css";
import { articles, NewsArticle } from "@/data/articleData";

interface NewslettersSectionProps {
    articles: NewsArticle[];
    onSelectArticle: (article: NewsArticle) => void;
}

const NewslettersSection = ({ articles, onSelectArticle }: NewslettersSectionProps) => {
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle>(articles[0]);

    return (
        <div className="container">
            <div className={styles.newslettersSection}>
                {/* Left Sidebar */}
                <div className={styles.leftSidebarNewsletter}>
                    <h2>Related News</h2>
                    <div className={styles.articleList}>
                        {articles.map((article) => (
                            <div key={article.id} className={styles.articlePreview}>
                                <h6>{article.title}</h6>
                                <p className={styles.newsletterDate}>{article.datePosted}</p>
                                <h5>{article.subTitle}</h5>
                                <p>{article.description}</p>
                                <button onClick={() => {
                                    setSelectedArticle(article);
                                    onSelectArticle(article);
                                }}>
                                    Read more
                                </button>
                            </div>
                        ))}
                        <div className={styles.contributorNewsletter}>
                            <h2>Want to become a contributor?</h2>
                            <div className={styles.contributorContent}>
                                <form>
                                    <input type="text" placeholder="Your Email" />
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Tell us something about yourself"
                                    ></textarea>
                                    <button type="button">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Article Details */}
                <div className={styles.rightSideContent}>
                    {selectedArticle && (
                        <div className={styles.articleDetails}>
                            <div className={styles.newsletterSummary}>
                                <h2>Summary</h2>
                                <p>{selectedArticle.summary}</p>
                            </div>
                            <div className={styles.newsletterIntro}>
                                <h2>Introduction</h2>
                                <p>{selectedArticle.intro}</p>
                            </div>
                            <div className={styles.newsletterTrends}>
                                <h2>Key Trends</h2>
                                <p>{selectedArticle.trends}</p>
                            </div>
                            <div className={styles.newsletterCases}>
                                <h2>Notable Case Studies</h2>
                                <p>{selectedArticle.caseStudies}</p>
                            </div>
                            <div className={styles.newsletterStrategies}>
                                <h2>Prevention Strategies</h2>
                                <p>{selectedArticle.strategies}</p>
                            </div>
                            <div className={styles.newsletterConclusion}>
                                <h2>Conclusion</h2>
                                <h6>{selectedArticle.conclusion}</h6>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewslettersSection;
