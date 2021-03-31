import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Head from 'next/head'


const Services = ({ htmlString, data, }) => {
  return (
    <>
    
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>

{/*  Dynamically created /services/page with injected data
     Use 'JSX' to edit or see SCSS */}

      <div> {data ['thumbnail']} </div>
      <div> {data ['design_tags']} </div>
      <div> {data ['title']} </div>
      <div> {data ['service_description']} </div>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
     
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("data/_services");
  console.log("files: ", files);
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));
  console.log("paths: ", paths);
 
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({params: {slug}}) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("data/_services", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);
  console.log("markdown: ", parsedMarkdown);


  return {
    props: {
      htmlString,
      data: parsedMarkdown.data
    }
  }; 
};

export default Services;