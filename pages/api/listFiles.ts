import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const config = {
    runtime: 'edge', // Set runtime to 'edge'
  };

export default async function GET(request: Request) {

  // Fetch files using the folder name as a prefix
  const { blobs } = await list({ prefix: `about-me/` });
  return NextResponse.json({ res : JSON.stringify(blobs), status: 200 });
}
