const posts = [
    { title: 'POST1' },
    { title: 'POST2' },
]
function createPost(post) {
    return new Promise((resolve, reject) => {
        posts.push(post);
        resolve(post);
    })
}
function deletePost() {
    return new Promise((resolve, reject) => {
        if (posts.length > 0) {
            const poppedElement = posts.pop();
            resolve(poppedElement);
        } else {
            reject('ERROR');
        }
    })
}
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const myTime = new Date();
            resolve(myTime);
        }, 1000)
    })
}
function printPost() {
    posts.forEach((post) => {
        console.log(post.title);
    })
}
let lastActivityTime;
Promise.all([createPost({ title: 'newPOST' }), updateLastUserActivityTime()])
    .then((values) => {
        lastActivityTime = values[1];
        printPost();
        console.log(`the new post is created @ ${lastActivityTime}`);
    })
    .then(() => {
        deletePost().then((deletedPost) => (

            console.log(`note that the ${deletedPost.title} is deleted`)
        ))
    })
    .then(() => {
        deletePost();
    })
    .then(() => {
        printPost();
    })
    .then(() => {
        deletePost();
    })
    .then(() => {
        deletePost();
    })
    .catch((msg) => { console.log(msg) })