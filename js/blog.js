import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCirJL80pSRRztuFhXcuKrtQfQBiK5vc5c",
    authDomain: "designloops-d430e.firebaseapp.com",
    projectId: "designloops-d430e",
    storageBucket: "designloops-d430e.appspot.com",
    messagingSenderId: "203635670512",
    appId: "1:203635670512:web:a7547cc54163850059f135",
    measurementId: "G-LLJXPRXDBY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Load blog post content based on ID (e.g., from URL)
async function loadBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        alert("No post ID found in the URL!");
        return;
    }

    try {
        const docRef = doc(db, "posts", postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            document.getElementById('blog-title').textContent = docSnap.data().title;
            document.getElementById('blog-image').src = docSnap.data().imageUrl;
            document.getElementById('blog-content').textContent = docSnap.data().content;
        } else {
            alert("No such blog post found!");
        }
    } catch (e) {
        console.error("Error getting document: ", e);
    }
}

window.addEventListener('load', loadBlogPost);
