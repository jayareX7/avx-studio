import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";



const Services = ({ slugs, data, filename}) => (
 <>
   
 
    {slugs.map(slug => {
      return (   

    <>

        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 ">
          <Link href={"/services/" + slug}>  
            <a>{slug}</a>
          </Link>
          </div>
        
       
      
   <div key={slug}>    
    <div key={data}>
    {data} 
    </div>
      </div> 


      </>

      )})}



   
</>
);


  export async function getStaticProps() {
     
  const files = fs.readdirSync("data/_services",);
  console.log(files)

    const servicesDirectory = path.join(process.cwd(), 'data/_services',)
    const filenames = fs.readdirSync(servicesDirectory)
  
    const posts = filenames.map((filename) => {
      const filePath = path.join(servicesDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8'.toString());


      const parsedMarkdown = matter(fileContents);
      const htmlString = marked(parsedMarkdown.content);


      console.log('markdown: ', parsedMarkdown)
      console.log('url: ', filePath)

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    }
    }
  } )

  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", "")),
      posts,
    },
  }
}

export default Services;