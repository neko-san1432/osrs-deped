function cleanWord(word) {
    word
        .replace(/<script.*?>.*?<\/script>/gi, '')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/['";]/g, '');
}