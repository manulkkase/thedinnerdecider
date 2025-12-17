// src/screens/AboutUsScreen.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AboutUsScreen: React.FC = () => {

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>About Us - The Dinner Decider</title>
        <meta name="description" content="Learn the story behind The Dinner Decider and our mission to end dinner indecision everywhere." />
        <link rel="canonical" href="https://thedinnerdecider.au/about" />
      </Helmet>
      <div className="max-w-3xl mx-auto">

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            Ending Dinner Indecision.
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            That's why we built The Dinner Decider.
          </p>
        </div>

        <div className="mt-12 prose prose-lg text-slate-600 mx-auto">
          <h2>Our Story</h2>
          <p>
            It’s a scene we all know too well: endless scrolling through delivery apps, the back-and-forth "I don't know, what do you want to eat?" conversation, and the feeling that you've forgotten every food you've ever enjoyed.
          </p>
          <p>
            We were tired of the decision fatigue. We believed that choosing a meal should be fun, not a chore. So, we decided to turn it into a game.
          </p>
          <p>
            <strong>The Dinner Decider</strong> was born from that simple idea. It's a tool designed to bring a little bit of fun and randomness back into your daily food choices. Whether you need to declare a clear winner between a few options or you're looking for some mystical inspiration from the universe, we've got you covered.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to make deciding what to eat an easy, exciting, and enjoyable experience. We want to help you break out of your food rut, discover new dishes, and settle the age-old dinner debate once and for all.
          </p>

          <div className="text-center mt-12 not-prose">
            <Link
              to="/"
              className="inline-block bg-amber-500 text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-amber-600 transition-colors duration-300"
            >
              Play Now & Find Your Winner!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;