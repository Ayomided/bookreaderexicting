// components/BookDivider.ts

import { fields } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

export const BookDivider = block({
  label: "Book Divider",
  schema: {
    style: fields.select({
      label: "Divider Style",
      options: [
        { label: "Classic", value: "classic" },
        { label: "Ornate", value: "ornate" },
        { label: "Simple", value: "simple" },
      ],
      defaultValue: "classic",
    }),
    color: fields.text({
      label: "Color (optional)",
      description: "Enter a valid CSS color value",
      defaultValue: "currentColor",
    }),
    size: fields.select({
      label: "Size",
      options: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
      ],
      defaultValue: "medium",
    }),
  },
});
