"use client";

import React, { useState } from "react";
import styles from "../../app/styles/newsletter.module.css";
import { articles, NewsArticle } from "@/data/articleData";

const ReadMoreSection: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle>(articles[0]);

    return (
        <div className={styles.readMoreSection}>
            <div className={`${styles.readMoreContent} container`}>
                <div className={styles.horizontalScrollContainer}>
                    <button type="button">Read More</button>
                    {articles.map((article) => (
                        <div key={article.id} className={styles.readMorePreview}>
                            <h6>{article.title}</h6>
                            <p className={styles.newsletterDate}>{article.datePosted}</p>
                            <h5>{article.subTitle}</h5>
                            <p>{article.description}</p>
                            <button onClick={() => setSelectedArticle(article)}>Read more</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReadMoreSection;
