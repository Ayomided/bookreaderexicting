import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    BookDivider: {
      render: component("./src/components/BookDivider.astro"),
      attributes: {
        // Markdoc requires type defs for each attribute.
        // These should mirror the `Props` type of the component
        // you are rendering.
        // See Markdoc's documentation on defining attributes
        // https://markdoc.dev/docs/attributes#defining-attributes
        style: {
          type: String,
          default: "classic",
          required: true,
          matches: ["classic", "ornate", "simple"],
        },
        color: { type: String, required: false },
        size: {
          type: String,
          default: "medium",
          required: true,
          matches: ["small", "medium", "large"],
        },
      },
    },
  },
});
