import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ALL_FOODS } from '../../constants/foods';
import { findFoodBySlug, generateSlug } from '../utils/foodUtils';
import { Helmet } from 'react-helmet-async';
import './FoodDetailPage.css';

// 관련 음식 추천 함수 (같은 태그 기반)
const getRelatedFoods = (currentFood: typeof ALL_FOODS[0] | null, count: number = 6) => {
    if (!currentFood) return [];

    return ALL_FOODS
        .filter(food => food.id !== currentFood.id)
        .filter(food => food.tags?.some(tag => currentFood.tags?.includes(tag)))
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
};

const FoodDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const food = useMemo(() => {
        if (!slug) return null;
        return findFoodBySlug(ALL_FOODS, slug) || null;
    }, [slug]);

    const relatedFoods = useMemo(() => getRelatedFoods(food), [food]);

    // 404 처리
    if (!food) {
        return (
            <div className="food-detail-not-found">
                <h1>Food Not Found</h1>
                <p>We couldn't find that dish. Try exploring our food collection!</p>
                <Link to="/explore-foods" className="explore-link">Explore Foods</Link>
            </div>
        );
    }

    const pageTitle = `${food.name} - What to Know Before You Order | The Dinner Decider`;
    const pageDescription = food.description || `Discover everything about ${food.name} - taste profile, origins, and how to enjoy it like a local.`;
    const canonicalUrl = `https://www.thedinnerdecider.au/food/${slug}`;

    // Structured Data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "name": food.name,
        "description": pageDescription,
        "image": `https://www.thedinnerdecider.au${food.imageUrl}`,
        "url": canonicalUrl,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        },
        "author": {
            "@type": "Organization",
            "name": "The Dinner Decider"
        }
    };

    const handleSearchNearby = () => {
        const query = `${food.name} near me`;
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleDecideThis = () => {
        navigate(`/result/${encodeURIComponent(food.name)}`);
    };

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={`https://www.thedinnerdecider.au${food.imageUrl}`} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>

            <div className="food-detail-page">
                {/* Breadcrumb */}
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link to="/">Home</Link>
                    <span> / </span>
                    <Link to="/explore-foods">Foods</Link>
                    <span> / </span>
                    <span>{food.name}</span>
                </nav>

                {/* Hero Section */}
                <motion.section
                    className="food-hero"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="food-hero-image">
                        <img src={food.imageUrl} alt={food.name} loading="eager" />
                    </div>
                    <div className="food-hero-content">
                        <h1>{food.name}</h1>
                        <div className="food-tags">
                            {food.tags?.map(tag => (
                                <span key={tag} className="food-tag">{tag}</span>
                            ))}
                        </div>
                        {food.mood && (
                            <div className="food-moods">
                                {food.mood.map(m => (
                                    <span key={m} className="food-mood">{m}</span>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.section>

                {/* About Section - Main SEO Content */}
                {food.description && (
                    <motion.section
                        className="food-section about-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>About {food.name}</h2>
                        <p className="food-description">{food.description}</p>
                    </motion.section>
                )}

                {/* Fun Fact Section */}
                {food.funFact && (
                    <motion.section
                        className="food-section fact-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2>{food.qaTitle || "Did You Know?"}</h2>
                        <p className="fun-fact">{food.funFact}</p>
                    </motion.section>
                )}

                {/* What to Look For */}
                {food.checklist && food.checklist.length > 0 && (
                    <motion.section
                        className="food-section checklist-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2>What to Look For</h2>
                        <ul className="food-checklist">
                            {food.checklist.map((item, idx) => (
                                <li key={idx}>✓ {item}</li>
                            ))}
                        </ul>
                    </motion.section>
                )}

                {/* Pairing Suggestions */}
                {food.pairings && food.pairings.length > 0 && (
                    <motion.section
                        className="food-section pairings-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2>Perfect Pairings</h2>
                        <div className="pairings-grid">
                            {food.pairings.map((pairing, idx) => (
                                <div key={idx} className="pairing-card">
                                    <span className="pairing-icon">{pairing.icon}</span>
                                    <div>
                                        <strong>{pairing.type}</strong>
                                        <p>{pairing.suggestion}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Eat Like a Local */}
                {food.eatLikeLocal && food.eatLikeLocal.length > 0 && (
                    <motion.section
                        className="food-section local-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h2>Eat Like a Local</h2>
                        <div className="local-tips">
                            {food.eatLikeLocal.map((tip, idx) => (
                                <div key={idx} className="local-tip">
                                    <span className="tip-icon">{tip.icon}</span>
                                    <div>
                                        <strong>{tip.title}</strong>
                                        <p>{tip.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* CTA Section */}
                <motion.section
                    className="food-section cta-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <h2>Ready to Try {food.name}?</h2>
                    <div className="cta-buttons">
                        <button onClick={handleSearchNearby} className="cta-button primary">
                            📍 Find Nearby
                        </button>
                        <button onClick={handleDecideThis} className="cta-button secondary">
                            🎯 Make it Tonight's Choice
                        </button>
                    </div>
                </motion.section>

                {/* Related Foods */}
                {relatedFoods.length > 0 && (
                    <motion.section
                        className="food-section related-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h2>You Might Also Like</h2>
                        <div className="related-foods-grid">
                            {relatedFoods.map(related => (
                                <Link
                                    key={related.id}
                                    to={`/food/${generateSlug(related.name)}`}
                                    className="related-food-card"
                                >
                                    <img src={related.imageUrl} alt={related.name} loading="lazy" />
                                    <span>{related.name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Back Navigation */}
                <div className="back-nav">
                    <Link to="/explore-foods">← Browse All Foods</Link>
                </div>
            </div>
        </>
    );
};

export default FoodDetailPage;
