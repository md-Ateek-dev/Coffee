import Navbar from "../Components/Comman/Navbar";
import Footer from "../Components/Comman/Footer";
import PageTransition from "../Components/Comman/PageTransition";

import BlogHero from "../Components/Blog/BlogHero";
import FeaturedPost from "../Components/Blog/FeaturedPost";
import BlogGrid from "../Components/Blog/BlogGrid";
import Categories from "../Components/Blog/Categories";
import Newsletter from "../Components/Blog/Newsletter";

const Blog = () => {
  return (
    <PageTransition>
      <Navbar />

      <BlogHero />

      <FeaturedPost />

      <Categories />

      <BlogGrid />

      <Newsletter />

      <Footer />
    </PageTransition>
  );
};

export default Blog;