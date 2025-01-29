// Стрелочная функция - Выражение, всегда анонимные

(a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

console.log()

setTimeout(() => {
    console.log('time out')
}, 1000)


const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id:1,
    author: 'Stas',
}

newPost(firstPost)

console.log(newPost(firstPost))