document.addEventListener('DOMContentLoaded', () => {
    // T5 Armor Stats: Primary = 30, Secondary = 25, Tertiary = 20
    // Masterworked adds +5 to the 3 stats that don't have primary/secondary/tertiary
    const armorData = [
        // Bulwark: Health-Class
        { name: "Bulwark (Tertiary: Melee)", stats: { h: 30, m: 20, g: 5, s: 5, c: 25, w: 5 } },
        { name: "Bulwark (Tertiary: Grenade)", stats: { h: 30, m: 5, g: 20, s: 5, c: 25, w: 5 } },
        { name: "Bulwark (Tertiary: Super)", stats: { h: 30, m: 5, g: 5, s: 20, c: 25, w: 5 } },
        { name: "Bulwark (Tertiary: Weapons)", stats: { h: 30, m: 5, g: 5, s: 5, c: 25, w: 20 } },
        // Specialist: Class-Weapons
        { name: "Specialist (Tertiary: Health)", stats: { h: 20, m: 5, g: 5, s: 5, c: 30, w: 25 } },
        { name: "Specialist (Tertiary: Melee)", stats: { h: 5, m: 20, g: 5, s: 5, c: 30, w: 25 } },
        { name: "Specialist (Tertiary: Grenade)", stats: { h: 5, m: 5, g: 20, s: 5, c: 30, w: 25 } },
        { name: "Specialist (Tertiary: Super)", stats: { h: 5, m: 5, g: 5, s: 20, c: 30, w: 25 } },
        // Gunner: Weapons-Grenade
        { name: "Gunner (Tertiary: Health)", stats: { h: 20, m: 5, g: 25, s: 5, c: 5, w: 30 } },
        { name: "Gunner (Tertiary: Melee)", stats: { h: 5, m: 20, g: 25, s: 5, c: 5, w: 30 } },
        { name: "Gunner (Tertiary: Super)", stats: { h: 5, m: 5, g: 25, s: 20, c: 5, w: 30 } },
        { name: "Gunner (Tertiary: Class)", stats: { h: 5, m: 5, g: 25, s: 5, c: 20, w: 30 } },
        // Grenadier: Grenade-Super
        { name: "Grenadier (Tertiary: Health)", stats: { h: 20, m: 5, g: 30, s: 25, c: 5, w: 5 } },
        { name: "Grenadier (Tertiary: Melee)", stats: { h: 5, m: 20, g: 30, s: 25, c: 5, w: 5 } },
        { name: "Grenadier (Tertiary: Weapons)", stats: { h: 5, m: 5, g: 30, s: 25, c: 5, w: 20 } },
        { name: "Grenadier (Tertiary: Class)", stats: { h: 5, m: 5, g: 30, s: 25, c: 20, w: 5 } },
        // Paragon: Super-Melee
        { name: "Paragon (Tertiary: Health)", stats: { h: 20, m: 25, g: 5, s: 30, c: 5, w: 5 } },
        { name: "Paragon (Tertiary: Grenade)", stats: { h: 5, m: 25, g: 20, s: 30, c: 5, w: 5 } },
        { name: "Paragon (Tertiary: Weapons)", stats: { h: 5, m: 25, g: 5, s: 30, c: 5, w: 20 } },
        { name: "Paragon (Tertiary: Class)", stats: { h: 5, m: 25, g: 5, s: 30, c: 20, w: 5 } },
        // Brawler: Melee-Health
        { name: "Brawler (Tertiary: Grenade)", stats: { h: 25, m: 30, g: 20, s: 5, c: 5, w: 5 } },
        { name: "Brawler (Tertiary: Super)", stats: { h: 25, m: 30, g: 5, s: 20, c: 5, w: 5 } },
        { name: "Brawler (Tertiary: Weapons)", stats: { h: 25, m: 30, g: 5, s: 5, c: 5, w: 20 } },
        { name: "Brawler (Tertiary: Class)", stats: { h: 25, m: 30, g: 5, s: 5, c: 20, w: 5 } }
    ];

    const calculateBtn = document.getElementById('calculateBtn');
    const resultsContainer = document.getElementById('results-container');
    const majorModsInput = document.getElementById('majorMods');
    const minorModsInput = document.getElementById('minorMods');
    const MAX_STAT_VALUE = 200;

    let allSolutions = [];
    let solutionsPageIndex = 0;
    const solutionsPerPage = 5;

    majorModsInput.addEventListener('input', () => {
        const majorValue = parseInt(majorModsInput.value) || 0;
        minorModsInput.max = 5 - majorValue;
    });
    minorModsInput.addEventListener('input', () => {
        const minorValue = parseInt(minorModsInput.value) || 0;
        majorModsInput.max = 5 - minorValue;
    });

    calculateBtn.addEventListener('click', () => {
        const targets = {
            h: parseInt(document.getElementById('health').value) || 0,
            m: parseInt(document.getElementById('melee').value) || 0,
            g: parseInt(document.getElementById('grenade').value) || 0,
            s: parseInt(document.getElementById('super').value) || 0,
            c: parseInt(document.getElementById('class').value) || 0,
            w: parseInt(document.getElementById('weapons').value) || 0,
        };
        const priorities = {
            h: document.getElementById('health-priority').value,
            m: document.getElementById('melee-priority').value,
            g: document.getElementById('grenade-priority').value,
            s: document.getElementById('super-priority').value,
            c: document.getElementById('class-priority').value,
            w: document.getElementById('weapons-priority').value,
        };
        const availableMods = {
            major: parseInt(majorModsInput.value) || 0,
            minor: parseInt(minorModsInput.value) || 0,
            tuning: 5
        };
        const useTuningMods = document.getElementById('tuningModsToggle').checked;

        resultsContainer.innerHTML = '<h2><span class="loader"></span>Calculating... This may take a moment.</h2>';

        setTimeout(() => {
            allSolutions = findSolutions(targets, priorities, availableMods, useTuningMods);
            solutionsPageIndex = 0;
            displaySolutions();
        }, 50);
    });

    function getStatName(key) {
        const statNames = { h: 'Health', m: 'Melee', g: 'Grenade', s: 'Super', c: 'Class', w: 'Weapons' };
        return statNames[key] || key;
    }

    // Calculates a score for a build based on priorities and how well it meets targets.
    function calculatePriorityScore(finalStats, targets, priorities, meetsAllTargets) {
        let score = meetsAllTargets ? 1000 : 0; // Huge bonus for meeting all targets.
        for (const stat of Object.keys(finalStats)) {
            const value = finalStats[stat];
            const target = targets[stat];
            const deficit = Math.max(0, target - value);
            const excess = Math.max(0, value - target);

            const priorityMultiplier = { high: 10, normal: 5, low: 2 };
            score -= deficit * priorityMultiplier[priorities[stat]];

            if (priorities[stat] === 'high') score += excess * 1.5;
            else if (priorities[stat] === 'normal') score += excess * 0.5;
            else score -= excess * 2; // Penalize wasted stats on low-priority.
        }
        return Math.round(score);
    }

    // Applies tuning, major, and minor mods to a base stat profile to reach targets.
    function applyMods(baseStats, targets, priorities, availableMods, useTuningMods) {
        let workingStats = { ...baseStats };
        const modsUsed = [];
        let remainingMajor = availableMods.major;
        let remainingMinor = availableMods.minor;
        let remainingTuning = availableMods.tuning;
        const statKeys = Object.keys(targets);

        // --- Phase 1: Strategic Tuning Mod Application (if enabled) ---
        if (useTuningMods) {
            for (let i = 0; i < 5; i++) { // Max 5 tuning mods
                if (remainingTuning <= 0) break;

                // Find the best stat to increase (highest priority deficit)
                const deficits = statKeys
                    .map(stat => ({ stat, deficit: Math.max(0, targets[stat] - workingStats[stat]) }))
                    .filter(d => d.deficit > 0 && workingStats[d.stat] < MAX_STAT_VALUE)
                    .sort((a, b) => {
                        const priorityWeight = { high: 3, normal: 2, low: 1 };
                        return priorityWeight[priorities[b.stat]] - priorityWeight[priorities[a.stat]];
                    });

                if (deficits.length === 0) break; // No more deficits to fill
                const statToIncrease = deficits[0].stat;

                // Find the best stat to decrease (lowest priority, most excess)
                const sources = statKeys
                    // This is a corrected line from a previous version
                    .filter(stat => stat !== statToIncrease && workingStats[stat] >= 5)
                    .map(stat => {
                        let score = 0;
                        if (priorities[stat] === 'low') score += 100;
                        if (priorities[stat] === 'normal') score += 50;
                        score += Math.max(0, workingStats[stat] - targets[stat]); // Add excess points to score
                        return { stat, score };
                    })
                    .sort((a, b) => b.score - a.score);

                if (sources.length === 0) break; // No stat to safely take points from
                const statToDecrease = sources[0].stat;

                // Apply the tuning mod
                workingStats[statToIncrease] = Math.min(MAX_STAT_VALUE, workingStats[statToIncrease] + 5);
                workingStats[statToDecrease] -= 5;
                modsUsed.push(`Tuning: +5 ${getStatName(statToIncrease)}, -5 ${getStatName(statToDecrease)}`);
                remainingTuning--;
            }
        }

        // --- Phase 2: Standard Major/Minor Mod Application ---
        const statOrder = Object.keys(targets).sort((a, b) => {
            const priorityWeight = { high: 3, normal: 2, low: 1 };
            const aWeight = priorityWeight[priorities[a]];
            const bWeight = priorityWeight[priorities[b]];
            if (aWeight !== bWeight) return bWeight - aWeight;
            return (targets[b] - workingStats[b]) - (targets[a] - workingStats[a]);
        });

        for (const stat of statOrder) {
            let deficit = Math.max(0, targets[stat] - workingStats[stat]);
            while (deficit >= 10 && remainingMajor > 0 && workingStats[stat] < MAX_STAT_VALUE) {
                workingStats[stat] += 10;
                deficit -= 10;
                remainingMajor--;
                modsUsed.push(`Major ${getStatName(stat)} Mod (+10)`);
            }
            while (deficit > 0 && remainingMinor > 0 && workingStats[stat] < MAX_STAT_VALUE) {
                workingStats[stat] += 5;
                deficit -= 5;
                remainingMinor--;
                modsUsed.push(`Minor ${getStatName(stat)} Mod (+5)`);
            }
        }

        return { finalStats: workingStats, modsUsed };
    }

    // Pre-filters armor pieces to find the most efficient ones for the given targets.
    function getOptimalArmorPieces(targets, priorities) {
        const priorityWeight = { high: 3, normal: 2, low: 1 };
        return armorData.map(piece => {
            let efficiencyScore = 0;
            for (const stat in piece.stats) {
                // Reward pieces that have stats we care about
                if (targets[stat] > 0) {
                    efficiencyScore += piece.stats[stat] * priorityWeight[priorities[stat]];
                }
                // Penalize pieces for having stats we don't care about (target is 0)
                else {
                    efficiencyScore -= piece.stats[stat];
                }
            }
            return { ...piece, efficiencyScore };
        }).sort((a, b) => b.efficiencyScore - a.efficiencyScore);
    }

    function findSolutions(targets, priorities, availableMods, useTuningMods) {
        const solutions = [];
        const processedCombinations = new Set();
        const maxSolutions = 500;

        // Pre-filter to get the most efficient pieces, drastically improving performance.
        const optimalPieces = getOptimalArmorPieces(targets, priorities).slice(0, 8);

        for (const helmet of optimalPieces) {
            for (const arms of optimalPieces) {
                for (const chest of optimalPieces) {
                    for (const legs of optimalPieces) {
                        for (const classItem of optimalPieces) {
                            if (solutions.length >= maxSolutions) return solutions;

                            const armorCombination = [helmet, arms, chest, legs, classItem];
                            const combinationKey = armorCombination.map(p => p.name).sort().join(',');

                            if (processedCombinations.has(combinationKey)) continue;
                            processedCombinations.add(combinationKey);

                            const baseStats = { h: 0, m: 0, g: 0, s: 0, c: 0, w: 0 };
                            for (const piece of armorCombination) {
                                for (const stat in baseStats) {
                                    baseStats[stat] += piece.stats[stat];
                                }
                            }

                            const result = applyMods(baseStats, targets, priorities, availableMods, useTuningMods);

                            const meetsAllTargets = Object.keys(targets).every(stat => result.finalStats[stat] >= targets[stat]);
                            const priorityScore = calculatePriorityScore(result.finalStats, targets, priorities, meetsAllTargets);

                            solutions.push({
                                // We're now only storing the unique armor piece names, not their assigned slots
                                armor: armorCombination.map(p => p.name).sort(),
                                mods: result.modsUsed,
                                final: result.finalStats,
                                meetsAllTargets,
                                priorityScore,
                            });
                        }
                    }
                }
            }
        }
        return solutions;
    }

    function formatStats(stats) {
        // Sort stats to always display in the same order
        const orderedStats = ['h', 'm', 'g', 's', 'c', 'w'];
        return orderedStats.map(stat => `${getStatName(stat).substring(0, 1)}:${stats[stat]}`).join(' ');
    }

    function displaySolutions() {
        const targets = {
            h: parseInt(document.getElementById('health').value) || 0,
            m: parseInt(document.getElementById('melee').value) || 0,
            g: parseInt(document.getElementById('grenade').value) || 0,
            s: parseInt(document.getElementById('super').value) || 0,
            c: parseInt(document.getElementById('class').value) || 0,
            w: parseInt(document.getElementById('weapons').value) || 0,
        };

        // Remove duplicate solutions.
        const uniqueSolutions = [];
        const seenCombinations = new Set();
        for (const solution of allSolutions) {
            const combinationKey = solution.armor.join(',');
            if (!seenCombinations.has(combinationKey)) {
                seenCombinations.add(combinationKey);
                uniqueSolutions.push(solution);
            }
        }

        const metTargets = uniqueSolutions.filter(s => s.meetsAllTargets);
        const partialTargets = uniqueSolutions.filter(s => !s.meetsAllTargets);

        metTargets.sort((a, b) => b.priorityScore - a.priorityScore);
        partialTargets.sort((a, b) => b.priorityScore - a.priorityScore);

        const solutionsToRender = metTargets.length > 0 ? metTargets : partialTargets;

        if (solutionsToRender.length === 0) {
            resultsContainer.innerHTML = '<h2>No solutions found. Try different targets or more available mods.</h2>';
            return;
        }

        let html = '';
        if (solutionsPageIndex === 0) {
            if (metTargets.length > 0) {
                html += '<h2 class="results-group-header met-target-header">✔️ Builds Meeting All Targets</h2>';
            } else {
                html += '<h2 class="results-group-header partial-target-header">⚠️ Closest Alternative Builds</h2>';
            }
        }

        const start = solutionsPageIndex * solutionsPerPage;
        const end = start + solutionsPerPage;
        const currentSolutions = solutionsToRender.slice(start, end);

        currentSolutions.forEach((solution, index) => {
            const title = `Build #${start + index + 1}`;

            // Count the number of each armor piece needed
            const armorCounts = {};
            solution.armor.forEach(piece => {
                armorCounts[piece] = (armorCounts[piece] || 0) + 1;
            });

            const armorListHtml = Object.keys(armorCounts).map(pieceName => {
                const count = armorCounts[pieceName];
                const countString = count > 1 ? ` x${count}` : '';
                return `<li><b>${pieceName}</b>${countString}</li>`;
            }).join('');

            // Consolidate mods
            const modCounts = {};
            solution.mods.forEach(mod => {
                modCounts[mod] = (modCounts[mod] || 0) + 1;
            });
            const modListHtml = Object.keys(modCounts).map(modName => {
                const count = modCounts[modName];
                const countString = count > 1 ? ` x${count}` : '';
                const isTuning = modName.startsWith('Tuning');
                return `<div class="mod-item ${isTuning ? 'tuning-mod' : ''}"><span>${modName}${countString}</span></div>`;
            }).join('');

            html += `
                <div class="solution">
                    <h3>${title} <span class="priority-score">(Priority Score: ${solution.priorityScore})</span></h3>
                    <div class="solution-grid">
                        <div class="solution-column">
                            <h4>Armor Pieces Needed</h4>
                            <ul>
                                ${armorListHtml}
                            </ul>
                        </div>
                        <div class="solution-column">
                            <h4>Mods Required</h4>
                            <div class="mods-breakdown">
                                ${modListHtml.length > 0 ? modListHtml : '<div class="mod-item"><span>No mods needed</span></div>'}
                            </div>
                        </div>
                    </div>
                    <div class="stats-breakdown">
                        <h4>Final Stats</h4>
                        <div class="final-stats-display">
                            ${formatStats(solution.final)}
                        </div>
                    </div>
                </div>
            `;
        });

        // Add "Show More" button if there are more solutions
        if (end < solutionsToRender.length) {
            html += `<button id="showMoreBtn" class="show-more-btn">Show More Builds</button>`;
        }

        if (solutionsPageIndex === 0) {
            resultsContainer.innerHTML = html;
        } else {
            const showMoreBtn = document.getElementById('showMoreBtn');
            if (showMoreBtn) {
                showMoreBtn.remove();
            }
            resultsContainer.insertAdjacentHTML('beforeend', html);
        }

        const newShowMoreBtn = document.getElementById('showMoreBtn');
        if (newShowMoreBtn) {
            newShowMoreBtn.addEventListener('click', () => {
                solutionsPageIndex++;
                displaySolutions();
            });
        }
    }
});