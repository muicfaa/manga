# MangaShelf — Your Personal Manga Site

A fast, clean manga reader for GitHub Pages. No backend needed.

## Setup

### 1. Add your images

Create an `images/` folder and organize like this:

```
images/
  my-manga/
    cover.jpg
    ch1/
      001.jpg
      002.jpg
      003.jpg
    ch2/
      001.jpg
      002.jpg
```

### 2. Edit `manga.config.js`

Open `manga.config.js` and update `MANGA_DATA` with your series:

```js
const MANGA_DATA = [
  {
    id: "my-manga",           // used in URLs — no spaces, lowercase
    title: "My Manga",
    cover: "images/my-manga/cover.jpg",
    description: "A cool manga about things.",
    genres: ["Action", "Drama"],
    chapters: [
      {
        id: "ch-1",
        title: "Chapter 1",
        subtitle: "The Beginning",
        date: "2024-01-01",         // YYYY-MM-DD, used for sorting
        thumbnail: "images/my-manga/ch1/001.jpg",
        folder: "my-manga/ch1",     // folder inside images/
        pages: ["001.jpg", "002.jpg", "003.jpg"]  // filenames in order
      }
    ]
  }
];
```

### 3. Deploy to GitHub Pages

1. Push everything to a GitHub repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Done! Your site is live at `https://yourusername.github.io/repo-name/`

## Features

- **Home page** — recent uploads + all series
- **Series page** — chapter list with thumbnails
- **Reader** — click image or use Prev/Next buttons to turn pages
- **Chapter end screen** — jump to next chapter instantly, no back-button hell
- **TOC drawer** — tap ☰ in reader to jump to any chapter
- **Keyboard support** — ← → arrow keys, spacebar
- **Touch swipe** — swipe left/right on mobile
- **Responsive** — works on mobile and desktop

## File structure

```
index.html          — home page
series.html         — series / chapter list
read.html           — manga reader
style.css           — all styles
manga.config.js     — your data (edit this!)
placeholder.svg     — fallback image
images/             — your manga images (you create this)
```
