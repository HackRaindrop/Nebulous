# GitHub Pages Deployment Guide

This guide will help you deploy the Nebulous Cryptid Escape Room demo to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "nebulous")
4. Make it public
5. Click "Create repository"

## Step 2: Prepare Your Local Files

1. Make sure you have the latest version of the Nebulous files
2. Delete the `server` directory and any `.bat` files as they won't be needed for GitHub Pages
3. Rename `README_GITHUB.md` to `README.md`

## Step 3: Initialize Git and Push to GitHub

Open a terminal/command prompt in your project directory and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nebulous.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the "main" branch
5. Click "Save"

## Step 5: Access Your Website

After a few minutes, your site will be available at:

```
https://YOUR-USERNAME.github.io/nebulous/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Troubleshooting

- If your site doesn't appear, check the GitHub Pages section in Settings for any error messages
- Make sure your repository is public
- Verify that your index.html file is in the root directory
- Check that all file paths in your HTML, CSS, and JavaScript files are relative paths

## Updating Your Site

To update your site after making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically update your site with the new changes.
