import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "/content/posts/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        publishedDate: fields.date({ label: "Published date" }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: "Settings",
      path: "content/posts/",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        publishedDate: fields.date({ label: "Published date" }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
