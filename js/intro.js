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
    () => `--]] Modules`,
    () => `local types = require(script.Parent.types)`,
    () => ``,
    () => `local aboutMe = require(script.aboutMe)`,
    () => `local contactMe = require(script.contactMe)`,
    () => `local projects = require(script.projects)`,
    () => `local webpage = require(script.webpage)`,
    () => ``,
    () => `--]] Portfolio`,
    () => `local portfolio = {}`,
    () => `portfolio.__index = portfolio`,
    () => ``,
    () => `function portfolio.new() : types.Portfolio`,
    () => `     local self = setmetatable({} :: types.self_portfolio, portfolio)`,
    () => `     `,
    () => `     self.aboutMe = aboutMe.fetch()`,
    () => `     self.contactMe = contactMe.fetch()`,
    () => `     self.projects = projects.fetch()`,
    () => `     self.webpage = webpage.create()`,
    () => ``,
    () => `     return self`,
    () => `end`,
    () => ``,
    () => `function portfolio:render()`,
    () => `     self.webpage:render(`,
    () => `         self.aboutMe,`,
    () => `         self.contactMe,`,
    () => `         self.projects`,
    () => `     )`,
    () => `end`,
    () => ``,
    () => `function portfolio:getPage(pageName: string) : types.Page`,
    () => `     local foundPage = self.webpage:getPage(pageName)`,
    () => '     assert(foundPage, `[{script.Name}] Failed to find page w/ name "{pageName or \'<none>\'}"`)',
    () => `     `,
    () => `     return foundPage`,
    () => `end`,
    () => ``,
    () => `return portfolio`
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
    () => `--]] Modules`,
    () => `local portfolio = require(script.portfolio)`,
    () => ``,
    () => `--]] Script`,
    () => `local portfolioController = portfolio.new()`,
    () => `portfolioController:render()`
].flat()

const heroWebCode = [
    () => `local portfolio = require(script.portfolio)\n\nlocal portfolioController = portfolio.new()\nportfolioController:render()`,
    () => ``,
    () => `local projects = portfolioController:getPage('projects') --> Click me!`,
    () => `local services = portfolioController:getPage('services')`,
    () => `local aboutMe = portfolioController:getPage('aboutMe')`,
    () => `local contactMe = portfolioController:getPage('contactMe')`,
].flat()

const heroCode = [
    () => `local types = require(script.types)`,
    () => ``,
    () => `local Griffin = {}`,
    () => `Griffin.__index = Griffin`,
    () => ``,                    
    () => `function Griffin.new(): types.Griffin`,
    () => `     local self = setmetatable({} :: types.self_griffin, Griffin)`,
    () => ``,
    () => `     self.name = 'Griffin Dalby'`,
    () => `     self.role = 'Full-Stack Roblox Developer'`,
    () => `     self.experience = 6 --> Years`,
    () => `     self.skills = {`,
    () => `         'Efficient & Tasteful Code',`,
    () => `         'Complex System Architecture',`,
    () => `         'Game Logic',`,
    () => `         'Deep Engine Knowledge',`,
    () => `     }`,
    () => ``,
    () => `     self.stats = {`,
    () => `         languages = {'LuaU', 'Node.JS / JS', 'Rust', 'C#'}`,
    () => `         studios = {`,
    () => `             ['Lost Hope'] = {`,
    () => `                 Role = 'Head Developer',`,
    () => `                 Since = '3/29/2025',`,
    () => `                 Until = 'Current',`,
    () => `             },`,
    () => `             ['Rustborn'] = {`,
    () => `                 Role = 'Head Developer & Technical Lead',`,
    () => `                 Since = '7/16/2025',`,
    () => `                 Until = 'Current',`,
    () => `             }`,
    () => `         }`,           
    () => `     }`,
    () => ``,
    () => `     return self`,
    () => `end`,
    () => ``,
    () => `function Griffin:workingOn()`,
    () => `     return {`,
    () => `         'Anime Frontiers   - [Lost Hope] Studios',`,
    () => `         'a wasteland shift - [Rustborn] Works'`,
    () => `         'Sawdust Library   - Passion Project',`,
    () => `     }`,
    () => `end`,
    () => ``,
    () => `return Griffin`
].flat()

const heroLines = [
    'Griffin Dalby',
    'Full-Stack | System Architect | Efficient & Scalable Programming',
    'I build fast, modular, and polished systems for Roblox games — from low-latency combat to dev frameworks like Sawdust. Ever since I was a kid I\'ve been obsessed with programming, and in 2018 I started the project that got me interested in LuaU, and ever since then I\'ve been grinding to improve and have been living my early Game Dev dreams that started all the way back then.',
    'My main priority is shipping high-performance systems, and building open-source tools that help me, and other developers write better, more efficient code. Every one of my projects get the same treatment: modular design, optimized performance, and that extra polish that makes players stick around.'
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
typeNextLine('boot-text', moduleLines).then(()=>{
    setTimeout(()=>{
        typeNextLine('boot-text', scriptLines).then(()=>{
            setTimeout(()=>{
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

                    for (let index = 0; index < elems.length; index++) {
                        const element = elems.item(index);

                        switch (element.textContent) {
                            case " projects ":
                                element.replaceWith(makeA('./pages/projects.html', ' projects '))
                                break;

                            case " services ":
                                element.replaceWith(makeA('#', ' services '))
                                break;
                        
                            case " aboutMe ":
                                element.replaceWith(makeA('#', ' aboutMe '))
                                break;

                            case " contactMe ":
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
            }, 400)
        })
    }, 400)
})