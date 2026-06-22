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
        { name: "Brawler (Tertiary: Class)", stats: { h: 25, m: 30, g: 5, s: 5, c: 20, w: 5 } },
        // Siegebreaker: Health-Grenade
        { name: "Siegebreaker (Tertiary: Melee)", stats: { h: 30, m: 20, g: 25, s: 5, c: 5, w: 5 } },
        { name: "Siegebreaker (Tertiary: Super)", stats: { h: 30, m: 5, g: 25, s: 20, c: 5, w: 5 } },
        { name: "Siegebreaker (Tertiary: Class)", stats: { h: 30, m: 5, g: 25, s: 5, c: 20, w: 5 } },
        { name: "Siegebreaker (Tertiary: Weapons)", stats: { h: 30, m: 5, g: 25, s: 5, c: 5, w: 20 } },
        // Skirmisher: Melee-Weapons
        { name: "Skirmisher (Tertiary: Health)", stats: { h: 20, m: 30, g: 5, s: 5, c: 5, w: 25 } },
        { name: "Skirmisher (Tertiary: Grenade)", stats: { h: 5, m: 30, g: 20, s: 5, c: 5, w: 25 } },
        { name: "Skirmisher (Tertiary: Super)", stats: { h: 5, m: 30, g: 5, s: 20, c: 5, w: 25 } },
        { name: "Skirmisher (Tertiary: Class)", stats: { h: 5, m: 30, g: 5, s: 5, c: 20, w: 25 } },
        // Demolitionist: Grenade-Class
        { name: "Demolitionist (Tertiary: Health)", stats: { h: 20, m: 5, g: 30, s: 5, c: 25, w: 5 } },
        { name: "Demolitionist (Tertiary: Melee)", stats: { h: 5, m: 20, g: 30, s: 5, c: 25, w: 5 } },
        { name: "Demolitionist (Tertiary: Super)", stats: { h: 5, m: 5, g: 30, s: 20, c: 25, w: 5 } },
        { name: "Demolitionist (Tertiary: Weapons)", stats: { h: 5, m: 5, g: 30, s: 5, c: 25, w: 20 } },
        // Colossus: Super-Health
        { name: "Colossus (Tertiary: Melee)", stats: { h: 25, m: 20, g: 5, s: 30, c: 5, w: 5 } },
        { name: "Colossus (Tertiary: Grenade)", stats: { h: 25, m: 5, g: 20, s: 30, c: 5, w: 5 } },
        { name: "Colossus (Tertiary: Class)", stats: { h: 25, m: 5, g: 5, s: 30, c: 20, w: 5 } },
        { name: "Colossus (Tertiary: Weapons)", stats: { h: 25, m: 5, g: 5, s: 30, c: 5, w: 20 } },
        // Reaver: Class-Melee
        { name: "Reaver (Tertiary: Health)", stats: { h: 20, m: 25, g: 5, s: 5, c: 30, w: 5 } },
        { name: "Reaver (Tertiary: Grenade)", stats: { h: 5, m: 25, g: 20, s: 5, c: 30, w: 5 } },
        { name: "Reaver (Tertiary: Super)", stats: { h: 5, m: 25, g: 5, s: 20, c: 30, w: 5 } },
        { name: "Reaver (Tertiary: Weapons)", stats: { h: 5, m: 25, g: 5, s: 5, c: 30, w: 20 } },
        // Powerhouse: Weapons-Super
        { name: "Powerhouse (Tertiary: Health)", stats: { h: 20, m: 5, g: 5, s: 25, c: 5, w: 30 } },
        { name: "Powerhouse (Tertiary: Melee)", stats: { h: 5, m: 20, g: 5, s: 25, c: 5, w: 30 } },
        { name: "Powerhouse (Tertiary: Grenade)", stats: { h: 5, m: 5, g: 20, s: 25, c: 5, w: 30 } },
        { name: "Powerhouse (Tertiary: Class)", stats: { h: 5, m: 5, g: 5, s: 25, c: 20, w: 30 } }
    ];

    const calculateBtn = document.getElementById('calculateBtn');
    const resultsContainer = document.getElementById('results-container');
    const majorModsInput = document.getElementById('majorMods');
    const minorModsInput = document.getElementById('minorMods');
    const customArmorToggle = document.getElementById('customArmorToggle');
    const customArmorSection = document.getElementById('customArmorSection');
    const customFragmentToggle = document.getElementById('customFragmentToggle');
    const customFragmentSection = document.getElementById('customFragmentSection');
    const tuningModsToggle = document.getElementById('tuningModsToggle');
    const MAX_STAT_VALUE = 200;

    let allSolutions = [];
    let solutionsPageIndex = 0;
    const solutionsPerPage = 5;

    // Toggle custom armor section visibility
    customArmorToggle.addEventListener('change', () => {
        customArmorSection.style.display = customArmorToggle.checked ? 'block' : 'none';
        updateTuningModDescription();
    });

    // Toggle custom fragment section visibility
    customFragmentToggle.addEventListener('change', () => {
        customFragmentSection.style.display = customFragmentToggle.checked ? 'block' : 'none';
    });

    // Update tuning mod description
    function updateTuningModDescription() {
        const description = document.getElementById('tuningModDescription');
        description.textContent = `Allows using up to 5 mods that shift stats (+5 to one, -5 to another) or add minor boosts (+1 to three non-primary stats).`;
    }

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

    // Get available armor pieces (regular only)
    function getAvailableArmorPieces() {
        return [...armorData];
    }

    calculateBtn.addEventListener('click', () => {
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
            tuning: 5  // Always 5 tuning slots regardless of armor type
        };
        const useTuningMods = document.getElementById('tuningModsToggle').checked;
        const customArmorPiece = getCustomArmorPiece();
        const customFragmentBonuses = getCustomFragmentBonuses();

        resultsContainer.innerHTML = '<h2><span class="loader"></span>Calculating... This may take a moment.</h2>';

        setTimeout(() => {
            allSolutions = findSolutions(targets, priorities, maxStats, availableMods, useTuningMods, customArmorPiece, customFragmentBonuses);
            solutionsPageIndex = 0;
            displaySolutions();
        }, 50);
    });

    function getMaxStatValue(inputId) {
        const input = document.getElementById(inputId);
        if (input && input.value !== '') {
            return parseInt(input.value);
        }
        return MAX_STAT_VALUE;
    }

    function getStatName(key) {
        const statNames = { h: 'Health', m: 'Melee', g: 'Grenade', s: 'Super', c: 'Class', w: 'Weapons' };
        return statNames[key] || key;
    }

    function calculatePriorityScore(finalStats, targets, priorities, maxStats, meetsAllTargets) {
        let score = 0;

        if (meetsAllTargets) {
            score += 100000;
        }

        let totalDistance = 0;
        let weightedDistance = 0;

        for (const stat of Object.keys(finalStats)) {
            const value = finalStats[stat];
            const target = targets[stat];
            const maxStat = maxStats[stat];
            const deficit = Math.max(0, target - value);
            const excess = Math.max(0, value - target);
            const overMax = Math.max(0, value - maxStat);

            const priorityMultiplier = { high: 1000, normal: 500, low: 100 };

            if (deficit > 0) {
                const deficitPenalty = deficit * deficit * priorityMultiplier[priorities[stat]] * 3;
                score -= deficitPenalty;
                weightedDistance += deficit * priorityMultiplier[priorities[stat]];
            }

            if (excess > 0) {
                let excessPenalty;
                if (priorities[stat] === 'high') {
                    excessPenalty = Math.pow(excess * 0.3, 1.5) * 20;
                } else if (priorities[stat] === 'normal') {
                    excessPenalty = Math.pow(excess * 0.5, 1.5) * 30;
                } else {
                    excessPenalty = excess * excess * 50;
                }
                score -= excessPenalty;
                weightedDistance += excess * priorityMultiplier[priorities[stat]] * 0.2;
            }

            if (overMax > 0 && maxStat < MAX_STAT_VALUE) {
                score -= overMax * overMax * 100;
            }

            totalDistance += Math.abs(value - target);
        }

        const closenessBonus = Math.max(0, 1000 - totalDistance * 10);
        score += closenessBonus;

        const targetsHit = Object.keys(targets).filter(stat =>
            targets[stat] > 0 && finalStats[stat] >= targets[stat]
        ).length;
        score += targetsHit * 5000;

        return Math.round(score);
    }

    function generateBestTuningMods(baseStats, targets, maxTuningMods, armorPiece) {
        const statKeys = ['h', 'm', 'g', 's', 'c', 'w'];
        const tuningModOptions = [];

        tuningModOptions.push([]);

        const deficits = {};
        const excesses = {};
        for (const stat of statKeys) {
            deficits[stat] = Math.max(0, targets[stat] - baseStats[stat]);
            excesses[stat] = Math.max(0, baseStats[stat] - targets[stat]);
        }

        function getArmorType(stats) {
            const sortedStats = Object.entries(stats).sort((a, b) => b[1] - a[1]);
            return {
                primary: sortedStats[0][0],
                secondary: sortedStats[1][0]
            };
        }

        if (armorPiece && armorPiece.stats) {
            const { primary, secondary } = getArmorType(armorPiece.stats);
            const nonPrimaryStats = statKeys.filter(stat => stat !== primary && stat !== secondary);
            const neededNonPrimaryStats = nonPrimaryStats.filter(stat => deficits[stat] > 0);

            if (neededNonPrimaryStats.length >= 3) {
                for (let i = 0; i < neededNonPrimaryStats.length - 2; i++) {
                    for (let j = i + 1; j < neededNonPrimaryStats.length - 1; j++) {
                        for (let k = j + 1; k < neededNonPrimaryStats.length; k++) {
                            const boostStats = [neededNonPrimaryStats[i], neededNonPrimaryStats[j], neededNonPrimaryStats[k]];

                            tuningModOptions.push([{ type: 'boost', stats: boostStats }]);

                            const totalNeeded = boostStats.reduce((sum, stat) => sum + deficits[stat], 0);
                            if (totalNeeded > 3) {
                                for (let numMods = 2; numMods <= Math.min(maxTuningMods, Math.ceil(totalNeeded / 3)); numMods++) {
                                    const multiBoostMods = [];
                                    for (let m = 0; m < numMods; m++) {
                                        multiBoostMods.push({ type: 'boost', stats: boostStats });
                                    }
                                    tuningModOptions.push(multiBoostMods);
                                }
                            }
                        }
                    }
                }
            }
        }

        const productiveShifts = [];

        for (const statFrom of statKeys) {
            for (const statTo of statKeys) {
                if (statFrom !== statTo) {
                    const hasExcess = excesses[statFrom] > 0;
                    const needsMore = deficits[statTo] > 0;
                    const canAfford = baseStats[statFrom] >= 5;

                    let shiftValue = 0;
                    if (hasExcess && needsMore && canAfford) {
                        shiftValue = 100;
                        shiftValue += Math.min(excesses[statFrom], deficits[statTo]) * 10;
                    } else if (needsMore && canAfford && excesses[statFrom] >= 2) {
                        shiftValue = 50;
                        shiftValue += deficits[statTo] * 5;
                    } else if (needsMore && canAfford) {
                        shiftValue = 25;
                        shiftValue += deficits[statTo] * 2;
                    }

                    if (shiftValue > 0) {
                        productiveShifts.push({ from: statFrom, to: statTo, value: shiftValue });
                    }
                }
            }
        }

        productiveShifts.sort((a, b) => b.value - a.value);

        for (let i = 0; i < Math.min(productiveShifts.length, 10); i++) {
            const shift = productiveShifts[i];

            tuningModOptions.push([{ type: 'shift', from: shift.from, to: shift.to }]);

            const maxShifts = Math.min(
                Math.floor(baseStats[shift.from] / 5),
                Math.ceil(deficits[shift.to] / 5),
                maxTuningMods
            );

            for (let numShifts = 2; numShifts <= maxShifts; numShifts++) {
                const shiftMods = [];
                for (let s = 0; s < numShifts; s++) {
                    shiftMods.push({ type: 'shift', from: shift.from, to: shift.to });
                }
                tuningModOptions.push(shiftMods);
            }
        }

        if (armorPiece && armorPiece.stats && maxTuningMods >= 2 && productiveShifts.length > 0) {
            const { primary, secondary } = (() => {
                const sortedStats = Object.entries(armorPiece.stats).sort((a, b) => b[1] - a[1]);
                return { primary: sortedStats[0][0], secondary: sortedStats[1][0] };
            })();
            const nonPrimaryStats = statKeys.filter(stat => stat !== primary && stat !== secondary);
            const neededNonPrimaryStats = nonPrimaryStats.filter(stat => deficits[stat] > 0);

            if (neededNonPrimaryStats.length >= 3) {
                const bestBoostCombo = neededNonPrimaryStats.slice(0, 3);
                const bestShift = productiveShifts[0];

                tuningModOptions.push([
                    { type: 'boost', stats: bestBoostCombo },
                    { type: 'shift', from: bestShift.from, to: bestShift.to }
                ]);
            }
        }

        return tuningModOptions;
    }

    function applyTuningMods(baseStats, tuningMods) {
        let workingStats = { ...baseStats };
        const modsUsed = [];

        for (const mod of tuningMods) {
            if (mod.type === 'shift') {
                if (workingStats[mod.from] >= 5) {
                    workingStats[mod.from] -= 5;
                    workingStats[mod.to] += 5;
                    modsUsed.push(`Tuning: +5 ${getStatName(mod.to)}, -5 ${getStatName(mod.from)}`);
                }
            } else if (mod.type === 'boost') {
                mod.stats.forEach(stat => {
                    workingStats[stat] += 1;
                });
                const statNames = mod.stats.map(stat => getStatName(stat)).join('/');
                modsUsed.push(`Tuning: +1 ${statNames}`);
            }
        }

        return { workingStats, modsUsed };
    }

    function applyMods(baseStats, targets, priorities, maxStats, availableMods, useTuningMods, customFragmentBonuses, armorPiece = null) {
        let workingStats = { ...baseStats };
        let modsUsed = [];

        let hasFragmentBonuses = false;
        for (const stat in customFragmentBonuses) {
            const bonus = customFragmentBonuses[stat];
            if (bonus !== 0) {
                workingStats[stat] += bonus;
                hasFragmentBonuses = true;
            }
        }
        if (hasFragmentBonuses) {
            const fragmentDescription = Object.keys(customFragmentBonuses)
                .filter(stat => customFragmentBonuses[stat] !== 0)
                .map(stat => {
                    const bonus = customFragmentBonuses[stat];
                    const sign = bonus > 0 ? '+' : '';
                    return `${sign}${bonus} ${getStatName(stat)}`;
                })
                .join(', ');
            modsUsed.push(`Fragment/Font Mods: ${fragmentDescription}`);
        }

        let bestResult = { workingStats, modsUsed: [] };
        let bestScore = -Infinity;

        if (useTuningMods) {
            const tuningOptions = generateBestTuningMods(workingStats, targets, availableMods.tuning, armorPiece);

            for (const tuningMods of tuningOptions) {
                const tuningResult = applyTuningMods(workingStats, tuningMods);
                const regularResult = applyRegularMods(tuningResult.workingStats, targets, priorities, maxStats, availableMods.major, availableMods.minor);

                const finalStats = regularResult.finalStats;
                const meetsAllTargets = Object.keys(targets).every(stat => finalStats[stat] >= targets[stat]);
                const score = calculatePriorityScore(finalStats, targets, priorities, maxStats, meetsAllTargets);

                if (score > bestScore) {
                    bestScore = score;
                    bestResult = {
                        workingStats: finalStats,
                        modsUsed: [...tuningResult.modsUsed, ...regularResult.modsUsed]
                    };
                }
            }
        } else {
            const regularResult = applyRegularMods(workingStats, targets, priorities, maxStats, availableMods.major, availableMods.minor);
            bestResult = {
                workingStats: regularResult.finalStats,
                modsUsed: regularResult.modsUsed
            };
        }

        return {
            finalStats: bestResult.workingStats,
            modsUsed: [...modsUsed, ...bestResult.modsUsed]
        };
    }

    function applyRegularMods(workingStats, targets, priorities, maxStats, remainingMajor, remainingMinor) {
        let stats = { ...workingStats };
        const modsUsed = [];

        const statDeficits = Object.keys(targets).map(stat => ({
            stat,
            deficit: Math.max(0, targets[stat] - stats[stat]),
            priority: priorities[stat],
            target: targets[stat]
        }));

        const priorityWeight = { high: 3, normal: 2, low: 1 };
        statDeficits.sort((a, b) => {
            if (a.target === 0 && b.target > 0) return 1;
            if (a.target > 0 && b.target === 0) return -1;
            if (a.deficit === 0 && b.deficit > 0) return 1;
            if (a.deficit > 0 && b.deficit === 0) return -1;
            const aScore = priorityWeight[a.priority] * a.deficit;
            const bScore = priorityWeight[b.priority] * b.deficit;
            if (aScore !== bScore) return bScore - aScore;
            return priorityWeight[b.priority] - priorityWeight[a.priority];
        });

        for (const statInfo of statDeficits) {
            const stat = statInfo.stat;
            while (remainingMajor > 0 && stats[stat] < targets[stat]) {
                const wouldOvershoot = (stats[stat] + 10) > targets[stat];
                const overshootAmount = Math.max(0, (stats[stat] + 10) - targets[stat]);
                if (wouldOvershoot && overshootAmount > 7 && remainingMinor >= 2) {
                    break;
                }
                stats[stat] += 10;
                remainingMajor--;
                modsUsed.push(`Major ${getStatName(stat)} Mod (+10)`);
            }
        }

        for (const statInfo of statDeficits) {
            const stat = statInfo.stat;
            while (remainingMinor > 0 && stats[stat] < targets[stat]) {
                const wouldOvershoot = (stats[stat] + 5) > targets[stat];
                const overshootAmount = Math.max(0, (stats[stat] + 5) - targets[stat]);
                if (wouldOvershoot && overshootAmount > 3 && priorities[stat] !== 'high') {
                    continue;
                }
                stats[stat] += 5;
                remainingMinor--;
                modsUsed.push(`Minor ${getStatName(stat)} Mod (+5)`);
            }
        }

        return { finalStats: stats, modsUsed };
    }

    function getOptimalArmorPieces(targets, priorities, availablePieces) {
        const priorityWeight = { high: 3, normal: 2, low: 1 };

        return availablePieces.map(piece => {
            let efficiencyScore = 0;
            let wasteScore = 0;
            let targetAlignment = 0;

            for (const stat in piece.stats) {
                const statValue = piece.stats[stat];
                const targetValue = targets[stat];
                const priority = priorities[stat];
                const weight = priorityWeight[priority];

                if (targetValue > 0) {
                    const contribution = Math.min(statValue, targetValue);
                    efficiencyScore += contribution * weight * 2;
                    targetAlignment += contribution;

                    const excess = Math.max(0, statValue - targetValue);
                    if (excess > 0) {
                        if (priority === 'low') {
                            wasteScore += excess * 0.5;
                        } else {
                            wasteScore += excess * 0.1;
                        }
                    }
                } else if (statValue > 0) {
                    wasteScore += statValue * 0.2;
                }
            }

            const helpfulStats = Object.keys(piece.stats).filter(stat =>
                piece.stats[stat] > 0 && targets[stat] > 0
            ).length;
            efficiencyScore += helpfulStats * 15;

            const finalScore = efficiencyScore - wasteScore + targetAlignment;

            return { ...piece, efficiencyScore: finalScore, targetAlignment };
        }).sort((a, b) => {
            if (Math.abs(a.efficiencyScore - b.efficiencyScore) < 5) {
                return b.targetAlignment - a.targetAlignment;
            }
            return b.efficiencyScore - a.efficiencyScore;
        });
    }

    // Main solution finder — custom armor piece occupies one slot, rest are regular
    function findSolutions(targets, priorities, maxStats, availableMods, useTuningMods, customArmorPiece, customFragmentBonuses) {
        const solutions = [];
        const processedCombinations = new Set();
        const maxSolutions = 2000;

        const availablePieces = getAvailableArmorPieces();
        let workingPieces = getOptimalArmorPieces(targets, priorities, availablePieces);

        console.log(`Starting with ${workingPieces.length} armor pieces...`);

        const hasSpecificTargets = Object.values(targets).some(val => val > 0);
        const piecesToUse = hasSpecificTargets ? Math.max(workingPieces.length, 30) : 24;
        workingPieces = workingPieces.slice(0, piecesToUse);

        console.log(`Using top ${workingPieces.length} armor pieces for combinations...`);

        const generateAllCombinations = () => {
            const combinations = [];
            const maxCombinations = 6000;

            if (customArmorPiece) {
                // Custom armor piece occupies one slot; fill the other 4 with regular pieces
                const topRegular = workingPieces.slice(0, 20);

                console.log(`Custom armor mode: ${topRegular.length} regular pieces`);

                for (let customPos = 0; customPos < 5; customPos++) {
                    for (let i = 0; i < Math.min(topRegular.length, 15) && combinations.length < maxCombinations; i++) {
                        for (let j = 0; j < Math.min(topRegular.length, 15) && combinations.length < maxCombinations; j++) {
                            for (let k = 0; k < Math.min(topRegular.length, 15) && combinations.length < maxCombinations; k++) {
                                for (let l = 0; l < Math.min(topRegular.length, 15) && combinations.length < maxCombinations; l++) {
                                    const armorSet = new Array(5);
                                    const regularIndices = [i, j, k, l, i % topRegular.length];

                                    for (let slot = 0; slot < 5; slot++) {
                                        if (slot === customPos) {
                                            armorSet[slot] = customArmorPiece;
                                        } else {
                                            const regIndex = slot < 4 ? regularIndices[slot] : regularIndices[4];
                                            armorSet[slot] = topRegular[regIndex];
                                        }
                                    }

                                    combinations.push(armorSet);
                                }
                            }
                        }
                    }
                }
            } else {
                // Regular armor only
                const nonCustomPieces = workingPieces;
                const topPieces = nonCustomPieces.slice(0, 25);

                console.log(`Regular mode: ${topPieces.length} pieces`);

                for (let i = 0; i < Math.min(topPieces.length, 18) && combinations.length < maxCombinations; i++) {
                    for (let j = 0; j < Math.min(topPieces.length, 18) && combinations.length < maxCombinations; j++) {
                        for (let k = 0; k < Math.min(topPieces.length, 18) && combinations.length < maxCombinations; k++) {
                            for (let l = 0; l < Math.min(topPieces.length, 18) && combinations.length < maxCombinations; l++) {
                                for (let m = 0; m < Math.min(topPieces.length, 18) && combinations.length < maxCombinations; m++) {
                                    combinations.push([topPieces[i], topPieces[j], topPieces[k], topPieces[l], topPieces[m]]);
                                }
                            }
                        }
                    }
                }
            }

            return combinations;
        };

        const combinations = generateAllCombinations();
        console.log(`Generated ${combinations.length} armor combinations to test...`);

        let processedCount = 0;
        for (const armorCombination of combinations) {
            if (solutions.length >= maxSolutions) break;

            processedCount++;
            if (processedCount % 1000 === 0) {
                console.log(`Processed ${processedCount}/${combinations.length} combinations...`);
            }

            const combinationKey = armorCombination.map(p => p.name).sort().join('|');
            if (processedCombinations.has(combinationKey)) continue;
            processedCombinations.add(combinationKey);

            const baseStats = { h: 0, m: 0, g: 0, s: 0, c: 0, w: 0 };
            for (const piece of armorCombination) {
                for (const stat in baseStats) {
                    baseStats[stat] += piece.stats[stat];
                }
            }

            const result = applyMods(baseStats, targets, priorities, maxStats, availableMods, useTuningMods, customFragmentBonuses, armorCombination[0]);

            const meetsAllTargets = Object.keys(targets).every(stat => result.finalStats[stat] >= targets[stat]);
            const priorityScore = calculatePriorityScore(result.finalStats, targets, priorities, maxStats, meetsAllTargets);

            solutions.push({
                armor: armorCombination.map(p => ({
                    name: p.name,
                    isCustom: p.isCustom || false
                })),
                mods: result.modsUsed,
                final: result.finalStats,
                meetsAllTargets,
                priorityScore,
                baseStats
            });
        }

        console.log(`Found ${solutions.length} total solutions`);

        const sortedSolutions = solutions.sort((a, b) => {
            if (a.meetsAllTargets && !b.meetsAllTargets) return -1;
            if (!a.meetsAllTargets && b.meetsAllTargets) return 1;
            return b.priorityScore - a.priorityScore;
        });

        const perfectSolutions = sortedSolutions.filter(s => s.meetsAllTargets);
        console.log(`Found ${perfectSolutions.length} solutions that meet all targets`);

        return sortedSolutions;
    }

    function formatStats(stats, maxStats) {
        const orderedStats = ['h', 'm', 'g', 's', 'c', 'w'];
        return orderedStats.map(stat => {
            const value = stats[stat];
            const maxStat = maxStats[stat];
            const isOverMax = value > maxStat && maxStat < MAX_STAT_VALUE;
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

        const uniqueSolutions = [];
        const seenCombinations = new Set();
        for (const solution of allSolutions) {
            const combinationKey = solution.armor.map(p => p.name).sort().join('|');
            if (!seenCombinations.has(combinationKey)) {
                seenCombinations.add(combinationKey);
                uniqueSolutions.push(solution);
            }
        }

        const metTargets = uniqueSolutions.filter(s => s.meetsAllTargets);
        const partialTargets = uniqueSolutions.filter(s => !s.meetsAllTargets);

        const solutionsToRender = metTargets.length > 0 ? metTargets : partialTargets;

        if (solutionsToRender.length === 0) {
            resultsContainer.innerHTML = '<h2>No solutions found. Try different targets or more available mods.</h2>';
            return;
        }

        let html = '';
        if (solutionsPageIndex === 0) {
            if (metTargets.length > 0) {
                html += '<h2 class="results-group-header met-target-header">✔️ Builds Meeting All Targets</h2>';
                console.log(`Found ${metTargets.length} builds that meet all targets!`);
            } else {
                html += '<h2 class="results-group-header partial-target-header">⚠️ Closest Alternative Builds</h2>';
                console.log(`No builds meet all targets. Showing ${partialTargets.length} closest alternatives.`);
            }
        }

        const start = solutionsPageIndex * solutionsPerPage;
        const end = start + solutionsPerPage;
        const currentSolutions = solutionsToRender.slice(start, end);

        currentSolutions.forEach((solution, index) => {
            const title = `Build #${start + index + 1}`;

            const armorCounts = {};
            solution.armor.forEach(piece => {
                const key = `${piece.name}|${piece.isCustom || false}`;
                if (!armorCounts[key]) {
                    armorCounts[key] = { count: 0, piece };
                }
                armorCounts[key].count++;
            });

            const armorListHtml = Object.values(armorCounts).map(({ count, piece }) => {
                const countString = count > 1 ? ` x${count}` : '';
                const cssClass = piece.isCustom ? 'custom-piece' : '';
                return `<li class="${cssClass}"><b>${piece.name}</b>${countString}</li>`;
            }).join('');

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

    // Initialize
    checkModLimits();
    updateTuningModDescription();
});