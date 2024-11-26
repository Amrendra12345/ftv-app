const baseUrl = 'https://fasttrackvisa.com';
import Curr_list from '../countyExList_in.json';



function generateSiteMap(posts) {
 //  console.log(Curr_list)
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">       
       
         ${
            Curr_list?.map((country)=>{
                return ` <url>
                    <loc>${`${baseUrl}/${country}`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>1.0</priority>
            </url>`
            }).join('')
         }
          ${
            Curr_list?.map((country)=>{
                return ` <url>
                    <loc>${`${baseUrl}/${country}/about-us`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>.7</priority>
            </url>`
            }).join('')
         }
           ${
            Curr_list?.map((country)=>{
                return ` <url>
                    <loc>${`${baseUrl}/${country}/contact-us`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`
            }).join('')
         }
          ${
            Curr_list?.map((country)=>{
                return ` <url>
                    <loc>${`${baseUrl}/${country}/career`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`
            }).join('')
         }
         ${
            Curr_list?.map((country)=>{
                return ` <url>
                    <loc>${`${baseUrl}/${country}/terms-and-conditions`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`
            }).join('')
         }
          ${
            Curr_list?.map((country)=>{
                return ` <url>
                    <loc>${`${baseUrl}/${country}/privacy-policy`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`
            }).join('')
         }
           ${
            Curr_list?.map((country)=>{
                return ` <url>
                    <loc>${`${baseUrl}/${country}/refund-and-cancellation`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`
            }).join('')
         }
           ${
            Curr_list?.map((country)=>{
                return ` <url>
                    <loc>${`${baseUrl}/${country}/disclaimer`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`
            }).join('')
         }     
       ${posts.homelist?.map((home) =>{
          return ` <url>
             <loc>${`${baseUrl}/${home.urllink}`}</loc>
             <lastmod> ${new Date().toISOString()}</lastmod>
             <priority>1.0</priority>
         </url>`
         })
         .join('')};
         
           
            ${
            Curr_list?.map((country)=>{
                return ` <url>
                    <loc>${`${baseUrl}/${country}/blog`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.7</priority>
               </url>`               
             }).join('')
           }
            ${Curr_list?.map((country)=>{
                return posts.homelist.map((home)=>{
                    return `<url>
                            <loc>${`${baseUrl}/${country}/${home.urllink}`}</loc>
                            <lastmod> ${new Date().toISOString()}</lastmod>
                            <priority>1.0</priority>
                        </url>`
                })
           }).join('')}

           ${Curr_list?.map((country)=>{
                return posts.blog_arr.map((blog)=>{
                    return `<url>
                            <loc>${`${baseUrl}/blog/${country}/${blog.title}`}</loc>
                            <lastmod> ${new Date().toISOString()}</lastmod>
                            <priority>0.7</priority>
                        </url>`
                })
           }).join('')}
     </urlset>
   `;
  }
  
  function SiteMap() {
    // getServerSideProps will do the heavy lifting
  }
  
  export async function getServerSideProps({ res }) {
    const homedata = await fetch(`https://cms.fasttrackvisa.com/api/en-in/homelisting`);
    const posts = await homedata.json();
   

    // const request = await fetch(EXTERNAL_DATA_URL);
    // const posts = await request.json();
  
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default SiteMap;
  