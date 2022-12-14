const addCommentHandler = async (event) => {
    event.preventDefault();
    const commentBox = document.querySelector("#commentBox");
    const content = commentBox.value.trim();
    const user_id = commentBox.dataset.userId;
    const task_id = commentBox.dataset.taskId;

    if (content != "") {
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ content, user_id, task_id }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to post comment.");
        }
    }
};


document.querySelector(".commentBtn").addEventListener("click", addCommentHandler);