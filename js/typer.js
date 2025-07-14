function typeNextLine(id, lines, i = 0) {
    const text = document.getElementById(id)

    return new Promise((resolve) => {
        text.textContent = ''
        
        function typeNext() {
            if (i >= lines.length) {
                finishBootSequence(text);
                resolve();
                return;
            }
            
            const nextLine = lines[i];
            text.textContent += nextLine() + ((i + 1 >= lines.length) ? "" : "\n");
            Prism.highlightElement(text);
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