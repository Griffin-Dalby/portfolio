// Lines
const moduleLines = [
    () => `--[[`,
    () => `     `,
    () => `     Development Portfolio`,
    () => `     Griffin Dalby`,
    () => `     ${new Date().toLocaleString()}`,
    () => `     `,
    () => `--]]`,
    () => ``,
    () => `--[[ IMPORTS ]]--`,
    () => `local Definitions = require(script.Parent.definitions)`,
    () => ``,
    () => `local aboutMe = require(script.aboutMe)`,
    () => `local contactMe = require(script.contactMe)`,
    () => `local projects = require(script.projects)`,
    () => `local webpage = require(script.webpage)`,
    () => ``,
    () => `--[[ TYPE DEFINITIONS ]]--`,
    () => `type methods = Definitions._methods_portfolio`,
    () => `type fields = Definitions._fields_portfolio`,
    () => `export type Portfolio = Definitions.Portfolio`,
    () => `export type Page = Definitions.Page`,
    () => ``,
    () => `--[[ PORTFOLIO ]]--`,
    () => `local Portfolio = {} :: methods`,
    () => `Portfolio.__index = Portfolio`,
    () => ``,
    () => `function Portfolio.new() : Portfolio`,
    () => `     local self = setmetatable({} :: fields, portfolio)`,
    () => `     `,
    () => `     self.aboutMe = aboutMe.fetch()`,
    () => `     self.contactMe = contactMe.fetch()`,
    () => `     self.projects = projects.fetch()`,
    () => `     self.webpage = webpage.create()`,
    () => ``,
    () => `     return self`,
    () => `end`,
    () => ``,
    () => `function Portfolio:render()`,
    () => `     self.webpage:render(`,
    () => `         self.aboutMe,`,
    () => `         self.contactMe,`,
    () => `         self.projects`,
    () => `     )`,
    () => `end`,
    () => ``,
    () => `function Portfolio:getPage(pageName: string) : Page?`,
    () => `     local foundPage = self.webpage:getPage(pageName)`,
    () => '     assert(foundPage, `[{script.Name}] Failed to find page w/ name "{pageName or \'<none>\'}"`)',
    () => `     `,
    () => `     return foundPage`,
    () => `end`,
    () => ``,
    () => `return Portfolio`
].flat()

const scriptLines = [
    () => `--[[`,
    () => `     `,
    () => `     Portfolio Logic`,
    () => `     Griffin Dalby`,
    () => `     ${new Date().toLocaleString()}`,
    () => `     `,
    () => `--]]`,
    () => ``,
    () => `--[[ IMPORTS ]]--`,
    () => `local Portfolio = require(script.portfolio)`,
    () => ``,
    () => `--[[ LOGIC ]]--`,
    () => `local PortfolioController = Portfolio.new()`,
    () => `PortfolioController:render()`
].flat()

const heroWebCode = [
    () => `local Portfolio = require(script.portfolio)`,
    () => ``,
    () => `local PortfolioController = Portfolio.new()`,
    () => `PortfolioController:render()`,
    () => ``,
    () => `local projects = PortfolioController:GetPage('projects') --> Click me!`,
    () => `local services = PortfolioController:GetPage('services')`,
    () => `-- local aboutMe = PortfolioController:GetPage('aboutMe') [Being worked on...]`,
    () => `-- local contactMe = PortfolioController:GetPage('contactMe') [Being worked on...]`,
].flat()
 
const heroCode = [
    () => `local Definitions = require(script.Definitions)`,
    () => ``,
    () => `type methods = Definitions._methods_griffin`,
    () => `type fields = Defintions._fields_griffin`,
    () => `export type Griffin = Definitions.Griffin`,
    () => ``,
    () => `local Griffin = {} :: methods`,
    () => `Griffin.__index = Griffin`,
    () => ``,                    
    () => `function Griffin.new(): Griffin`,
    () => `     local self = setmetatable({} :: fields, Griffin)`,
    () => ``,
    () => `     self.name = 'Griffin Dalby'`,
    () => `     self.role = 'Full-Stack Roblox Developer'`,
    () => `     self.experience = 7 --> Years`,
    () => `     self.skills = {`,
    () => `         'System Architecture',`,
    () => `         'Framework Architecture',`,
    () => `         'Performance Engineering',`,
    () => `         'Low-Latency Networking',`,
    () => `         'Complex Game Logic'`,
    () => `     }`,
    () => ``,
    () => `     self.stats = {`,
    () => `         languages = {'LuaU', 'Node.JS / JS', 'Rust'}`,      
    () => `     }`,
    () => ``,
    () => `     self.achievements = {`,
    () => `         'Built custom, replicated physics systems',`,
    () => `         '10/10 client satisfaction'`,
    () => `     }`,
    () => ``,
    () => `     return self`,
    () => `end`,
    () => ``,
    () => `function Griffin:WorkingOn()`,
    () => `     return {`,
    () => `         'Brainrot Soccer - Costly Sports',`,
    () => `         'Octane - Ignition Switch'`,
    () => `         'Sawdust Library - Proprietary Framework',`,
    () => `     }`,
    () => `end`,
    () => ``,
    () => `return Griffin`
].flat()

const heroLines = [
    'Griffin Dalby',
    'Full-Stack | System Architect | Efficient & Scalable Programming',
    'I architect optimized, modular, and complex systems; From low-latency networking, to full development frameworks such as Sawdust. I love going the extra mile with each project, building systems that are fast, maintainable, and polished enough to make players stick around.',
]


function typeWriter(element, txt, i, spd) {
    return new Promise((resolve) => {
        i = i || 0;
        if (i < txt.length) {
            element.innerHTML += txt.charAt(i);
            i++;
            setTimeout(() => {
                typeWriter(element, txt, i, spd).then(resolve);
            }, spd);
        } else {
            resolve();
        }
    });
}

function typeWriterWords(element, txt, i, spd) {
    return new Promise((resolve) => {
        const words = txt.split(' ');
        i = i || 0;
        
        if (i < words.length) {
            element.innerHTML += (i === 0 ? '' : ' ') + words[i];
            i++;
            setTimeout(() => {
                typeWriterWords(element, txt, i, spd).then(resolve);
            }, spd);
        } else {
            resolve();
        }
    });
}

// Start
const urlParams = new URLSearchParams(window.location.search)
const skipIntro = urlParams.has('skipintro')

function buildMainSite() {
    // Hero
    const myName = document.createElement('h1')
    const mySkills = document.createElement('h2')
    const desc1 = document.createElement('h3'), desc2 = document.createElement('h3')

    const heroLeft = document.getElementById('hero-left')
    heroLeft.appendChild(myName)
    heroLeft.appendChild(mySkills)
    heroLeft.appendChild(desc1)
    heroLeft.appendChild(desc2)

    typeWriter(myName, heroLines[0], 0, 20)
        .then(() => typeWriterWords(mySkills, heroLines[1], 0, 20))
        .then(() => typeWriterWords(desc1, heroLines[2], 0, 10))
        .then(() => typeWriterWords(desc2, heroLines[3], 0, 10))
        
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    code.className = 'language-lua'
    code.id = 'hero-web-code'

    pre.appendChild(code)
    heroLeft.appendChild(pre)

    typeNextLine('hero-griff-code', heroCode)
    typeNextLine('hero-web-code', heroWebCode).then(() => {
        const elems = document.getElementById('hero-web-code').childNodes
        function makeA(href, innerHTML) {
            const a = document.createElement('a')
            a.href = href
            a.innerHTML = innerHTML
            a.className = 'web-code-page'

            return a
        }

        function makeLineClickable(element, href) {
            const codeElement = document.getElementById('hero-web-code')
            let lineContent = element

            while (lineContent.parentNode && lineContent.parentNode !== codeElement) {
                lineContent = lineContent.parentNode
            }
            if (lineContent.parentNode !== codeElement) return

            const siblings = Array.from(codeElement.childNodes)
            const lineIndex = siblings.indexOf(lineContent)
            let start = lineIndex
            let end = lineIndex

            while (start > 0) {
                const previous = siblings[start - 1]
                if (previous.nodeType === Node.TEXT_NODE && previous.textContent.includes('\n')) break
                start--
            }
            while (end + 1 < siblings.length) {
                const next = siblings[end + 1]
                if (next.nodeType === Node.TEXT_NODE && next.textContent.includes('\n')) break
                end++
            }

            const lineLink = document.createElement('a')
            lineLink.href = href
            lineLink.className = 'web-code-line'
            lineLink.style.color = 'inherit'
            lineLink.style.textDecoration = 'none'
            codeElement.insertBefore(lineLink, siblings[start])
            for (let index = start; index <= end; index++) {
                lineLink.appendChild(siblings[index])
            }
        }

        for (const element of Array.from(elems)) {

            switch (element.textContent) {
                case " projects ":
                    makeLineClickable(element, './pages/projects.html')
                    element.replaceWith(makeA('./pages/projects.html', ' projects '))
                    break;

                case " services ":
                    makeLineClickable(element, './pages/services.html')
                    element.replaceWith(makeA('./pages/services.html', ' services '))
                    break;
            
                case " aboutMe ":
                    makeLineClickable(element, '#')
                    element.replaceWith(makeA('#', ' aboutMe '))
                    break;

                case " contactMe ":
                    makeLineClickable(element, '#')
                    element.replaceWith(makeA('#', ' contactMe '))
                    break;

                default:
                    break;
            }
        };
    })
    
    // Visibility
    document.getElementById('site-content').style = `display: inherit;`
    document.getElementById('boot-screen').style = `display: none;`
}

if (!skipIntro) {
    typeNextLine('boot-text', moduleLines).then(()=>{
        setTimeout(()=>{
            typeNextLine('boot-text', scriptLines).then(()=>{
                setTimeout(()=>{
                    buildMainSite()
                }, 400)
            })
        }, 400)
    })
} else {
    buildMainSite()
}