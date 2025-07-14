const bootText = document.getElementById('boot-text')

function typeNextLine(lines, clickableElements, i = 0) {
    return new Promise((resolve) => {
        bootText.textContent = ''
        clickableElements = clickableElements || [];
        
        function typeNext() {
            if (i >= lines.length) {
                finishBootSequence(clickableElements);
                resolve();
                return;
            }
            
            const nextLine = lines[i];
            bootText.textContent += nextLine() + ((i + 1 >= lines.length) ? "" : "\n");
            Prism.highlightElement(bootText);
            i++;
            
            setTimeout(typeNext, 30);
        }
        
        typeNext();
    });
}

function finishBootSequence(clickableElements) {
    Prism.highlightElement(bootText);
    setTimeout(() => {
        addClickableElements(clickableElements);
    }, 100);
}

function addClickableElements(clickableElements) {
    const lines = bootText.innerHTML.split('\n');
    
    clickableElements.forEach(({ line, text, href }) => {
        if (lines[line]) {
            lines[line] = lines[line].replace(
                text,
                `<a href="${href}" class="clickable">${text}</a>`
            );
        }
    });
    
    bootText.innerHTML = lines.join('\n');
}

exports = {
    ['typeNextLine']: typeNextLine
}