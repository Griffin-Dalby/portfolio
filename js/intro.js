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
    () => `     self.passions = {'Clean Code', 'System Architecture', 'Game Logic'}`,
    () => ``,
    () => `     self.stats = {`,
    () => `             languages = {'LuaU', 'Node.JS / JS', 'C#'}`,                 
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
    'I\'ve been obsessed with creating seamless player experiences since I was ten. What started as curiosity about how games work became a decade-long journey of mastering system architecture and clean code practices.',
    'Currently shipping high-performance systems while building open-source tools that help other developers write better code. Every project gets the same treatment: modular design, optimized performance, and that extra polish that makes players stick around.'
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

                typeNextLine('hero-code', heroCode)

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
                ]

                function createCard(info) {
                    const cardDiv = document.createElement('div');
                    cardDiv.className = 'carousel-card';
                    
                    cardDiv.innerHTML = `
                        <div class="card h-100 shadow-sm">
                            <!--<video class="card-img-top" autoplay muted loop playsinline>
                                <source src="./assets/vids/hero/${info.videoId}.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>-->
                            <div class="video-placeholder" data-src="${info.videoId}">
                                <div class="loading-placeholder">Loading...</div>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title mb-1">${info.title}</h5>
                                <p class="text-muted small mb-2">${info.group}</p>
                                <p class="card-text flex-grow-1">${info.description}</p>
                                <div class="mt-auto">
                                    <small class="text-muted">${info.tech}</small>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    return cardDiv;
                }

                function initializeCarousel() {
                    const track = document.getElementById('carousel-track');
                    const container = document.querySelector('.carousel-container');
                    
                    // Create cards twice to ensure smooth infinite loop
                    const allCards = [];
                    
                    projects.forEach(vidInfo => {
                        allCards.push(createCard(vidInfo));
                    });
                    projects.forEach(vidInfo => {
                        allCards.push(createCard(vidInfo));
                    }); // Second set for seamless loop
                    
                    allCards.forEach(card => {
                        track.appendChild(card);
                    });
                    
                    // Calculate actual dimensions after DOM insertion
                    setTimeout(() => {
                        const firstCard = track.querySelector('.carousel-card');
                        const cardWidth = firstCard.offsetWidth; // Should be 300px
                        const cardMargin = 16; // 1rem = 16px margin-right
                        const cardTotalWidth = cardWidth + cardMargin;
                        
                        const singleSetWidth = cardTotalWidth * projects.length;
                        
                        // Set the CSS custom property
                        document.documentElement.style.setProperty('--single-set-width', `${singleSetWidth}px`);
                        
                        // Also set it directly on the track for backup
                        track.style.setProperty('--single-set-width', `${singleSetWidth}px`);
                        
                    }, 100);
                    
                    let isDragging = false;
                    let startX = 0, currentX = 0;
                    let dragOffset = 0, animationOffset = 0;
                    
                    function getAnimationProgress() {
                        const computedStyle = window.getComputedStyle(track);
                        const transform = computedStyle.transform;
                        if (transform === 'none') return 0;
                        
                        const matrix = transform.match(/matrix\(([^)]+)\)/);
                        if (matrix) {
                            const values = matrix[1].split(', ');
                            return parseFloat(values[4]) || 0;
                        }
                        return 0;
                    }
                    
                    container.addEventListener('mousedown', (e) => {
                        isDragging = true;
                        startX = e.clientX;
                        currentX = e.clientX;
                        container.classList.add('dragging');
                        
                        animationOffset = getAnimationProgress();
                        
                        track.style.animation = 'none';
                        track.style.transform = `translateX(${animationOffset}px)`;
                        
                        dragOffset = 0;
                        
                        e.preventDefault();
                    });
                    
                    document.addEventListener('mousemove', (e) => {
                        if (!isDragging) return;
                        
                        currentX = e.clientX;
                        const deltaX = currentX - startX;
                        dragOffset = deltaX;
                        
                        track.style.transform = `translateX(${animationOffset + dragOffset}px)`;
                        
                        e.preventDefault();
                    });
                    
                    document.addEventListener('mouseup', () => {
                        if (!isDragging) return;
                        
                        isDragging = false;
                        container.classList.remove('dragging');
                        
                        const currentOffset = animationOffset + dragOffset;
                        
                        // Get the actual single set width from CSS property
                        const singleSetWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--single-set-width')) || 1264;
                        
                        // Normalize the offset to ensure smooth looping
                        let normalizedOffset = currentOffset % singleSetWidth;
                        if (normalizedOffset > 0) normalizedOffset -= singleSetWidth;
                        
                        track.style.animation = 'none';
                        track.style.transform = `translateX(${normalizedOffset}px)`;
                        
                        // Force reflow
                        track.offsetHeight;
                        
                        // Restart animation with proper timing
                        track.style.animation = 'scroll-left 20s linear infinite';
                        track.style.animationDelay = `${(normalizedOffset / singleSetWidth) * 20}s`;
                        
                        dragOffset = 0;
                        animationOffset = 0;
                    });
                    
                    container.addEventListener('dragstart', (e) => {
                        e.preventDefault();
                    });
                }

                initializeCarousel()

                // Visibility
                document.getElementById('site-content').style = `display: inherit;`
                document.getElementById('boot-screen').style = `display: none;`
            }, 400)
        })
    }, 400)
})