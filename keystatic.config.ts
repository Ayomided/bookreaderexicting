// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";
import { BookDivider } from "./src/components/BookDivider";

export default config({
  storage: {
    // kind: "local",
    kind: "github",
    repo: "Ayomided/bookreaderexicting",
  },
  collections: {
    stories: collection({
      label: "Stories",
      slugField: "title",
      path: "src/content/stories/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        authors: fields.array(fields.text({ label: "Authors" }), {
          label: "Authors",
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({
          label: "Content",
          components: {
            BookDivider: BookDivider,
          },
        }),
        cover: fields.image({
          label: "Cover",
          directory: "public/images/covers",
          publicPath: "/images/covers",
        }),
      },
    }),
  },
});
