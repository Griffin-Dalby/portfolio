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
    () => `     self.passions = {`,
    () => `         'Clean Code',`,
    () => `         'System Architecture',`,
    () => `         'Game Logic'`,
    () => `     }`,
    () => ``,
    () => `     self.stats = {`,
    () => `         languages = {'LuaU', 'Node.JS / JS', 'C#'}`,
    () => `         studioCollabs = {'Lost Hope Studios'}`,           
    () => `     }`,
    () => ``,
    () => `     return self`,
    () => `end`,
    () => ``,
    () => `function Griffin:workingOn()`,
    () => `     return {`,
    () => `         'Anime Frontiers - Lost Hope Studios',`,
    () => `         'Sawdust Library',`,
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

                function loadVideosAfterAnimation() {
                    const placeholders = document.querySelectorAll('.video-placeholder');
                    placeholders.forEach(placeholder => {
                        const video = document.createElement('video');
                        video.className = 'card-img-top'
                        video.src = `./assets/vids/hero/${placeholder.dataset.src}.mp4`;
                        video.preload = 'metadata';
                        video.autoplay = true
                        video.muted = true;
                        video.loop = true;
                        placeholder.replaceWith(video);
                    });
                    
                    document.getElementById('projects-hr').style = 'display: block;'
                    document.getElementById('projects').style    = 'display: block;'
                }

                typeWriter(myName, heroLines[0], 0, 20)
                    .then(() => typeWriterWords(mySkills, heroLines[1], 0, 20))
                    .then(() => typeWriterWords(desc1, heroLines[2], 0, 10))
                    .then(() => typeWriterWords(desc2, heroLines[3], 0, 10))
                    .finally(loadVideosAfterAnimation)
                    
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
                                element.replaceWith(makeA('#', ' projects '))
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

                // Carousel
                const projects = [
                    {
                        videoId: 'sidescroll',
                        title: 'Anime Frontiers',
                        group: 'Lost Hope Studios',
                        description: 'Anime Tower Defense game w/ plenty of unique features to set it apart.',
                        tech: 'LuaU, Efficient Server-Client Replication, Server Authorative'
                    },
                    {
                        videoId: 'harvest',
                        title: 'Harvest [Prototype]',
                        group: 'Personal Project',
                        description: 'Synced time across all servers w/ custom API for syncing, inverse kinematics for slicing, and procedually generated crops.',
                        tech: 'LuaU, Backend/Fullstack Design (w/ Node.JS), Visual Procedual Generation, Inverse Kinematics'
                    },
                    {
                        videoId: 'pistol',
                        title: 'Pistols [Prototype]',
                        group: 'Personal Project',
                        description: 'Took advantage of Inverse Kinematics & CFrame Animation for procedually generated animations alongside fixed VFX & SFX w/ a combat system.',
                        tech: 'LuaU, Inverse Kinematics & CFrame Animation, Shooter'
                    },
                    {
                        videoId: 'mana',
                        title: 'Mana [Prototype]',
                        group: 'Personal Project',
                        description: 'Magical fantasy game where you can gain new abilities and take them onto the battlefield to fight until last player standing.',
                        tech: 'LuaU, Combat & Rounds systems, VFX'
                    }
                ];

                const container = document.querySelector('.carousel-wrapper')
                const content   = document.querySelector('#carousel-content')

                let pressed = false;
                let startX, x

                function createCarouselItems() {
                    const carouselContent = document.getElementById('carousel-content');
                    
                    for (let i = 0; i < projects.length; i++) {
                        const element = projects[i];
                        const item = document.createElement('div'); 
                        item.className = 'carousel-item';
                        
                        const card = document.createElement('div'); 
                        card.className = 'card';

                        const videoPlaceholder = document.createElement('div');
                        videoPlaceholder.className = 'video-placeholder';
                        videoPlaceholder.setAttribute('data-src', element.videoId);
                        videoPlaceholder.textContent = element.title;

                        const cardBody = document.createElement('div'); 
                        cardBody.className = 'card-body';

                        const cardTitle = document.createElement('h5'); 
                        cardTitle.className = 'card-title';
                        cardTitle.innerHTML = element.title;

                        const cardGroup = document.createElement('p');
                        cardGroup.className = 'text-muted small';
                        cardGroup.innerHTML = element.group;

                        const cardDesc = document.createElement('p');
                        cardDesc.className = 'card-text';
                        cardDesc.innerHTML = element.description;

                        const mt = document.createElement('div'); 
                        mt.className = 'mt-auto';
                        const techstack = document.createElement('div'); 
                        techstack.className = 'tech-stack'; 
                        techstack.innerHTML = element.tech;

                        mt.appendChild(techstack);

                        cardBody.appendChild(cardTitle);
                        cardBody.appendChild(cardGroup);
                        cardBody.appendChild(cardDesc);
                        cardBody.appendChild(mt);

                        card.appendChild(videoPlaceholder);
                        card.appendChild(cardBody);

                        item.appendChild(card);
                        carouselContent.appendChild(item);
                    }
                }

                $(document).ready(function() {
                    createCarouselItems();
                    
                    requestAnimationFrame(function() {
                        // Bounds
                        let boundItems = () => {
                            let outer = container.getBoundingClientRect()
                            let inner = content.getBoundingClientRect()

                            if (parseInt(content.style.left) > 0) {
                                content.style.left = '0px'
                            }

                            if (inner.right < outer.right) {
                                content.style.left = `-${inner.width-outer.width}px`
                            }
                        }

                        // Events
                        container.addEventListener('mousedown', (e) => {
                            pressed = true
                            startX = e.offsetX-content.offsetLeft;
                            container.style.cursor = 'grabbing'
                        })

                        container.addEventListener('mouseenter', () => {
                            container.style.cursor = 'grab'
                        })

                        container.addEventListener('mouseup', () => {
                            container.style.cursor = 'grab'
                            pressed = false
                        })

                        container.addEventListener('mousemove', (e) => {
                            if (!pressed) return;
                            e.preventDefault()

                            x = e.offsetX
                            content.style.left = `${x-startX}px`
                            boundItems()
                        })
                    });
                });
                
                // Visibility
                document.getElementById('site-content').style = `display: inherit;`
                document.getElementById('boot-screen').style = `display: none;`
            }, 400)
        })
    }, 400)
})