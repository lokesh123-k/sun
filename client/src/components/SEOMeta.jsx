import { useEffect } from "react";

/**
 * SEOMeta Component
 * Manages page meta tags for SEO
 */
const SEOMeta = ({
  title = "Steel Fab Company",
  description = "Professional steel fabrication and mechanical engineering services",
  keywords = "steel fabrication, mechanical engineering, welding, CNC machining",
  image = "/og-image.jpg",
  url = ""
}) => {

  useEffect(() => {

    // Update page title
    document.title = `${title} | Steel Fab Company`;

    // Helper function to update meta tag
    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Helper function for Open Graph tags
    const updateOgTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Helper function for Twitter tags
    const updateTwitterTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Basic SEO
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph
    updateOgTag("og:title", `${title} | Steel Fab Company`);
    updateOgTag("og:description", description);
    updateOgTag("og:type", "website");

    if (image) updateOgTag("og:image", image);
    if (url) updateOgTag("og:url", url);

    // Twitter
    updateTwitterTag("twitter:card", "summary_large_image");
    updateTwitterTag("twitter:title", `${title} | Steel Fab Company`);
    updateTwitterTag("twitter:description", description);

    if (image) updateTwitterTag("twitter:image", image);

    // Cleanup
    return () => {
      document.title = "Steel Fab Company | Steel Fabrication & Mechanical Engineering";
    };

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEOMeta;