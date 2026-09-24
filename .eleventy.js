module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addCollection("propiedades", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/propiedades/*.md").sort((a, b) => {
      return (b.data.destacada === true) - (a.data.destacada === true);
    });
  });

  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
      return new Date(b.data.fecha) - new Date(a.data.fecha);
    });
  });

  eleventyConfig.addFilter("moneda", function (valor) {
    if (valor === undefined || valor === null) return "";
    return "$" + Number(valor).toLocaleString("es-EC");
  });

  eleventyConfig.addFilter("fechaLegible", function (valor) {
    if (!valor) return "";
    const d = new Date(valor);
    if (isNaN(d)) return valor;
    return d.toLocaleDateString("es-EC", { day: "numeric", month: "long", year: "numeric" });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
