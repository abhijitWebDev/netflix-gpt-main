const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProject: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabase: String(import.meta.env.VITE_APP_APPWRITE_DATABASE),
}

export default conf;