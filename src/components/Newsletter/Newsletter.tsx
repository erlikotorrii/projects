"use client";

import React, { useState } from "react";
import { articles, NewsArticle } from "@/data/articleData";
import HeroSection from "./HeroSection";
import NewslettersSection from "./NewslettersSection";
import ReadMoreSection from "./ReadMoreSection";
import SubscribeSection from "./SubscribeSection";

const Newsletter = () => {
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle>(articles[0]);

    return (
        <div>
            <HeroSection selectedArticle={selectedArticle} />
            <NewslettersSection 
                articles={articles} 
                onSelectArticle={setSelectedArticle} 
            />
            <ReadMoreSection />
            <SubscribeSection />
        </div>
    );
};

export default Newsletter;
