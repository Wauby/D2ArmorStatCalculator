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

    // T2 Exotic Armor Stats: Primary = 30, Secondary = 20, Tertiary = 13
    // Masterworked adds +2 to the 3 stats that don't have primary/secondary/tertiary
    const exoticArmorData = [
        // Bulwark: Health-Class
        { name: "Exotic Bulwark (Tertiary: Melee)", stats: { h: 30, m: 13, g: 2, s: 2, c: 20, w: 2 }, isExotic: true },
        { name: "Exotic Bulwark (Tertiary: Grenade)", stats: { h: 30, m: 2, g: 13, s: 2, c: 20, w: 2 }, isExotic: true },
        { name: "Exotic Bulwark (Tertiary: Super)", stats: { h: 30, m: 2, g: 2, s: 13, c: 20, w: 2 }, isExotic: true },
        { name: "Exotic Bulwark (Tertiary: Weapons)", stats: { h: 30, m: 2, g: 2, s: 2, c: 20, w: 13 }, isExotic: true },
        // Specialist: Class-Weapons
        { name: "Exotic Specialist (Tertiary: Health)", stats: { h: 13, m: 2, g: 2, s: 2, c: 30, w: 20 }, isExotic: true },
        { name: "Exotic Specialist (Tertiary: Melee)", stats: { h: 2, m: 13, g: 2, s: 2, c: 30, w: 20 }, isExotic: true },
        { name: "Exotic Specialist (Tertiary: Grenade)", stats: { h: 2, m: 2, g: 13, s: 2, c: 30, w: 20 }, isExotic: true },
        { name: "Exotic Specialist (Tertiary: Super)", stats: { h: 2, m: 2, g: 2, s: 13, c: 30, w: 20 }, isExotic: true },
        // Gunner: Weapons-Grenade
        { name: "Exotic Gunner (Tertiary: Health)", stats: { h: 13, m: 2, g: 20, s: 2, c: 2, w: 30 }, isExotic: true },
        { name: "Exotic Gunner (Tertiary: Melee)", stats: { h: 2, m: 13, g: 20, s: 2, c: 2, w: 30 }, isExotic: true },
        { name: "Exotic Gunner (Tertiary: Super)", stats: { h: 2, m: 2, g: 20, s: 13, c: 2, w: 30 }, isExotic: true },
        { name: "Exotic Gunner (Tertiary: Class)", stats: { h: 2, m: 2, g: 20, s: 2, c: 13, w: 30 }, isExotic: true },
        // Grenadier: Grenade-Super
        { name: "Exotic Grenadier (Tertiary: Health)", stats: { h: 13, m: 2, g: 30, s: 20, c: 2, w: 2 }, isExotic: true },
        { name: "Exotic Grenadier (Tertiary: Melee)", stats: { h: 2, m: 13, g: 30, s: 20, c: 2, w: 2 }, isExotic: true },
        { name: "Exotic Grenadier (Tertiary: Weapons)", stats: { h: 2, m: 2, g: 30, s: 20, c: 2, w: 13 }, isExotic: true },
        { name: "Exotic Grenadier (Tertiary: Class)", stats: { h: 2, m: 2, g: 30, s: 20, c: 13, w: 2 }, isExotic: true },
        // Paragon: Super-Melee
        { name: "Exotic Paragon (Tertiary: Health)", stats: { h: 13, m: 20, g: 2, s: 30, c: 2, w: 2 }, isExotic: true },
        { name: "Exotic Paragon (Tertiary: Grenade)", stats: { h: 2, m: 20, g: 13, s: 30, c: 2, w: 2 }, isExotic: true },
        { name: "Exotic Paragon (Tertiary: Weapons)", stats: { h: 2, m: 20, g: 2, s: 30, c: 2, w: 13 }, isExotic: true },
        { name: "Exotic Paragon (Tertiary: Class)", stats: { h: 2, m: 20, g: 2, s: 30, c: 13, w: 2 }, isExotic: true },
        // Brawler: Melee-Health
        { name: "Exotic Brawler (Tertiary: Grenade)", stats: { h: 20, m: 30, g: 13, s: 2, c: 2, w: 2 }, isExotic: true },
        { name: "Exotic Brawler (Tertiary: Super)", stats: { h: 20, m: 30, g: 2, s: 13, c: 2, w: 2 }, isExotic: true },
        { name: "Exotic Brawler (Tertiary: Weapons)", stats: { h: 20, m: 30, g: 2, s: 2, c: 2, w: 13 }, isExotic: true },
        { name: "Exotic Brawler (Tertiary: Class)", stats: { h: 20, m: 30, g: 2, s: 2, c: 13, w: 2 }, isExotic: true }
    ];

    const calculateBtn = document.getElementById('calculateBtn');
    const resultsContainer = document.getElementById('results-container');
    const majorModsInput = document.getElementById('majorMods');
    const minorModsInput = document.getElementById('minorMods');
    const customArmorToggle = document.getElementById('customArmorToggle');
    const customArmorSection = document.getElementById('customArmorSection');
    const exoticArmorToggle = document.getElementById('exoticArmorToggle');
    const customFragmentToggle = document.getElementById('customFragmentToggle');
    const customFragmentSection = document.getElementById('customFragmentSection');
    const MAX_STAT_VALUE = 200;

    let allSolutions = [];
    let solutionsPageIndex = 0;
    const solutionsPerPage = 5;

    // Toggle custom armor section visibility
    customArmorToggle.addEventListener('change', () => {
        customArmorSection.style.display = customArmorToggle.checked ? 'block' : 'none';
    });

    // Toggle custom fragment section visibility
    customFragmentToggle.addEventListener('change', () => {
        customFragmentSection.style.display = customFragmentToggle.checked ? 'block' : 'none';
    });

    // Create warning element for mod limits
    function createModWarning() {
        let warningElement = document.getElementById('mod-warning');
        if (!warningElement) {
            warningElement = document.createElement('div');
            warningElement.id = 'mod-warning';
            warningElement.style.cssText = `
                color: #ff6b6b;
                background-color: #ffe0e0;
                border: 1px solid #ff6b6b;
                border-radius: 4px;
                padding: 8px 12px;
                margin: 8px 0;
                font-weight: bold;
                display: none;
            `;
            // Insert after the minor mods input
            minorModsInput.parentNode.insertBefore(warningElement, minorModsInput.nextSibling);
        }
        return warningElement;
    }

    const modWarning = createModWarning();

    function checkModLimits() {
        const majorValue = parseInt(majorModsInput.value) || 0;
        const minorValue = parseInt(minorModsInput.value) || 0;
        const totalMods = majorValue + minorValue;

        if (totalMods > 5) {
            modWarning.textContent = '⚠️ Warning: You can only equip a maximum of 5 normal mods total (Major + Minor combined)!';
            modWarning.style.display = 'block';
            calculateBtn.disabled = true;
            calculateBtn.style.opacity = '0.5';
            calculateBtn.style.cursor = 'not-allowed';
        } else {
            modWarning.style.display = 'none';
            calculateBtn.disabled = false;
            calculateBtn.style.opacity = '1';
            calculateBtn.style.cursor = 'pointer';
        }
    }

    majorModsInput.addEventListener('input', () => {
        const majorValue = parseInt(majorModsInput.value) || 0;
        const minorValue = parseInt(minorModsInput.value) || 0;

        // Prevent entering values that would exceed 5 total
        if (majorValue > 5) {
            majorModsInput.value = 5;
        }
        if (majorValue + minorValue > 5) {
            minorModsInput.value = Math.max(0, 5 - majorValue);
        }

        minorModsInput.max = Math.max(0, 5 - (parseInt(majorModsInput.value) || 0));
        checkModLimits();
    });

    minorModsInput.addEventListener('input', () => {
        const majorValue = parseInt(majorModsInput.value) || 0;
        const minorValue = parseInt(minorModsInput.value) || 0;

        // Prevent entering values that would exceed 5 total
        if (minorValue > 5) {
            minorModsInput.value = 5;
        }
        if (majorValue + minorValue > 5) {
            majorModsInput.value = Math.max(0, 5 - minorValue);
        }

        majorModsInput.max = Math.max(0, 5 - (parseInt(minorModsInput.value) || 0));
        checkModLimits();
    });

    // Get custom armor piece if enabled
    function getCustomArmorPiece() {
        if (!customArmorToggle.checked) return null;

        const name = document.getElementById('customArmorName').value || 'Custom Armor Piece';
        const stats = {
            h: parseInt(document.getElementById('customHealth').value) || 0,
            m: parseInt(document.getElementById('customMelee').value) || 0,
            g: parseInt(document.getElementById('customGrenade').value) || 0,
            s: parseInt(document.getElementById('customSuper').value) || 0,
            c: parseInt(document.getElementById('customClass').value) || 0,
            w: parseInt(document.getElementById('customWeapons').value) || 0
        };

        return { name, stats, isCustom: true };
    }

    // Get custom fragment bonuses if enabled
    function getCustomFragmentBonuses() {
        if (!customFragmentToggle.checked) {
            return { h: 0, m: 0, g: 0, s: 0, c: 0, w: 0 };
        }

        return {
            h: parseInt(document.getElementById('fragmentHealth').value) || 0,
            m: parseInt(document.getElementById('fragmentMelee').value) || 0,
            g: parseInt(document.getElementById('fragmentGrenade').value) || 0,
            s: parseInt(document.getElementById('fragmentSuper').value) || 0,
            c: parseInt(document.getElementById('fragmentClass').value) || 0,
            w: parseInt(document.getElementById('fragmentWeapons').value) || 0
        };
    }

    // Get available armor pieces based on settings
    function getAvailableArmorPieces() {
        let availablePieces = [...armorData];

        // Add exotic pieces if enabled
        if (exoticArmorToggle.checked) {
            availablePieces = availablePieces.concat(exoticArmorData);
        }

        return availablePieces;
    }

    calculateBtn.addEventListener('click', () => {
        // Double-check mod limits before calculating
        const majorValue = parseInt(majorModsInput.value) || 0;
        const minorValue = parseInt(minorModsInput.value) || 0;
        if (majorValue + minorValue > 5) {
            alert('Cannot calculate: You have entered more than 5 normal mods total. Please adjust your mod counts.');
            return;
        }

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
        const maxStats = {
            h: getMaxStatValue('health-max'),
            m: getMaxStatValue('melee-max'),
            g: getMaxStatValue('grenade-max'),
            s: getMaxStatValue('super-max'),
            c: getMaxStatValue('class-max'),
            w: getMaxStatValue('weapons-max'),
        };
        const availableMods = {
            major: parseInt(majorModsInput.value) || 0,
            minor: parseInt(minorModsInput.value) || 0,
            tuning: 5
        };
        const useTuningMods = document.getElementById('tuningModsToggle').checked;
        const customArmorPiece = getCustomArmorPiece();
        const useExoticArmor = exoticArmorToggle.checked;
        const customFragmentBonuses = getCustomFragmentBonuses();

        resultsContainer.innerHTML = '<h2><span class="loader"></span>Calculating... This may take a moment.</h2>';

        setTimeout(() => {
            allSolutions = findSolutions(targets, priorities, maxStats, availableMods, useTuningMods, customArmorPiece, useExoticArmor, customFragmentBonuses);
            solutionsPageIndex = 0;
            displaySolutions();
        }, 50);
    });

    function getMaxStatValue(inputId) {
        const input = document.getElementById(inputId);
        if (input && input.value !== '') {
            return parseInt(input.value);
        }
        return MAX_STAT_VALUE; // Only use default if input is empty/doesn't exist
    }

    function getStatName(key) {
        const statNames = { h: 'Health', m: 'Melee', g: 'Grenade', s: 'Super', c: 'Class', w: 'Weapons' };
        return statNames[key] || key;
    }

    // Calculates a score for a build based on priorities, targets, and max stat preferences.
    function calculatePriorityScore(finalStats, targets, priorities, maxStats, meetsAllTargets) {
        let score = meetsAllTargets ? 1000 : 0; // Huge bonus for meeting all targets.

        for (const stat of Object.keys(finalStats)) {
            const value = finalStats[stat];
            const target = targets[stat];
            const maxStat = maxStats[stat];
            const deficit = Math.max(0, target - value);
            const excess = Math.max(0, value - target);
            const overMax = Math.max(0, value - maxStat);

            const priorityMultiplier = { high: 10, normal: 5, low: 2 };

            // Penalty for not meeting target
            score -= deficit * priorityMultiplier[priorities[stat]];

            // Reward/penalty for excess based on priority
            if (priorities[stat] === 'high') score += excess * 1.5;
            else if (priorities[stat] === 'normal') score += excess * 0.5;
            else score -= excess * 2; // Penalize wasted stats on low-priority.

            // Additional penalty for exceeding max stat preferences (but don't make it impossible)
            if (overMax > 0) {
                score -= overMax * 3; // Moderate penalty for exceeding max preferences
            }
        }
        return Math.round(score);
    }

    // Applies tuning, major, and minor mods to a base stat profile to reach targets.
    function applyMods(baseStats, targets, priorities, maxStats, availableMods, useTuningMods, customFragmentBonuses) {
        let workingStats = { ...baseStats };
        const modsUsed = [];
        let remainingMajor = availableMods.major;
        let remainingMinor = availableMods.minor;
        let remainingTuning = availableMods.tuning;
        const statKeys = Object.keys(targets);

        // --- Phase 0: Apply Custom Fragment Bonuses ---
        let hasFragmentBonuses = false;
        for (const stat in customFragmentBonuses) {
            if (customFragmentBonuses[stat] > 0) {
                workingStats[stat] += customFragmentBonuses[stat];
                hasFragmentBonuses = true;
            }
        }
        if (hasFragmentBonuses) {
            const fragmentDescription = Object.keys(customFragmentBonuses)
                .filter(stat => customFragmentBonuses[stat] > 0)
                .map(stat => `+${customFragmentBonuses[stat]} ${getStatName(stat)}`)
                .join(', ');
            modsUsed.push(`Fragment/Font Mods: ${fragmentDescription}`);
        }

        // --- Phase 1: Strategic Tuning Mod Application (if enabled) ---
        if (useTuningMods) {
            for (let i = 0; i < 5; i++) { // Max 5 tuning mods
                if (remainingTuning <= 0) break;

                // Find the best stat to increase (highest priority deficit)
                const deficits = statKeys
                    .map(stat => ({ stat, deficit: Math.max(0, targets[stat] - workingStats[stat]) }))
                    .filter(d => d.deficit > 0) // Only consider stats that need improvement
                    .sort((a, b) => {
                        const priorityWeight = { high: 3, normal: 2, low: 1 };
                        return priorityWeight[priorities[b.stat]] - priorityWeight[priorities[a.stat]];
                    });

                if (deficits.length === 0) break; // No more deficits to fill
                const statToIncrease = deficits[0].stat;

                // Find the best stat to decrease (prefer stats over max, then low priority, then most excess)
                const sources = statKeys
                    .filter(stat => stat !== statToIncrease && workingStats[stat] >= 5) // Can't take from target stat, need at least 5 points
                    .map(stat => {
                        let score = 0;
                        // Strongly prefer taking from stats that are over their max preference
                        if (workingStats[stat] > maxStats[stat]) score += 1000;
                        // Then prefer low priority stats
                        if (priorities[stat] === 'low') score += 100;
                        else if (priorities[stat] === 'normal') score += 50;
                        // Then prefer stats with excess over target
                        score += Math.max(0, workingStats[stat] - targets[stat]);
                        return { stat, score };
                    })
                    .sort((a, b) => b.score - a.score);

                if (sources.length === 0) break; // No stat to safely take points from
                const statToDecrease = sources[0].stat;

                // Apply the tuning mod
                workingStats[statToIncrease] += 5;
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
            // Apply major mods - prefer staying under max but don't prevent if needed for target
            while (remainingMajor > 0 && workingStats[stat] < targets[stat]) {
                // Prefer not to exceed max, but allow if necessary to meet target
                if (workingStats[stat] + 10 <= maxStats[stat] || workingStats[stat] < targets[stat]) {
                    workingStats[stat] += 10;
                    remainingMajor--;
                    modsUsed.push(`Major ${getStatName(stat)} Mod (+10)`);
                } else {
                    break; // Don't add if it would exceed max and we've already met target
                }
            }

            // Apply minor mods - same logic as major
            while (remainingMinor > 0 && workingStats[stat] < targets[stat]) {
                if (workingStats[stat] + 5 <= maxStats[stat] || workingStats[stat] < targets[stat]) {
                    workingStats[stat] += 5;
                    remainingMinor--;
                    modsUsed.push(`Minor ${getStatName(stat)} Mod (+5)`);
                } else {
                    break;
                }
            }
        }

        return { finalStats: workingStats, modsUsed };
    }

    // Pre-filters armor pieces to find the most efficient ones for the given targets.
    function getOptimalArmorPieces(targets, priorities, availablePieces) {
        const priorityWeight = { high: 3, normal: 2, low: 1 };
        return availablePieces.map(piece => {
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

    function findSolutions(targets, priorities, maxStats, availableMods, useTuningMods, customArmorPiece, useExoticArmor, customFragmentBonuses) {
        const solutions = [];
        const processedCombinations = new Set();
        const maxSolutions = 500;

        // Get available armor pieces
        const availablePieces = getAvailableArmorPieces();

        // Pre-filter to get the most efficient pieces, drastically improving performance.
        let optimalPieces = getOptimalArmorPieces(targets, priorities, availablePieces).slice(0, 10);

        // If we have a custom armor piece, always include it
        if (customArmorPiece) {
            // Remove any duplicates and add the custom piece
            optimalPieces = [customArmorPiece, ...optimalPieces.filter(p => p.name !== customArmorPiece.name)];
        }

        // Generate combinations based on whether we have exotic armor constraint
        const generateCombinations = () => {
            const combinations = [];

            if (useExoticArmor) {
                // When exotic armor is enabled, ensure at most one exotic piece per combination
                for (const helmet of optimalPieces) {
                    for (const arms of optimalPieces) {
                        for (const chest of optimalPieces) {
                            for (const legs of optimalPieces) {
                                for (const classItem of optimalPieces) {
                                    if (solutions.length >= maxSolutions) return combinations;

                                    const armorCombination = [helmet, arms, chest, legs, classItem];
                                    const exoticCount = armorCombination.filter(p => p.isExotic).length;

                                    // Skip if more than one exotic piece
                                    if (exoticCount > 1) continue;

                                    // If custom armor is required, ensure it's included
                                    if (customArmorPiece && !armorCombination.some(p => p.isCustom)) continue;

                                    combinations.push(armorCombination);
                                }
                            }
                        }
                    }
                }
            } else {
                // Normal combination generation
                for (const helmet of optimalPieces) {
                    for (const arms of optimalPieces) {
                        for (const chest of optimalPieces) {
                            for (const legs of optimalPieces) {
                                for (const classItem of optimalPieces) {
                                    if (solutions.length >= maxSolutions) return combinations;

                                    const armorCombination = [helmet, arms, chest, legs, classItem];

                                    // If custom armor is required, ensure it's included
                                    if (customArmorPiece && !armorCombination.some(p => p.isCustom)) continue;

                                    combinations.push(armorCombination);
                                }
                            }
                        }
                    }
                }
            }

            return combinations;
        };

        const combinations = generateCombinations();

        for (const armorCombination of combinations) {
            if (solutions.length >= maxSolutions) break;

            const combinationKey = armorCombination.map(p => p.name).sort().join(',');

            if (processedCombinations.has(combinationKey)) continue;
            processedCombinations.add(combinationKey);

            const baseStats = { h: 0, m: 0, g: 0, s: 0, c: 0, w: 0 };
            for (const piece of armorCombination) {
                for (const stat in baseStats) {
                    baseStats[stat] += piece.stats[stat];
                }
            }

            const result = applyMods(baseStats, targets, priorities, maxStats, availableMods, useTuningMods, customFragmentBonuses);

            const meetsAllTargets = Object.keys(targets).every(stat => result.finalStats[stat] >= targets[stat]);
            const priorityScore = calculatePriorityScore(result.finalStats, targets, priorities, maxStats, meetsAllTargets);

            solutions.push({
                armor: armorCombination.map(p => ({ name: p.name, isExotic: p.isExotic, isCustom: p.isCustom })).sort((a, b) => a.name.localeCompare(b.name)),
                mods: result.modsUsed,
                final: result.finalStats,
                meetsAllTargets,
                priorityScore,
            });
        }

        return solutions;
    }

    function formatStats(stats, maxStats) {
        // Sort stats to always display in the same order
        const orderedStats = ['h', 'm', 'g', 's', 'c', 'w'];
        return orderedStats.map(stat => {
            const value = stats[stat];
            const maxStat = maxStats[stat];
            const isOverMax = value > maxStat && maxStat < MAX_STAT_VALUE; // Only show as over-max if user set a specific limit
            const displayValue = isOverMax ? `${value}⚠️` : value;
            return `${getStatName(stat).substring(0, 1)}:${displayValue}`;
        }).join(' ');
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

        const maxStats = {
            h: getMaxStatValue('health-max'),
            m: getMaxStatValue('melee-max'),
            g: getMaxStatValue('grenade-max'),
            s: getMaxStatValue('super-max'),
            c: getMaxStatValue('class-max'),
            w: getMaxStatValue('weapons-max'),
        };

        // Remove duplicate solutions.
        const uniqueSolutions = [];
        const seenCombinations = new Set();
        for (const solution of allSolutions) {
            const combinationKey = solution.armor.map(p => p.name).join(',');
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
                const key = `${piece.name}|${piece.isExotic || false}|${piece.isCustom || false}`;
                if (!armorCounts[key]) {
                    armorCounts[key] = { count: 0, piece };
                }
                armorCounts[key].count++;
            });

            const armorListHtml = Object.values(armorCounts).map(({ count, piece }) => {
                const countString = count > 1 ? ` x${count}` : '';
                let cssClass = '';
                if (piece.isExotic) cssClass = 'exotic-piece';
                else if (piece.isCustom) cssClass = 'custom-piece';

                return `<li class="${cssClass}"><b>${piece.name}</b>${countString}</li>`;
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
                const isFragment = modName.startsWith('Fragment/Font');
                let cssClass = '';
                if (isTuning) cssClass = 'tuning-mod';
                else if (isFragment) cssClass = 'fragment-bonus';

                return `<div class="mod-item ${cssClass}"><span>${modName}${countString}</span></div>`;
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
                            ${formatStats(solution.final, maxStats)}
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

    // Initialize mod limit checking on page load
    checkModLimits();
});