import fs from 'fs';
import path from 'path';

const EXTERNAL_DATA_URL = 'https://anfalmushtaq.com/articles';

function generateSiteMap(fileNames) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
     <url>
        <loc>https://anfalmushtaq.com</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>     
    <url>
        <loc>https://anfalmushtaq.com/about</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://anfalmushtaq.com/articles</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://anfalmushtaq.com/projects</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://anfalmushtaq.com/uses</loc>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>
     ${fileNames
        .map(fileName => {
            return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${fileName.split('.')[0]}`}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.6</priority>
       </url>
     `;
        })
        .join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(EXTERNAL_DATA_URL);
    const articlesDirectory = path.join(process.cwd(), 'src', 'pages', 'articles');
    const filenames = fs.readdirSync(articlesDirectory);

    const sitemap = generateSiteMap(filenames);

    // const posts = await request.json();
    //
    // // We generate the XML sitemap with the posts data
    // const sitemap = generateSiteMap(posts);
    //
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;