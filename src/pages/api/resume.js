import fs from 'fs';
import fetch from 'node-fetch';
import { join } from 'path';
import {formatCDNURl} from "@/lib/cloudflareImageLoader";

export default async function handler(req, res) {
  const resumeName = 'anfal-mushtaq-resume.pdf';
  const fileUrl = formatCDNURl(resumeName, 'docs');

  // Fetch the PDF file from the CDN
  const response = await fetch(fileUrl);
  const buffer = await response.buffer();

  // Create a temporary file on the server
  const filePath = join(process.cwd(), resumeName);
  fs.writeFileSync(filePath, buffer);

  // Send the file as a response to the client
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${resumeName}`);
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.setHeader('Pragma', 'public');
  res.setHeader('Expires', '0');
  res.send(fs.readFileSync(filePath));
}
