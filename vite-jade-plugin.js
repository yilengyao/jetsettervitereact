// import { Plugin } from 'vite';
import path from 'path';
import pug from 'pug';
import fs from 'fs';

export default function jadePlugin() {
  console.log('Loading Jade plugin');
  const jadePath = path.resolve(__dirname, 'src/renderer/index.jade');
  console.log('Jade path:', jadePath);

  const jadeToHtml = pug.renderFile(jadePath, {
    pretty: true,
  });

  fs.writeFileSync(path.resolve(__dirname, 'src/renderer/index.html'), jadeToHtml);
}
