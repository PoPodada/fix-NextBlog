import notion from "@/utils/notion";
import type { NextApiRequest, NextApiResponse } from 'next'
import { pages } from "next/dist/build/templates/app-page";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    try{
        const database_id = process.env.NOTION_DATABASE_ID

        if(!database_id){
            throw new Error("NOTION_DATABASE_ID is not defined in environment variables.");
        }
        const response =await notion.databases.query({
            database_id:database_id
        });
        const articles = response.results.map((article)=>{
            return{
                pageId:article.id,
                
            }
        });
        res.status(200).json(articles)
    }catch(error:any){
        res.status(500).json({error:error.message});
    }
}