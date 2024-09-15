import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";

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
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Log a custom event when the dashboard is loaded
logEvent(analytics, 'dashboard_view');

// Fetch and display analytics data
async function fetchAnalyticsData() {
    const analyticsSection = document.getElementById('analytics-data');
    // Example of logging a page_view event - you can extend this to collect other data
    logEvent(analytics, 'page_view', {
        page_title: 'Dashboard'
    });

    // Display dummy data or implement Firebase Analytics here
    analyticsSection.innerHTML = `
        <p>Total Visits: 100</p>
        <p>Total Page Views: 200</p>
    `;
}

// Handle blog post upload
async function handleBlogUpload(event) {
    event.preventDefault();

    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    const imageUrl = document.getElementById('blog-image').value;

    try {
        const docRef = await addDoc(collection(db, "posts"), {
            title: title,
            content: content,
            imageUrl: imageUrl,
            timestamp: new Date()
        });
        alert("Blog post uploaded successfully!");
        document.getElementById('blog-form').reset();
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

document.getElementById('blog-form').addEventListener('submit', handleBlogUpload);
window.addEventListener('load', fetchAnalyticsData);
