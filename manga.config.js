// ============================================================
//  manga.config.js  –  Edit this file to add your manga!
// ============================================================
//
//  HOW IT WORKS:
//  - Images live in folders you create, e.g.:
//      images/solo-leveling/ch1/001.jpg
//      images/solo-leveling/ch1/002.jpg
//      images/solo-leveling/ch2/001.jpg
//  - Just list the image filenames below — the folder path is
//    built from series slug + chapter slug automatically.
//
//  IMAGE BASE PATH — change this if your images folder is elsewhere
const IMAGE_BASE = "images";

const MANGA_DATA = [
  {
    id: "solo-leveling",           // used in URLs — no spaces
    title: "Solo Leveling",
    cover: "images/solo-leveling/cover.jpg",   // series cover image
    description: "Sung Jinwoo, the weakest hunter of all mankind, discovers a mysterious system that allows him to level up with no limits.",
    genres: ["Action", "Fantasy", "Adventure"],
    chapters: [
      {
        id: "ch-1",
        title: "Chapter 1",
        subtitle: "The Weakest",
        date: "2024-01-01",
        thumbnail: "images/solo-leveling/ch1/001.jpg",
        folder: "solo-leveling/ch1",
        pages: ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg"]
      },
      {
        id: "ch-2",
        title: "Chapter 2",
        subtitle: "The System",
        date: "2024-01-08",
        thumbnail: "images/solo-leveling/ch2/001.jpg",
        folder: "solo-leveling/ch2",
        pages: ["001.jpg","002.jpg","003.jpg","004.jpg"]
      }
    ]
  },
  {
    id: "my-hero",
    title: "My Hero Academia",
    cover: "images/my-hero/cover.jpg",
    description: "In a world where most people have superpowers, a boy born without them dreams of becoming the greatest hero.",
    genres: ["Action", "Superhero", "School"],
    chapters: [
      {
        id: "ch-1",
        title: "Chapter 1",
        subtitle: "Izuku Midoriya: Origin",
        date: "2024-02-01",
        thumbnail: "images/my-hero/ch1/001.jpg",
        folder: "my-hero/ch1",
        pages: ["001.jpg","002.jpg","003.jpg"]
      }
    ]
  }
];

// ============================================================
//  Don't edit below this line
// ============================================================
if (typeof module !== "undefined") module.exports = { MANGA_DATA, IMAGE_BASE };
