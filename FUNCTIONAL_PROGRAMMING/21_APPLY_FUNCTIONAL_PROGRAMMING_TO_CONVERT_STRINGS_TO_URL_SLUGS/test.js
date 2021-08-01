function urlSlug(title) {
    //return title.toLowerCase().trim().replace(/\s+/g, '-');
    return title.toLowerCase().trim().split(/\s+/g).join('-');
}
console.log(urlSlug(" Winter Is  Coming"));