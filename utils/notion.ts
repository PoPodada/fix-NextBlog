
import { Client } from '@notionhq/client';
 
const notion = new Client({
  auth:process.env.NOTION_TOKEN,
});
export default notion;



// export const getDatabase = async (databaseId:any) => {
//   const response = await notion.databases.query({
//     database_id:databaseId,
    
//   });
//   return response.results;
// }




// const databaseId = process.env.NOTION_DATABASE_ID
// export const getStaticProps = async () => {
//   const database = await getDatabase(databaseId)
//   return{
//     props:{
//       posts:database,
//     },
//     revalidate:10,
    
    
// } 

// };
