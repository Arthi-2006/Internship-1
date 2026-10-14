
const KEY = "myBlogPosts";

// Get saved blog posts
function getPosts() {
    try {
        const data = JSON.parse(localStorage.getItem(KEY) || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

// Publish blog
const form = document.getElementById("blog-form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();

        if (!title || !content) {
            alert("Please enter title and content!");
            return;
        }

        const posts = getPosts();

        posts.unshift({
            title: title,
            content: content,
            date: new Date().toLocaleDateString()
        });

        try {
            localStorage.setItem(KEY, JSON.stringify(posts));
            alert("Blog published successfully!");
            window.location.href = "dashboard.html";
        } catch {
            alert("Unable to save blog. Please check browser storage.");
        }
    });
}

// Display posts in dashboard
const list = document.getElementById("blog-list");

if (list) {
    const posts = getPosts();

    if (posts.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No blogs yet. Create your first blog!";
        list.appendChild(message);
    } else {
        posts.forEach(function(post) {
            const card = document.createElement("article");
            card.className = "blog-card";

            const heading = document.createElement("h3");
            heading.textContent = post.title;

            const date = document.createElement("small");
            date.textContent = "Published on " + post.date;

            const paragraph = document.createElement("p");
            paragraph.textContent = post.content;

            card.append(heading, date, paragraph);
            list.appendChild(card);
        });
    }
}
