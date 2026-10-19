
import React from "react";
import "./NavbarCom.css";

const Footer = () => {
    return (
        <footer className="recipe-footer mt-4">
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-brand">
                    <h2>
                        <span className="footer-emoji">🍲</span> RecipeBook
                    </h2>
                    <p>
                        Discover delicious recipes, explore new flavors,
                        and make every meal special.
                    </p>

                    <div className="footer-socials">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <a href="/">Home</a>
                    <a href="/recipes">All Recipes</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                </div>

                {/* Categories */}
                <div className="footer-links">
                    <h3>Categories</h3>
                    <a href="/recipes?category=breakfast">Breakfast</a>
                    <a href="/recipes?category=lunch">Lunch</a>
                    <a href="/recipes?category=dinner">Dinner</a>
                    <a href="/recipes?category=desserts">Desserts</a>
                </div>

                {/* Newsletter */}
                <div className="footer-newsletter">
                    <h3>Stay Inspired!</h3>
                    <p>Get delicious recipe ideas for your next meal.</p>

                    <form
                        className="newsletter-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thank you for subscribing!");
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            aria-label="Email address"
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} RecipeBook. Made with ❤️ for food lovers.</p>
            </div>
        </footer>
    );
};

export default Footer;
