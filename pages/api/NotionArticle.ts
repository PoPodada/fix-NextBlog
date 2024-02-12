
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";
import dotenv from "dotenv"
dotenv.config()
const getNotionDatabaseData = async () =>{
    const token = process.env.NOTION_TOKEN;
    const databaseId = process.env.NOTION_DATABASE_ID
    const response = await axios({
        method:'post',
        url:'https://api.notion.com/v1/databases/'+databaseId+'/query',
        headers:{
            'Authorization': `Bearer ${token}`,
            'Notion-Version': '2022-06-28', 
            'Content-Type': 'application/json',
        },
        data:{
            
        }
    }).catch((error)=>{
        console.error(error);
    });
    if (response && response.data) {
        for (const data of response.data.results) {
          // 取得したテーブルデータを使った処理を記述
          console.log('**********************');
          console.log(data.properties);
          console.log('**********************');
        }
      }
}

export default getNotionDatabaseData;