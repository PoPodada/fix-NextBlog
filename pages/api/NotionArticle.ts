
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";
import dotenv from "dotenv"
// pages/api/notionData.js

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
    const NOTION_API_URL = 'https://api.notion.com/v1/';
    const DATABASE_ID = '3bf9e0082abe45d49cd8d3260be0ca56';
    const INTEGRATION_TOKEN = process.env.NOTION_TOKEN;
  
    try {
      const response = await fetch(`${NOTION_API_URL}databases/${DATABASE_ID}/query`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${INTEGRATION_TOKEN}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28'
        }
      });
  
      if (!response.ok) {
        throw new Error('Notion API request failed');
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data from Notion API:', error);
      res.status(500).json({ error: 'Failed to fetch data from Notion API' });
    }
  }
  

export default handler;