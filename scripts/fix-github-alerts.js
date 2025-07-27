#!/usr/bin/env node

/**
 * Post-processor to fix escaped GitHub alerts after remark formatting
 *
 * Usage: Run this after remark to fix escaped GitHub alert syntax
 * npm run format && node fix-github-alerts.js
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import ignore from 'ignore';

function fixGitHubAlerts(content) {
  // Fix escaped GitHub alert syntax - including INFO which is commonly used
  return content.replace(/\\(\[!(?:IMPORTANT|NOTE|TIP|WARNING|CAUTION|INFO)\])/gi, '$1');
}

async function processFiles() {
  try {
    // Read .gitignore file if it exists
    let gitignoreContent = '';
    const gitignorePath = '.gitignore';

    if (fs.existsSync(gitignorePath)) {
      gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
    }

    // Create ignore instance and add common patterns
    const ig = ignore().add(gitignoreContent);
    // Always ignore these directories
    ig.add(['.git/**', 'node_modules/**']);

    // Find all markdown files recursively
    const files = await glob('**/*.md', {
      cwd: process.cwd(),
      dot: true,  // Include files and directories that start with a dot
      nodir: true // Only return files, not directories
    });

    // Filter files using gitignore rules
    const filteredFiles = files.filter(file => !ig.ignores(file));

    console.log(`Processing ${filteredFiles.length} markdown files (${files.length - filteredFiles.length} ignored by .gitignore)...`);

    let filesFixed = 0;

    for (const file of filteredFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fixed = fixGitHubAlerts(content);

        if (content !== fixed) {
          fs.writeFileSync(file, fixed);
          console.log(`Fixed GitHub alerts in: ${file}`);
          filesFixed++;
        }
      } catch (fileError) {
        console.warn(`Warning: Could not process ${file}: ${fileError.message}`);
      }
    }

    if (filesFixed === 0) {
      console.log('No files needed fixing.');
    } else {
      console.log(`Fixed ${filesFixed} files.`);
    }

  } catch (error) {
    console.error('Error processing files:', error);
    process.exit(1);
  }
}

processFiles();
