import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export const Resume = defineDocumentType(() => ({
  name: "Resume",
  filePathPattern: "resume/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    name: { type: "string", required: true },
    occupation: { type: "string", required: true },
    summary: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("resume/", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Resume],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark-dimmed" }],
    ],
  },
});
