import fs from 'fs';

export async function loadPosts() {
    let posts = []
    let post_files = fs.readdirSync(`${__dirname}\\posts`)
    for (let i = 0; i < post_files.length; i++) {
        const element = post_files[i];
        console.log(element)
    }
}