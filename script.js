const posts = [
    { title: 'POST1' },
    { title: 'POST2' },
];

function createPost(post) {
return new Promise((resolve, reject) => {
    posts.push(post);
    resolve(post);
});
}

function deletePost() {
return new Promise((resolve, reject) => {
    if (posts.length > 0) {
    const poppedElement = posts.pop();
    resolve(poppedElement);
    } else {
    reject(new Error('No posts to delete.'));
    }
});
}

function updateLastUserActivityTime(myTime) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    const myTime = new Date();
    resolve(myTime);
    }, 1000);
});
}

function printPost() {
posts.forEach((post) => {
    console.log(post.title);
});
}


let lastActivityTime;

async function myAsyncFunction() {
try {
    const [createdPost, _] = await Promise.all([
    createPost({ title: 'newPOST' }),
    updateLastUserActivityTime(),
    ]);
    lastActivityTime = _;
    printPost();
    console.log(`the new post is created @ ${lastActivityTime}`);
    const deletedPost = await deletePost();
    console.log(`Note that the post '${deletedPost.title}' is deleted.`);
    await printPost();
    await deletePost();
    await deletePost();
    await printPost();
    } catch (error) {
        console.log(error.message);
    }
}
myAsyncFunction()