function typeNextLine(id, lines, i = 0) {
    const text = document.getElementById(id)

    return new Promise((resolve) => {
        const scrollContainer = text.closest('pre') || text
        text.textContent = ''
        scrollContainer.scrollTop = 0
        
        function typeNext() {
            if (i >= lines.length) {
                finishBootSequence(text);
                resolve();
                return;
            }
            
            const nextLine = lines[i];
            text.textContent += nextLine() + ((i + 1 >= lines.length) ? "" : "\n");
            Prism.highlightElement(text);
            scrollContainer.scrollTop = scrollContainer.scrollHeight
            i++;
            
            setTimeout(typeNext, 30);
        }
        
        typeNext();
    });
}

function finishBootSequence(text) {
    Prism.highlightElement(text);
}

exports = {
    ['typeNextLine']: typeNextLine
}