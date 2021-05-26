// Notion App index
const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client')

// SDK client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const notionDatabaseId = process.env.NOTION_DATABASE_ID

const getProjects = async () => {
  const payload = {
    path: `databases/${notionDatabaseId}/query`,
    method: 'POST'
  }
  const { results } = await notion.request(payload)

  // console.log(results)
}
// getProjects() // this fails as error response code: 200 if .env not correct
