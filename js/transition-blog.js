// Lines
const moduleLines = [
    () => `--]] Modules`,
    () => `local portfolio = require(script.portfolio)`,
    () => ``,
    () => `portfolio:showPage('blog')`
].flat()

// Start
typeNextLine('boot-text', moduleLines).then(()=>{
    setTimeout(()=>{
        // Visibility
        document.getElementById('site-content').style = `display: inherit;`
        document.getElementById('boot-screen').style = `display: none;`

    }, 400)
})