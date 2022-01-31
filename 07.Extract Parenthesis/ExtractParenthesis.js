function extract(content) {
let text=document.querySelector('#content').textContent;
let matched=text.match(/\((.+?)\)/g);
return matched.join('; ');
}