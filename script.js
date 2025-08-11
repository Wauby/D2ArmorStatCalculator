document.addEventListener('DOMContentLoaded', () => {
    // T5 Armor Stats: Primary = 30, Secondary = 25, Tertiary = 20
    // Masterworked adds +5 to the 3 stats that don't have primary/secondary/tertiary
    const armorData = [
        // Bulwark: Health-Class (tertiary options: Melee, Grenade, Super, Weapons)
        { name: "Bulwark (Tertiary: Melee)", stats: { h: 30, m: 20, g: 5, s: 5, c: 25, w: 5 } },
        { name: "Bulwark (Tertiary: Grenade)", stats: { h: 30, m: 5, g: 20, s: 5, c: 25, w: 5 } },
        { name: "Bulwark (Tertiary: Super)", stats: { h: 30, m: 5, g: 5, s: 20, c: 25, w: 5 } },
        { name: "Bulwark (Tertiary: Weapons)", stats: { h: 30, m: 5, g: 5, s: 5, c: 25, w: 20 } },
        // Specialist: Class-Weapons (tertiary options: Health, Melee, Grenade, Super)
        { name: "Specialist (Tertiary: Health)", stats: { h: 20, m: 5, g: 5, s: 5, c: 30, w: 25 } },
        { name: "Specialist (Tertiary: Melee)", stats: { h: 5, m: 20, g: 5, s: 5, c: 30, w: 25 } },
        { name: "Specialist (Tertiary: Grenade)", stats: { h: 5, m: 5, g: 20, s: 5, c: 30, w: 25 } },
        { name: "Specialist (Tertiary: Super)", stats: { h: 5, m: 5, g: 5, s: 20, c: 30, w: 25 } },
        // Gunner: Weapons-Grenade (tertiary options: Health, Melee, Super, Class)
        { name: "Gunner (Tertiary: Health)", stats: { h: 20, m: 5, g: 25, s: 5, c: 5, w: 30 } },
        { name: "Gunner (Tertiary: Melee)", stats: { h: 5, m: 20, g: 25, s: 5, c: 5, w: 30 } },
        { name: "Gunner (Tertiary: Super)", stats: { h: 5, m: 5, g: 25, s: 20, c: 5, w: 30 } },
        { name: "Gunner (Tertiary: Class)", stats: { h: 5, m: 5, g: 25, s: 5, c: 20, w: 30 } },
        // Grenadier: Grenade-Super (tertiary options: Health, Melee, Weapons, Class)
        { name: "Grenadier (Tertiary: Health)", stats: { h: 20, m: 5, g: 30, s: 25, c: 5, w: 5 } },
        { name: "Grenadier (Tertiary: Melee)", stats: { h: 5, m: 20, g: 30, s: 25, c: 5, w: 5 } },
        { name: "Grenadier (Tertiary: Weapons)", stats: { h: 5, m: 5, g: 30, s: 25, c: 5, w: 20 } },
        { name: "Grenadier (Tertiary: Class)", stats: { h: 5, m: 5, g: 30, s: 25, c: 20, w: 5 } },
        // Paragon: Super-Melee (tertiary options: Health, Grenade, Weapons, Class)
        { name: "Paragon (Tertiary: Health)", stats: { h: 20, m: 25, g: 5, s: 30, c: 5, w: 5 } },
        { name: "Paragon (Tertiary: Grenade)", stats: { h: 5, m: 25, g: 20, s: 30, c: 5, w: 5 } },
        { name: "Paragon (Tertiary: Weapons)", stats: { h: 5, m: 25, g: 5, s: 30, c: 5, w: 20 } },
        { name: "Paragon (Tertiary: Class)", stats: { h: 5, m: 25, g: 5, s: 30, c: 20, w: 5 } },
        // Brawler: Melee-Health (tertiary options: Grenade, Super, Weapons, Class)
        { name: "Brawler (Tertiary: Grenade)", stats: { h: 25, m: 30, g: 20, s: 5, c: 5, w: 5 } },
        { name: "Brawler (Tertiary: Super)", stats: { h: 25, m: 30, g: 5, s: 20, c: 5, w: 5 } },
        { name: "Brawler (Tertiary: Weapons)", stats: { h: 25, m: 30, g: 5, s: 5, c: 5, w: 20 } },
        { name: "Brawler (Tertiary: Class)", stats: { h: 25, m: 30, g: 5, s: 5, c: 20, w: 5 } }
    ];

    const calculateBtn = document.getElementById('calculateBtn');
    const resultsContainer = document.getElementById('results-container');
    const majorModsInput = document.getElementById('majorMods');
    const minorModsInput = document.getElementById('minorMods');
    const tuningModsToggle = document.getElementById('tuningModsToggle');

    // Logic to ensure total mods <= 5
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

        const maxStats = {
            h: parseInt(document.getElementById('health-max').value) || 200,
            m: parseInt(document.getElementById('melee-max').value) || 200,
            g: parseInt(document.getElementById('grenade-max').value) || 200,
            s: parseInt(document.getElementById('super-max').value) || 200,
            c: parseInt(document.getElementById('class-max').value) || 200,
            w: parseInt(document.getElementById('weapons-max').value) || 200,
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
            minor: parseInt(minorModsInput.value) || 0
        };
        const useTuningMods = tuningModsToggle.checked;

        resultsContainer.innerHTML = '<h2><span class="loader"></span>Calculating... This may take a moment.</h2>';

        setTimeout(() => {
            const solutions = findSolutions(targets, maxStats, priorities, availableMods, useTuningMods);
            displaySolutions(solutions, targets, priorities, useTuningMods);
        }, 50);
    });

    function getStatName(key) {
        const statNames = {
            h: 'Health',
            m: 'Melee',
            g: 'Grenade',
            s: 'Super',
            c: 'Class',
            w: 'Weapons'
        };
        return statNames[key] || key;
    }

    function calculatePriorityScore(finalStats, targets, priorities) {
        let score = 0;

        for (const [stat, value] of Object.entries(finalStats)) {
            const target = targets[stat];
            const priority = priorities[stat];
            const excess = Math.max(0, value - target);
            const deficit = Math.max(0, target - value);

            if (priority === 'high') {
                // Heavy penalty for not meeting high priority targets
                score -= deficit * 10;
                // Small bonus for excess in high priority stats
                score += excess * 1;
            } else if (priority === 'low') {
                // Small penalty for not meeting low priority targets
                score -= deficit * 1;
                // Heavy penalty for excess in low priority stats (waste)
                score -= excess * 3;
            } else { // normal priority
                // Medium penalty for not meeting normal targets
                score -= deficit * 3;
                // No bonus or penalty for excess in normal stats
            }
        }

        return score;
    }

    function applyTuningMods(baseStats, deficits, useTuningMods, priorities, maxStats, remainingMajor, remainingMinor, targets) {
        if (!useTuningMods) return { finalStats: { ...baseStats }, modsUsed: [] };

        const finalStats = { ...baseStats };
        const modsUsed = [];
        const statKeys = ['h', 'm', 'g', 's', 'c', 'w'];
        let tuningModsUsed = 0;
        const maxTuningMods = 5;

        // Phase 2a: Use tuning mods to cover remaining deficits
        let hasDeficits = Object.values(deficits).some(d => d > 0);
        while (hasDeficits && tuningModsUsed < maxTuningMods) {
            let modApplied = false;

            // Find highest priority stat with deficit that can be increased
            const deficitStats = statKeys.filter(stat =>
                deficits[stat] > 0 && finalStats[stat] + 5 <= maxStats[stat]
            ).sort((a, b) => {
                const priorityWeight = { high: 3, normal: 2, low: 1 };
                const aWeight = priorityWeight[priorities[a]] || 2;
                const bWeight = priorityWeight[priorities[b]] || 2;
                if (aWeight !== bWeight) return bWeight - aWeight;
                return deficits[b] - deficits[a];
            });

            for (const increaseStat of deficitStats) {
                // Find stat to decrease (prefer deprioritized stats and stats with excess)
                // IMPORTANT: Cannot decrease the same stat we're increasing
                const decreaseStats = statKeys.filter(stat =>
                    stat !== increaseStat && // Cannot be the same stat!
                    finalStats[stat] > 5 &&
                    (priorities[stat] === 'low' || finalStats[stat] > (targets[stat] || 0))
                ).sort((a, b) => {
                    const priorityWeight = { high: 3, normal: 2, low: 1 };
                    const aPriorityWeight = priorityWeight[priorities[a]] || 2;
                    const bPriorityWeight = priorityWeight[priorities[b]] || 2;

                    // Strongly prefer low priority stats for decreasing
                    if (priorities[a] === 'low' && priorities[b] !== 'low') return -1;
                    if (priorities[b] === 'low' && priorities[a] !== 'low') return 1;

                    // Then prefer stats with more excess over target
                    const aExcess = Math.max(0, finalStats[a] - (targets[a] || 0));
                    const bExcess = Math.max(0, finalStats[b] - (targets[b] || 0));
                    if (aExcess !== bExcess) return bExcess - aExcess;

                    // Finally prefer higher current values
                    return finalStats[b] - finalStats[a];
                });

                if (decreaseStats.length > 0) {
                    const decreaseStat = decreaseStats[0];

                    // Apply the tuning mod
                    finalStats[increaseStat] += 5;
                    finalStats[decreaseStat] -= 5;
                    deficits[increaseStat] = Math.max(0, deficits[increaseStat] - 5);
                    modsUsed.push(`Tuning: +5 ${getStatName(increaseStat)}, -5 ${getStatName(decreaseStat)}`);
                    tuningModsUsed++;
                    modApplied = true;
                    break;
                }
            }

            if (!modApplied) break;
            hasDeficits = Object.values(deficits).some(d => d > 0);
        }

        // Phase 2b: Use remaining tuning mods to boost prioritized stats
        while (tuningModsUsed < maxTuningMods) {
            let modApplied = false;

            // Find high priority stats that can be boosted (more generous threshold)
            const boostableStats = statKeys.filter(stat =>
                priorities[stat] === 'high' &&
                finalStats[stat] + 5 <= maxStats[stat]
                // Remove the arbitrary +20 limit to allow more boosting of high priority stats
            ).sort((a, b) => {
                // Prefer stats that are closer to their target (less excess)
                const aExcess = Math.max(0, finalStats[a] - targets[a]);
                const bExcess = Math.max(0, finalStats[b] - targets[b]);
                return aExcess - bExcess;
            });

            // Find stats to decrease - be more aggressive about what can be decreased
            const allDecreaseStats = statKeys.filter(stat =>
                finalStats[stat] > 5 && (
                    // Low priority stats can always be decreased
                    priorities[stat] === 'low' ||
                    // Stats that have reached their target can be decreased
                    finalStats[stat] >= targets[stat] ||
                    // Normal priority stats with excess can be decreased
                    (priorities[stat] === 'normal' && finalStats[stat] > targets[stat])
                )
            ).sort((a, b) => {
                // Strongly prefer low priority stats
                if (priorities[a] === 'low' && priorities[b] !== 'low') return -1;
                if (priorities[b] === 'low' && priorities[a] !== 'low') return 1;

                // Then prefer stats that have met their target
                const aMetTarget = finalStats[a] >= targets[a];
                const bMetTarget = finalStats[b] >= targets[b];
                if (aMetTarget && !bMetTarget) return -1;
                if (bMetTarget && !aMetTarget) return 1;

                // Then prefer stats with more excess
                const aExcess = Math.max(0, finalStats[a] - targets[a]);
                const bExcess = Math.max(0, finalStats[b] - targets[b]);
                return bExcess - aExcess;
            });

            if (boostableStats.length > 0) {
                const increaseStat = boostableStats[0];

                // Find a decreasable stat that isn't the same as the increase stat
                const decreaseStats = allDecreaseStats.filter(stat => stat !== increaseStat);

                if (decreaseStats.length > 0) {
                    const decreaseStat = decreaseStats[0];

                    finalStats[increaseStat] += 5;
                    finalStats[decreaseStat] -= 5;
                    modsUsed.push(`Tuning: +5 ${getStatName(increaseStat)}, -5 ${getStatName(decreaseStat)}`);
                    tuningModsUsed++;
                    modApplied = true;
                }
            }

            if (!modApplied) break;
        }

        // Phase 2c: Use remaining slots for +1/+1/+1 mods if beneficial
        const remainingSlots = maxTuningMods - tuningModsUsed;
        if (remainingSlots > 0) {
            // Check if we can benefit from +1/+1/+1 mods
            const beneficialStats = statKeys.filter(stat =>
                priorities[stat] === 'high' &&
                finalStats[stat] + 1 <= maxStats[stat] &&
                finalStats[stat] < targets[stat] + 20 // Don't over-boost
            );

            if (beneficialStats.length >= 3) {
                modsUsed.push(`${remainingSlots}x Tuning: +1/+1/+1 to high priority stats`);
                for (let i = 0; i < remainingSlots; i++) {
                    for (let j = 0; j < 3 && j < beneficialStats.length; j++) {
                        const stat = beneficialStats[j % beneficialStats.length];
                        if (finalStats[stat] + 1 <= maxStats[stat]) {
                            finalStats[stat] += 1;
                        }
                    }
                }
            }
        }

        return { finalStats, modsUsed };
    }

    function calculateModsNeeded(deficits, availableMods, useTuningMods, priorities, maxStats, baseStats, targets) {
        const modsUsed = [];
        let remainingMajor = availableMods.major;
        let remainingMinor = availableMods.minor;
        const workingStats = { ...baseStats };
        const workingDeficits = { ...deficits };

        // Phase 1: Use standard mods to meet targets
        // Prioritize high-priority stats first
        const statOrder = Object.keys(workingDeficits).sort((a, b) => {
            const priorityWeight = { high: 3, normal: 2, low: 1 };
            const aWeight = priorityWeight[priorities[a]] || 2;
            const bWeight = priorityWeight[priorities[b]] || 2;
            if (aWeight !== bWeight) return bWeight - aWeight;
            return workingDeficits[b] - workingDeficits[a]; // Then by deficit size
        });

        for (const stat of statOrder) {
            const deficit = workingDeficits[stat];
            if (deficit > 0) {
                // Use major mods first
                const majorToUse = Math.min(Math.floor(deficit / 10), remainingMajor);
                if (majorToUse > 0) {
                    modsUsed.push(`${majorToUse}x Major ${getStatName(stat)} (+${majorToUse * 10})`);
                    workingStats[stat] += majorToUse * 10;
                    workingDeficits[stat] -= majorToUse * 10;
                    remainingMajor -= majorToUse;
                }

                // Use minor mods for remainder
                const remainingDeficit = workingDeficits[stat];
                const minorToUse = Math.min(Math.ceil(remainingDeficit / 5), remainingMinor);
                if (minorToUse > 0) {
                    modsUsed.push(`${minorToUse}x Minor ${getStatName(stat)} (+${minorToUse * 5})`);
                    workingStats[stat] += minorToUse * 5;
                    workingDeficits[stat] -= minorToUse * 5;
                    remainingMinor -= minorToUse;
                }
            }
        }

        // Phase 2: Apply tuning mods if enabled
        if (useTuningMods) {
            const tuningResult = applyTuningMods(workingStats, workingDeficits, useTuningMods, priorities, maxStats, remainingMajor, remainingMinor, targets);
            modsUsed.push(...tuningResult.modsUsed);
            return { modsUsed, finalStats: tuningResult.finalStats };
        }

        return { modsUsed, finalStats: workingStats };
    }

    function canCoverDeficit(deficits, availableMods, useTuningMods, priorities, maxStats, baseStats) {
        let neededMajors = 0;
        let neededMinors = 0;

        for (const key in deficits) {
            let d = deficits[key];
            if (d <= 0) continue;

            neededMajors += Math.floor(d / 10);
            const remainder = d % 10;
            neededMinors += Math.ceil(remainder / 5);
        }

        if (neededMajors > availableMods.major) {
            const shortfall = neededMajors - availableMods.major;
            neededMinors += shortfall * 2;
        }

        const canCoverWithStandard = neededMinors <= availableMods.minor;

        if (canCoverWithStandard) {
            return true;
        }

        // If tuning mods are enabled, we can be more flexible
        if (useTuningMods) {
            const totalDeficit = Object.values(deficits).reduce((sum, val) => sum + Math.max(0, val), 0);
            const availableStandardPoints = (availableMods.major * 10) + (availableMods.minor * 5);

            // Check if we can redistribute stats to cover deficits
            let redistributablePoints = 0;
            for (const [stat, value] of Object.entries(baseStats)) {
                if (priorities[stat] !== 'high' && value > 5) {
                    redistributablePoints += Math.min(value - 5, 25); // Max 5 tuning mods * 5 points each
                }
            }

            return totalDeficit <= availableStandardPoints + redistributablePoints + 15; // Allow some flexibility
        }

        return false;
    }

    function checkMaxStatConstraints(finalStats, maxStats) {
        for (const [stat, value] of Object.entries(finalStats)) {
            if (value > maxStats[stat]) {
                return false;
            }
        }
        return true;
    }

    function calculateArmorEfficiency(armorPiece, targets, priorities) {
        let efficiency = 0;

        for (const [stat, value] of Object.entries(armorPiece.stats)) {
            const target = targets[stat];
            const priority = priorities[stat];

            if (target > 0) {
                // Positive contribution for stats we need
                if (priority === 'high') {
                    efficiency += Math.min(value, target) * 3; // High value for needed high-priority stats
                } else if (priority === 'normal') {
                    efficiency += Math.min(value, target) * 2; // Medium value for needed normal stats
                } else { // low priority
                    efficiency += Math.min(value, target) * 1; // Low value for needed low-priority stats
                }
            }

            // Penalty for excessive stats we don't need
            const excess = Math.max(0, value - target);
            if (excess > 0) {
                if (priority === 'low' || target === 0) {
                    efficiency -= excess * 2; // Heavy penalty for unwanted stats
                } else if (priority === 'normal') {
                    efficiency -= excess * 0.5; // Small penalty for excess normal stats
                }
                // No penalty for excess high-priority stats
            }
        }

        return efficiency;
    }

    function getOptimalArmorPieces(targets, priorities, maxPiecesPerSlot = 5) {
        const rankedPieces = armorData.map(piece => ({
            ...piece,
            efficiency: calculateArmorEfficiency(piece, targets, priorities)
        })).sort((a, b) => b.efficiency - a.efficiency);

        // Return top pieces for efficiency
        return rankedPieces.slice(0, maxPiecesPerSlot);
    }

    function findSolutions(targets, maxStats, priorities, availableMods, useTuningMods) {
        const solutions = [];

        // Get optimal armor pieces based on target stats and priorities
        const optimalPieces = getOptimalArmorPieces(targets, priorities, 8);

        console.log('Using top armor pieces:', optimalPieces.map(p => `${p.name} (eff: ${p.efficiency})`));

        for (const helmet of optimalPieces) {
            for (const arms of optimalPieces) {
                for (const chest of optimalPieces) {
                    for (const legs of optimalPieces) {
                        for (const classItem of optimalPieces) {
                            const baseStats = {
                                h: helmet.stats.h + arms.stats.h + chest.stats.h + legs.stats.h + classItem.stats.h,
                                m: helmet.stats.m + arms.stats.m + chest.stats.m + legs.stats.m + classItem.stats.m,
                                g: helmet.stats.g + arms.stats.g + chest.stats.g + legs.stats.g + classItem.stats.g,
                                s: helmet.stats.s + arms.stats.s + chest.stats.s + legs.stats.s + classItem.stats.s,
                                c: helmet.stats.c + arms.stats.c + chest.stats.c + legs.stats.c + classItem.stats.c,
                                w: helmet.stats.w + arms.stats.w + chest.stats.w + legs.stats.w + classItem.stats.w
                            };

                            const deficits = {
                                h: Math.max(0, targets.h - baseStats.h),
                                m: Math.max(0, targets.m - baseStats.m),
                                g: Math.max(0, targets.g - baseStats.g),
                                s: Math.max(0, targets.s - baseStats.s),
                                c: Math.max(0, targets.c - baseStats.c),
                                w: Math.max(0, targets.w - baseStats.w)
                            };

                            if (canCoverDeficit(deficits, availableMods, useTuningMods, priorities, maxStats, baseStats)) {
                                const modResult = calculateModsNeeded(deficits, availableMods, useTuningMods, priorities, maxStats, baseStats, targets);

                                // Check max stat constraints
                                if (!checkMaxStatConstraints(modResult.finalStats, maxStats)) {
                                    continue;
                                }

                                const priorityScore = calculatePriorityScore(modResult.finalStats, targets, priorities);

                                solutions.push({
                                    helmet: helmet.name,
                                    helmetStats: helmet.stats,
                                    arms: arms.name,
                                    armsStats: arms.stats,
                                    chest: chest.name,
                                    chestStats: chest.stats,
                                    legs: legs.name,
                                    legsStats: legs.stats,
                                    classItem: classItem.name,
                                    classItemStats: classItem.stats,
                                    base: baseStats,
                                    mods: modResult.modsUsed,
                                    final: modResult.finalStats,
                                    priorityScore: priorityScore,
                                    efficiency: helmet.efficiency + arms.efficiency + chest.efficiency + legs.efficiency + classItem.efficiency
                                });
                            }
                        }
                    }
                }
            }
        }

        // Sort by priority score first, then by efficiency
        solutions.sort((a, b) => {
            if (Math.abs(a.priorityScore - b.priorityScore) < 10) {
                return b.efficiency - a.efficiency;
            }
            return b.priorityScore - a.priorityScore;
        });

        return solutions.slice(0, 100);
    }

    function formatStats(stats) {
        return `H:${stats.h} M:${stats.m} G:${stats.g} S:${stats.s} C:${stats.c} W:${stats.w}`;
    }

    function displaySolutions(solutions, targets, priorities, useTuningMods) {
        if (solutions.length === 0) {
            resultsContainer.innerHTML = '<h2>No solutions found for the specified stats and constraints.</h2>';
            return;
        }

        let html = `<h2>Found ${solutions.length}${solutions.length >= 100 ? '+' : ''} Valid Builds</h2>`;

        solutions.forEach((solution, index) => {
            html += `
                <div class="solution">
                    <h3>Build #${index + 1} (Priority Score: ${solution.priorityScore})</h3>
                    <div class="solution-grid">
                        <div class="solution-column">
                            <h4>Armor Pieces</h4>
                            <ul>
                                <li><b>Helmet:</b> ${solution.helmet}
                                    <div class="piece-stats">${formatStats(solution.helmetStats)}</div>
                                </li>
                                <li><b>Arms:</b> ${solution.arms}
                                    <div class="piece-stats">${formatStats(solution.armsStats)}</div>
                                </li>
                                <li><b>Chest:</b> ${solution.chest}
                                    <div class="piece-stats">${formatStats(solution.chestStats)}</div>
                                </li>
                                <li><b>Legs:</b> ${solution.legs}
                                    <div class="piece-stats">${formatStats(solution.legsStats)}</div>
                                </li>
                                <li><b>Class Item:</b> ${solution.classItem}
                                    <div class="piece-stats">${formatStats(solution.classItemStats)}</div>
                                </li>
                            </ul>
                        </div>
                        <div class="solution-column">
                            <div class="mods-breakdown">
                                <h4>Mods Required</h4>
                                ${solution.mods.length > 0 ?
                    solution.mods.map(mod => {
                        const isTuning = mod.includes('Tuning:');
                        return `<div class="mod-item ${isTuning ? 'tuning-mod' : ''}"><span>${mod}</span></div>`;
                    }).join('') :
                    '<div class="mod-item"><span>No additional mods needed!</span></div>'
                }
                            </div>
                        </div>
                    </div>
                    <div class="stats-breakdown">
                        <p><b>Base Stats (Masterworked Armor):</b><br>
                           ${formatStats(solution.base)}
                        </p>
                        <div class="final-stats">
                            <h4>Final Stats (After Mods)</h4>
                            <p><strong>${formatStats(solution.final)}</strong></p>
                        </div>
                    </div>
                </div>
            `;
        });

        resultsContainer.innerHTML = html;
    }
});