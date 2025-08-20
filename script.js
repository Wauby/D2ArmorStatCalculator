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
    // Masterworked adds +5 to the 3 stats that don't have primary/secondary/tertiary (updated to 5)
    const exoticArmorData = [
        // Bulwark: Health-Class
        { name: "Exotic Bulwark (Tertiary: Melee)", stats: { h: 30, m: 13, g: 5, s: 5, c: 20, w: 5 }, isExotic: true },
        { name: "Exotic Bulwark (Tertiary: Grenade)", stats: { h: 30, m: 5, g: 13, s: 5, c: 20, w: 5 }, isExotic: true },
        { name: "Exotic Bulwark (Tertiary: Super)", stats: { h: 30, m: 5, g: 5, s: 13, c: 20, w: 5 }, isExotic: true },
        { name: "Exotic Bulwark (Tertiary: Weapons)", stats: { h: 30, m: 5, g: 5, s: 5, c: 20, w: 13 }, isExotic: true },
        // Specialist: Class-Weapons
        { name: "Exotic Specialist (Tertiary: Health)", stats: { h: 13, m: 5, g: 5, s: 5, c: 30, w: 20 }, isExotic: true },
        { name: "Exotic Specialist (Tertiary: Melee)", stats: { h: 5, m: 13, g: 5, s: 5, c: 30, w: 20 }, isExotic: true },
        { name: "Exotic Specialist (Tertiary: Grenade)", stats: { h: 5, m: 5, g: 13, s: 5, c: 30, w: 20 }, isExotic: true },
        { name: "Exotic Specialist (Tertiary: Super)", stats: { h: 5, m: 5, g: 5, s: 13, c: 30, w: 20 }, isExotic: true },
        // Gunner: Weapons-Grenade
        { name: "Exotic Gunner (Tertiary: Health)", stats: { h: 13, m: 5, g: 20, s: 5, c: 5, w: 30 }, isExotic: true },
        { name: "Exotic Gunner (Tertiary: Melee)", stats: { h: 5, m: 13, g: 20, s: 5, c: 5, w: 30 }, isExotic: true },
        { name: "Exotic Gunner (Tertiary: Super)", stats: { h: 5, m: 5, g: 20, s: 13, c: 5, w: 30 }, isExotic: true },
        { name: "Exotic Gunner (Tertiary: Class)", stats: { h: 5, m: 5, g: 20, s: 5, c: 13, w: 30 }, isExotic: true },
        // Grenadier: Grenade-Super
        { name: "Exotic Grenadier (Tertiary: Health)", stats: { h: 13, m: 5, g: 30, s: 20, c: 5, w: 5 }, isExotic: true },
        { name: "Exotic Grenadier (Tertiary: Melee)", stats: { h: 5, m: 13, g: 30, s: 20, c: 5, w: 5 }, isExotic: true },
        { name: "Exotic Grenadier (Tertiary: Weapons)", stats: { h: 5, m: 5, g: 30, s: 20, c: 5, w: 13 }, isExotic: true },
        { name: "Exotic Grenadier (Tertiary: Class)", stats: { h: 5, m: 5, g: 30, s: 20, c: 13, w: 5 }, isExotic: true },
        // Paragon: Super-Melee
        { name: "Exotic Paragon (Tertiary: Health)", stats: { h: 13, m: 20, g: 5, s: 30, c: 5, w: 5 }, isExotic: true },
        { name: "Exotic Paragon (Tertiary: Grenade)", stats: { h: 5, m: 20, g: 13, s: 30, c: 5, w: 5 }, isExotic: true },
        { name: "Exotic Paragon (Tertiary: Weapons)", stats: { h: 5, m: 20, g: 5, s: 30, c: 5, w: 13 }, isExotic: true },
        { name: "Exotic Paragon (Tertiary: Class)", stats: { h: 5, m: 20, g: 5, s: 30, c: 13, w: 5 }, isExotic: true },
        // Brawler: Melee-Health
        { name: "Exotic Brawler (Tertiary: Grenade)", stats: { h: 20, m: 30, g: 13, s: 5, c: 5, w: 5 }, isExotic: true },
        { name: "Exotic Brawler (Tertiary: Super)", stats: { h: 20, m: 30, g: 5, s: 13, c: 5, w: 5 }, isExotic: true },
        { name: "Exotic Brawler (Tertiary: Weapons)", stats: { h: 20, m: 30, g: 5, s: 5, c: 5, w: 13 }, isExotic: true },
        { name: "Exotic Brawler (Tertiary: Class)", stats: { h: 20, m: 30, g: 5, s: 5, c: 13, w: 5 }, isExotic: true }
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
    const tuningModsToggle = document.getElementById('tuningModsToggle');
    const MAX_STAT_VALUE = 200;

    let allSolutions = [];
    let solutionsPageIndex = 0;
    const solutionsPerPage = 5;

    // Toggle mutual exclusivity between custom armor and exotic armor
    customArmorToggle.addEventListener('change', () => {
        if (customArmorToggle.checked) {
            exoticArmorToggle.checked = false;
        }
        customArmorSection.style.display = customArmorToggle.checked ? 'block' : 'none';
        updateTuningModDescription();
    });

    exoticArmorToggle.addEventListener('change', () => {
        if (exoticArmorToggle.checked) {
            customArmorToggle.checked = false;
            customArmorSection.style.display = 'none';
        }
        updateTuningModDescription();
    });

    // Toggle custom fragment section visibility
    customFragmentToggle.addEventListener('change', () => {
        customFragmentSection.style.display = customFragmentToggle.checked ? 'block' : 'none';
    });

    // Update tuning mod description based on current settings
    function updateTuningModDescription() {
        const description = document.getElementById('tuningModDescription');
        const isReduced = customArmorToggle.checked || exoticArmorToggle.checked;
        const maxMods = isReduced ? 4 : 5;

        description.textContent = `Allows using up to ${maxMods} mods that shift stats (+5 to one, -5 to another) or add minor boosts (+1 to three non-primary stats).`;
        if (isReduced) {
            description.textContent += ' Reduced to 4 when using custom/exotic armor.';
        }
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
            tuning: customArmorToggle.checked || exoticArmorToggle.checked ? 4 : 5
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

    // IMPROVED priority scoring system - focuses on getting as close as possible to targets
    function calculatePriorityScore(finalStats, targets, priorities, maxStats, meetsAllTargets) {
        let score = 0;

        // Huge bonus for meeting all targets exactly or closely
        if (meetsAllTargets) {
            score += 100000;
        }

        // Calculate how close we are to each target
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

            // Heavy penalty for not meeting targets (deficit)
            if (deficit > 0) {
                const deficitPenalty = deficit * deficit * priorityMultiplier[priorities[stat]] * 3;
                score -= deficitPenalty;
                weightedDistance += deficit * priorityMultiplier[priorities[stat]];
            }

            // Moderate penalty for exceeding targets (waste)
            if (excess > 0) {
                let excessPenalty;
                if (priorities[stat] === 'high') {
                    // Small penalty for high priority - some excess is okay
                    excessPenalty = Math.pow(excess * 0.3, 1.5) * 20;
                } else if (priorities[stat] === 'normal') {
                    // Medium penalty for normal priority
                    excessPenalty = Math.pow(excess * 0.5, 1.5) * 30;
                } else {
                    // Heavy penalty for low priority - waste is bad
                    excessPenalty = excess * excess * 50;
                }
                score -= excessPenalty;
                weightedDistance += excess * priorityMultiplier[priorities[stat]] * 0.2;
            }

            // Heavy penalty for exceeding max preferences
            if (overMax > 0 && maxStat < MAX_STAT_VALUE) {
                score -= overMax * overMax * 100;
            }

            totalDistance += Math.abs(value - target);
        }

        // Bonus for being close to targets overall
        const closenessBonus = Math.max(0, 1000 - totalDistance * 10);
        score += closenessBonus;

        // Bonus for efficient stat distribution (hitting multiple targets)
        const targetsHit = Object.keys(targets).filter(stat =>
            targets[stat] > 0 && finalStats[stat] >= targets[stat]
        ).length;
        score += targetsHit * 5000;

        return Math.round(score);
    }

    // IMPROVED tuning mod generation - smarter about target proximity
    function generateBestTuningMods(baseStats, targets, maxTuningMods, armorPiece) {
        const statKeys = ['h', 'm', 'g', 's', 'c', 'w'];
        const tuningModOptions = [];

        // Always include no tuning mods as an option
        tuningModOptions.push([]);

        // Calculate deficits and excesses for smarter mod selection
        const deficits = {};
        const excesses = {};
        for (const stat of statKeys) {
            deficits[stat] = Math.max(0, targets[stat] - baseStats[stat]);
            excesses[stat] = Math.max(0, baseStats[stat] - targets[stat]);
        }

        // Helper function to get primary/secondary stats for +1/+1/+1 mods
        function getArmorType(stats) {
            const sortedStats = Object.entries(stats).sort((a, b) => b[1] - a[1]);
            return {
                primary: sortedStats[0][0],
                secondary: sortedStats[1][0]
            };
        }

        // Generate +1/+1/+1 boost combinations (only if we have deficits in those stats)
        if (armorPiece && armorPiece.stats) {
            const { primary, secondary } = getArmorType(armorPiece.stats);
            const nonPrimaryStats = statKeys.filter(stat => stat !== primary && stat !== secondary);

            // Only generate boosts for stats we actually need
            const neededNonPrimaryStats = nonPrimaryStats.filter(stat => deficits[stat] > 0);

            if (neededNonPrimaryStats.length >= 3) {
                // Generate combinations of 3 stats from needed non-primary stats
                for (let i = 0; i < neededNonPrimaryStats.length - 2; i++) {
                    for (let j = i + 1; j < neededNonPrimaryStats.length - 1; j++) {
                        for (let k = j + 1; k < neededNonPrimaryStats.length; k++) {
                            const boostStats = [neededNonPrimaryStats[i], neededNonPrimaryStats[j], neededNonPrimaryStats[k]];

                            // Single +1/+1/+1 mod
                            tuningModOptions.push([{ type: 'boost', stats: boostStats }]);

                            // Multiple +1/+1/+1 mods (only if we need lots of small boosts)
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

        // IMPROVED +5/-5 shift combinations - prioritize productive shifts
        const productiveShifts = [];

        for (const statFrom of statKeys) {
            for (const statTo of statKeys) {
                if (statFrom !== statTo) {
                    const hasExcess = excesses[statFrom] > 0;
                    const needsMore = deficits[statTo] > 0;
                    const canAfford = baseStats[statFrom] >= 5;

                    // Calculate shift value - how beneficial this shift would be
                    let shiftValue = 0;
                    if (hasExcess && needsMore && canAfford) {
                        // Perfect shift - reduces excess and fills deficit
                        shiftValue = 100;
                        shiftValue += Math.min(excesses[statFrom], deficits[statTo]) * 10;
                    } else if (needsMore && canAfford && excesses[statFrom] >= 2) {
                        // Good shift - helps target even if source isn't excess
                        shiftValue = 50;
                        shiftValue += deficits[statTo] * 5;
                    } else if (needsMore && canAfford) {
                        // Acceptable shift - helps target
                        shiftValue = 25;
                        shiftValue += deficits[statTo] * 2;
                    }

                    if (shiftValue > 0) {
                        productiveShifts.push({ from: statFrom, to: statTo, value: shiftValue });
                    }
                }
            }
        }

        // Sort shifts by value and generate mod combinations
        productiveShifts.sort((a, b) => b.value - a.value);

        // Add best shift combinations
        for (let i = 0; i < Math.min(productiveShifts.length, 10); i++) {
            const shift = productiveShifts[i];

            // Single shift
            tuningModOptions.push([{ type: 'shift', from: shift.from, to: shift.to }]);

            // Multiple shifts of same type (if we need lots in that direction)
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

        // Mixed combinations - shifts + boosts (only the most promising ones)
        if (armorPiece && armorPiece.stats && maxTuningMods >= 2 && productiveShifts.length > 0) {
            const { primary, secondary } = getArmorType(armorPiece.stats);
            const nonPrimaryStats = statKeys.filter(stat => stat !== primary && stat !== secondary);
            const neededNonPrimaryStats = nonPrimaryStats.filter(stat => deficits[stat] > 0);

            if (neededNonPrimaryStats.length >= 3) {
                const bestBoostCombo = neededNonPrimaryStats.slice(0, 3);
                const bestShift = productiveShifts[0];

                // One boost + one shift
                tuningModOptions.push([
                    { type: 'boost', stats: bestBoostCombo },
                    { type: 'shift', from: bestShift.from, to: bestShift.to }
                ]);
            }
        }

        return tuningModOptions;
    }

    // Apply tuning mods
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

    // IMPROVED mod application - much smarter about reaching targets efficiently
    function applyMods(baseStats, targets, priorities, maxStats, availableMods, useTuningMods, customFragmentBonuses, armorPiece = null) {
        let workingStats = { ...baseStats };
        let modsUsed = [];

        // Apply fragment bonuses first
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

    // IMPROVED regular mod application - smarter targeting
    function applyRegularMods(workingStats, targets, priorities, maxStats, remainingMajor, remainingMinor) {
        let stats = { ...workingStats };
        const modsUsed = [];

        // Calculate deficits for each stat
        const statDeficits = Object.keys(targets).map(stat => ({
            stat,
            deficit: Math.max(0, targets[stat] - stats[stat]),
            priority: priorities[stat],
            target: targets[stat]
        }));

        // Sort by priority and deficit, but be smarter about it
        const priorityWeight = { high: 3, normal: 2, low: 1 };
        statDeficits.sort((a, b) => {
            // First, prioritize stats that actually have targets > 0
            if (a.target === 0 && b.target > 0) return 1;
            if (a.target > 0 && b.target === 0) return -1;

            // Then by deficit existence (stats that need help)
            if (a.deficit === 0 && b.deficit > 0) return 1;
            if (a.deficit > 0 && b.deficit === 0) return -1;

            // Then by priority weight * deficit
            const aScore = priorityWeight[a.priority] * a.deficit;
            const bScore = priorityWeight[b.priority] * b.deficit;
            if (aScore !== bScore) return bScore - aScore;

            // Finally by raw priority
            return priorityWeight[b.priority] - priorityWeight[a.priority];
        });

        // Apply major mods more intelligently
        for (const statInfo of statDeficits) {
            const stat = statInfo.stat;
            while (remainingMajor > 0 && stats[stat] < targets[stat]) {
                // Check if a major mod would overshoot by too much
                const wouldOvershoot = (stats[stat] + 10) > targets[stat];
                const overshootAmount = Math.max(0, (stats[stat] + 10) - targets[stat]);

                // If we would overshoot by more than 7, consider using minor mods instead
                if (wouldOvershoot && overshootAmount > 7 && remainingMinor >= 2) {
                    break; // Let minor mods handle this
                }

                stats[stat] += 10;
                remainingMajor--;
                modsUsed.push(`Major ${getStatName(stat)} Mod (+10)`);
            }
        }

        // Apply minor mods with similar intelligence
        for (const statInfo of statDeficits) {
            const stat = statInfo.stat;
            while (remainingMinor > 0 && stats[stat] < targets[stat]) {
                // Check if a minor mod would overshoot by too much
                const wouldOvershoot = (stats[stat] + 5) > targets[stat];
                const overshootAmount = Math.max(0, (stats[stat] + 5) - targets[stat]);

                // Only apply if overshoot is reasonable (≤3) or if it's high priority
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

    // IMPROVED armor piece selection - better target alignment
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
                    // Positive contribution for stats we need
                    const contribution = Math.min(statValue, targetValue); // Don't over-reward excess
                    efficiencyScore += contribution * weight * 2;
                    targetAlignment += contribution;

                    // Small penalty for excess beyond target
                    const excess = Math.max(0, statValue - targetValue);
                    if (excess > 0) {
                        if (priority === 'low') {
                            wasteScore += excess * 0.5; // Heavy penalty for low priority waste
                        } else {
                            wasteScore += excess * 0.1; // Light penalty for normal/high priority excess
                        }
                    }
                } else if (statValue > 0) {
                    // Penalty for stats we don't need at all
                    wasteScore += statValue * 0.2;
                }
            }

            // Bonus for pieces that help multiple target stats
            const helpfulStats = Object.keys(piece.stats).filter(stat =>
                piece.stats[stat] > 0 && targets[stat] > 0
            ).length;
            efficiencyScore += helpfulStats * 15;

            const finalScore = efficiencyScore - wasteScore + targetAlignment;

            return { ...piece, efficiencyScore: finalScore, targetAlignment };
        }).sort((a, b) => {
            // Sort by efficiency score primarily
            if (Math.abs(a.efficiencyScore - b.efficiencyScore) < 5) {
                return b.targetAlignment - a.targetAlignment; // Tie-breaker: better target alignment
            }
            return b.efficiencyScore - a.efficiencyScore;
        });
    }

    // Main solution finder with improved logic
    function findSolutions(targets, priorities, maxStats, availableMods, useTuningMods, customArmorPiece, useExoticArmor, customFragmentBonuses) {
        const solutions = [];
        const processedCombinations = new Set();
        const maxSolutions = 2000;

        // Get available pieces
        const availablePieces = getAvailableArmorPieces();
        let workingPieces = getOptimalArmorPieces(targets, priorities, availablePieces);

        console.log(`Starting with ${workingPieces.length} armor pieces...`);

        // Use more pieces if we have specific targets
        const hasSpecificTargets = Object.values(targets).some(val => val > 0);
        const piecesToUse = hasSpecificTargets ? Math.max(workingPieces.length, 30) : 24;
        workingPieces = workingPieces.slice(0, piecesToUse);

        console.log(`Using top ${workingPieces.length} armor pieces for combinations...`);

        // Generate combinations more systematically
        const generateAllCombinations = () => {
            const combinations = [];
            const maxCombinations = 6000; // Increased for better results

            if (useExoticArmor) {
                const regularPieces = workingPieces.filter(p => !p.isExotic);
                const exoticPieces = workingPieces.filter(p => p.isExotic);

                console.log(`Exotic mode: ${regularPieces.length} regular, ${exoticPieces.length} exotic pieces`);

                if (exoticPieces.length === 0) {
                    console.error('No exotic pieces available');
                    return [];
                }

                // For each exotic piece, try it in each armor slot position
                for (const exoticPiece of exoticPieces.slice(0, 12)) { // More exotic pieces
                    for (let exoticPos = 0; exoticPos < 5; exoticPos++) {
                        const topRegular = regularPieces.slice(0, 20); // More regular pieces

                        for (let i = 0; i < Math.min(topRegular.length, 15) && combinations.length < maxCombinations; i++) {
                            for (let j = 0; j < Math.min(topRegular.length, 15) && combinations.length < maxCombinations; j++) {
                                for (let k = 0; k < Math.min(topRegular.length, 15) && combinations.length < maxCombinations; k++) {
                                    for (let l = 0; l < Math.min(topRegular.length, 15) && combinations.length < maxCombinations; l++) {
                                        const armorSet = new Array(5);
                                        const regularIndices = [i, j, k, l, i % topRegular.length];

                                        for (let slot = 0; slot < 5; slot++) {
                                            if (slot === exoticPos) {
                                                armorSet[slot] = exoticPiece;
                                            } else {
                                                const regIndex = slot < 4 ? regularIndices[slot] : regularIndices[4];
                                                armorSet[slot] = topRegular[regIndex];
                                            }
                                        }

                                        const exoticCount = armorSet.filter(p => p.isExotic).length;
                                        if (exoticCount === 1) {
                                            combinations.push(armorSet);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (customArmorPiece) {
                const regularPieces = workingPieces.filter(p => !p.isExotic && !p.isCustom);
                const topRegular = regularPieces.slice(0, 20);

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
                // Regular armor only - comprehensive but smarter
                const nonExoticPieces = workingPieces.filter(p => !p.isExotic);
                const topPieces = nonExoticPieces.slice(0, 25); // More pieces for better coverage

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

        // Test each combination
        let processedCount = 0;
        for (const armorCombination of combinations) {
            if (solutions.length >= maxSolutions) break;

            processedCount++;
            if (processedCount % 1000 === 0) {
                console.log(`Processed ${processedCount}/${combinations.length} combinations...`);
            }

            // Create combination key to avoid duplicates
            const combinationKey = armorCombination.map(p => p.name).sort().join('|');
            if (processedCombinations.has(combinationKey)) continue;
            processedCombinations.add(combinationKey);

            // Calculate base stats from armor
            const baseStats = { h: 0, m: 0, g: 0, s: 0, c: 0, w: 0 };
            for (const piece of armorCombination) {
                for (const stat in baseStats) {
                    baseStats[stat] += piece.stats[stat];
                }
            }

            // Apply mods and get final result
            const result = applyMods(baseStats, targets, priorities, maxStats, availableMods, useTuningMods, customFragmentBonuses, armorCombination[0]);

            // Check if solution meets all targets
            const meetsAllTargets = Object.keys(targets).every(stat => result.finalStats[stat] >= targets[stat]);
            const priorityScore = calculatePriorityScore(result.finalStats, targets, priorities, maxStats, meetsAllTargets);

            solutions.push({
                armor: armorCombination.map(p => ({
                    name: p.name,
                    isExotic: p.isExotic || false,
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

        // Sort solutions - perfect solutions first, then by score
        const sortedSolutions = solutions.sort((a, b) => {
            // Perfect solutions always come first
            if (a.meetsAllTargets && !b.meetsAllTargets) return -1;
            if (!a.meetsAllTargets && b.meetsAllTargets) return 1;

            // Within same category, sort by priority score
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

        // Remove duplicate solutions
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

    // Initialize mod limit checking and tuning description on page load
    checkModLimits();
    updateTuningModDescription();
});