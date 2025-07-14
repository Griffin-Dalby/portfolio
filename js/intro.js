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
    () => `local types = require(script.types)`,
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
    () => `     local self = setmetatable({} :: types.self, portfolio)`,
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

typeNextLine(moduleLines).then(()=>{
    setTimeout(()=>{
        typeNextLine(scriptLines).then(()=>{
            setTimeout(()=>{
                document.getElementById('site-content').style = `display: inherit;`
                document.getElementById('boot-screen').style = `display: none;`

                // Videos
                const vidNames = [
                    'harvest',
                    'mana',
                    'pistol',
                    'procedual_dungeon',
                    'sidescroll'
                ]
                const vidInfo = {
                    ['harvest']: {
                        title: "\"Harvest\" prototype; collecting wheat with inverse kinematics.",
                    },
                    ['mana']: {
                        title: "\"Mana\" prototype; taking down a wave of zombies.",
                    },
                    ['pistol']: {
                        title: "\"Pistol\" prototype; shoot and reload animations done with inverse kinematics.",
                    },
                    ['procedual_dungeon']: {
                        title: "Procedual Dungeon Generator, just missing hallway connections, although the math is all there.",
                    },
                    ['sidescroll']: {
                        title: "Janky-ish sidescroller, could improve but if I recall I made it in like one sitting.",
                    },
                }

                vidNames.forEach(vidName => {
                    const thisVid = document.createElement('video')
                    
                    thisVid.src = `.\\assets\\vids\\hero\\${vidName}.mp4`
                    thisVid.id = `vid-${vidName}`
                    thisVid.autoplay = true
                    thisVid.muted = true
                    thisVid.loop = true
                    thisVid.playsInline = true

                    const title = vidInfo[vidName].title
                    thisVid.title = title
                    thisVid.setAttribute('aria-label', title)
                    
                    thisVid.style.width = '100%';
                    thisVid.style.maxWidth = '300px'; // adjust as needed
                    thisVid.style.margin = '1rem';
                    thisVid.style.objectFit = 'cover';
                    thisVid.style.borderRadius = '8px';

                    document.getElementById('hero-right').appendChild(thisVid)
                });

            }, 400)
        })
    }, 400)
})