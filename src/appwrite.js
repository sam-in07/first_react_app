import { Client, Databases } from "appwrite";

// Initialize Appwrite Client
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")   // Correct endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

// IDs from your .env file
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

// ----------------------
// Fetch Trending Movies
// ----------------------
export const getTrendingMovies = async () => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID
    );

    return response.documents.map((doc) => ({
      $id: doc.$id,
      title: doc.title,
      poster_url: doc.poster_url
    }));
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

// ----------------------
// Update Search Count
// ----------------------
export const updateSearchCount = async (searchTerm, movie) => {
  try {
    // You can store searched movie details → optional
    await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      "unique()", 
      {
        title: movie.title,
        poster_url: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "",
        search: searchTerm,
      }
    );
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};
