// Lines
const moduleLines = [
    () => `--]] Modules`,
    () => `local portfolio = require(script.portfolio)`,
    () => ``,
    () => `portfolio:showPage('services')`
].flat()

const skills_lines = [
    () => `* COMPLEX SKILLS *`,
    () => `1. Complex System Architecture`,
    () => `2. Advanced NetCode Implementations`,
    () => `3. Custom Replication`,
    () => `4. Framework & Tool Design`,
    () => `5. Performance Optimizations`,
    () => `6. Healthy Documentation Standards`,
    () => `7. Focus on player view & psychology`,
    () => `8. Deep Engine Understanding`,
    () => ``,
    () => `* SPECIALIZED GAME SKILLS *`,
    () => `1. Combat Systems (PvP, PvE)`,
    () => `2. AI Systems`,
    () => `3. Physics Systems`,
    () => `4. Inventory Systems`,
    () => `5. Diegetic Mechanics`,
    () => ``,
    () => `* SOFT SKILLS *`,
    () => `1. Great Work Ethic`,
    () => `2. Working Well With Teams`,
    () => `3. Calm & Collected Under Pressure`,
    () => `4. Mature`,
    () => `5. Clear Communication`
].flat()
const pricing_lines = [
    () => "* PRICING *",
    () => "I work on a paid per-milestone, or per-hour.",
    () => "Milestone pricing depends on scope, with a minimum of $400.",
    () => "Hourly rate starts at $40, depending on project complexity.",
    () => "",
    () => "* PROCESS *",
    () => "1. Discovery & Scope",
    () => "2. Milestone Agreement",
    () => "3. Contracts & NDAs",
    () => "4. Development & Updates",
    () => "5. Delivery & Handoff",
    () => "",
    () => "* BEST FIT FOR *",
    () => "1. Studios building complex, feature-rich games",
    () => "2. Projects that need systems built to last",
    () => "3. Teams that want a developer who thinks beyond the ticket",
    () => "4. Games where networking & feel truly matter",
    () => "",
    () => "* NOT A GOOD FIT IF *",
    () => "1. No defined scope or budget",
    () => "2. Looking for the cheapest option"
].flat()

// Start
typeNextLine('boot-text', moduleLines).then(()=>{
    setTimeout(()=>{
        // Visibility
        document.getElementById('site-content').style = `display: inherit;`
        document.getElementById('boot-screen').style = `display: none;`

        typeNextLine('skills', skills_lines)
        typeNextLine('pricing', pricing_lines)
    }, 400)

    
})