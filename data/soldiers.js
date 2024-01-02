const soldiers = [
    { id: 665, name: "QuestionUnit" },
    { id: 652, name: "Peasant" },
    { id: 746, name: "Militia" },
    { id: 602, name: "Speerman" },
    { id: 628, name: "Elitespeerman" },
    { id: 603, name: "Mace" },
    { id: 630, name: "Elitemace" },
    { id: 601, name: "Swordman" },
    { id: 724, name: "Eliteswordman" },
    { id: 604, name: "Halberd" },
    { id: 308, name: "Elitehalberd", level: "0" },
    { id: 2000, name: "Elitehalberd", level: "1" },
    { id: 2001, name: "Elitehalberd", level: "2" },
    { id: 2002, name: "Elitehalberd", level: "3" },
    { id: 2003, name: "Elitehalberd", level: "4" },
    { id: 2004, name: "Elitehalberd", level: "5" },
    { id: 2005, name: "Elitehalberd", level: "6" },
    { id: 2006, name: "Elitehalberd", level: "7" },
    { id: 2007, name: "Elitehalberd", level: "8" },
    { id: 2008, name: "Elitehalberd", level: "9" },
    { id: 2009, name: "Elitehalberd", level: "10" },
    { id: 605, name: "Twohandedsword" },
    { id: 309, name: "Elitetwohandedsword", level: "0" },
    { id: 2010, name: "Elitetwohandedsword", level: "1" },
    { id: 2011, name: "Elitetwohandedsword", level: "2" },
    { id: 2012, name: "Elitetwohandedsword", level: "3" },
    { id: 2013, name: "Elitetwohandedsword", level: "4" },
    { id: 2014, name: "Elitetwohandedsword", level: "5" },
    { id: 2015, name: "Elitetwohandedsword", level: "6" },
    { id: 2016, name: "Elitetwohandedsword", level: "7" },
    { id: 2017, name: "Elitetwohandedsword", level: "8" },
    { id: 2018, name: "Elitetwohandedsword", level: "9" },
    { id: 2019, name: "Elitetwohandedsword", level: "10" },
    { id: 148, name: "RelicAxe", level: "0" },
    { id: 2020, name: "RelicAxe", level: "1" },
    { id: 2021, name: "RelicAxe", level: "2" },
    { id: 2022, name: "RelicAxe", level: "3" },
    { id: 2023, name: "RelicAxe", level: "4" },
    { id: 2024, name: "RelicAxe", level: "5" },
    { id: 2025, name: "RelicAxe", level: "6" },
    { id: 2026, name: "RelicAxe", level: "7" },
    { id: 2027, name: "RelicAxe", level: "8" },
    { id: 2028, name: "RelicAxe", level: "9" },
    { id: 2029, name: "RelicAxe", level: "10" },
    { id: 150, name: "Relic Hammer", level: "0" },
    { id: 2030, name: "Relic Hammer", level: "1" },
    { id: 2031, name: "Relic Hammer", level: "2" },
    { id: 2032, name: "Relic Hammer", level: "3" },
    { id: 2033, name: "Relic Hammer", level: "4" },
    { id: 2034, name: "Relic Hammer", level: "5" },
    { id: 2035, name: "Relic Hammer", level: "6" },
    { id: 2036, name: "Relic Hammer", level: "7" },
    { id: 2037, name: "Relic Hammer", level: "8" },
    { id: 2038, name: "Relic Hammer", level: "9" },
    { id: 2039, name: "Relic Hammer", level: "10" },
    { id: 606, name: "Archer" },
    { id: 608, name: "Bowman" },
    { id: 631, name: "Elitebowman" },
    { id: 610, name: "Longbowman" },
    { id: 311, name: "Elitelongbowman", level: "0" },
    { id: 2040, name: "Elitelongbowman", level: "1" },
    { id: 2041, name: "Elitelongbowman", level: "2" },
    { id: 2042, name: "Elitelongbowman", level: "3" },
    { id: 2043, name: "Elitelongbowman", level: "4" },
    { id: 2044, name: "Elitelongbowman", level: "5" },
    { id: 2045, name: "Elitelongbowman", level: "6" },
    { id: 2046, name: "Elitelongbowman", level: "7" },
    { id: 2047, name: "Elitelongbowman", level: "8" },
    { id: 2048, name: "Elitelongbowman", level: "9" },
    { id: 2049, name: "Elitelongbowman", level: "10" },
    { id: 607, name: "Crossbowman" },
    { id: 636, name: "Elitecrossbowman" },
    { id: 609, name: "Heavycrossbowman" },
    { id: 312, name: "Eliteheavycrossbowman", level: "0" },
    { id: 2050, name: "Eliteheavycrossbowman", level: "1" },
    { id: 2051, name: "Eliteheavycrossbowman", level: "2" },
    { id: 2052, name: "Eliteheavycrossbowman", level: "3" },
    { id: 2053, name: "Eliteheavycrossbowman", level: "4" },
    { id: 2054, name: "Eliteheavycrossbowman", level: "5" },
    { id: 2055, name: "Eliteheavycrossbowman", level: "6" },
    { id: 2056, name: "Eliteheavycrossbowman", level: "7" },
    { id: 2057, name: "Eliteheavycrossbowman", level: "8" },
    { id: 2058, name: "Eliteheavycrossbowman", level: "9" },
    { id: 2059, name: "Eliteheavycrossbowman", level: "10" },
    { id: 149, name: "Relic shortbow", level: "0" },
    { id: 2060, name: "Relic shortbow", level: "1" },
    { id: 2061, name: "Relic shortbow", level: "2" },
    { id: 2062, name: "Relic shortbow", level: "3" },
    { id: 2063, name: "Relic shortbow", level: "4" },
    { id: 2064, name: "Relic shortbow", level: "5" },
    { id: 2065, name: "Relic shortbow", level: "6" },
    { id: 2066, name: "Relic shortbow", level: "7" },
    { id: 2067, name: "Relic shortbow", level: "8" },
    { id: 2068, name: "Relic shortbow", level: "9" },
    { id: 2069, name: "Relic shortbow", level: "10" },
    { id: 151, name: "Relic longbow", level: "0" },
    { id: 2070, name: "Relic longbow", level: "1" },
    { id: 2071, name: "Relic longbow", level: "2" },
    { id: 2072, name: "Relic longbow", level: "3" },
    { id: 2073, name: "Relic longbow", level: "4" },
    { id: 2074, name: "Relic longbow", level: "5" },
    { id: 2075, name: "Relic longbow", level: "6" },
    { id: 2076, name: "Relic longbow", level: "7" },
    { id: 2077, name: "Relic longbow", level: "8" },
    { id: 2078, name: "Relic longbow", level: "9" },
    { id: 2079, name: "Relic longbow", level: "10" },
    { id: 612, name: "Shadowmace" },
    { id: 613, name: "Shadowcrossbowman" },
    { id: 667, name: "Shadowtwohandedsword" },
    { id: 668, name: "Shadowheavycrossbowman" },
    { id: 747, name: "Shadowelitemace" },
    { id: 748, name: "Shadowelitecrossbowman" },
    { id: 92, name: "ShadowRankrewardMelee" },
    { id: 93, name: "ShadowRankrewardRange" },
    { id: 9, name: "EliteRankrewardmelee" },
    { id: 10, name: "EliteRankrewardrange" },
    { id: 714, name: "Rankrewardmelee" },
    { id: 715, name: "Rankrewardrange" },
    { id: 58, name: "RankrewardmeleeUSA" },
    { id: 59, name: "RankrewardrangeUSA" },
    { id: 40, name: "Renegadeskeletonspeerman" },
    { id: 41, name: "Renegadeskeletonbowman" },
    { id: 781, name: "Masterswordsman" },
    { id: 782, name: "MasterArcher" },
    { id: 655, name: "Eventknight" },
    { id: 656, name: "Eventcrossbowman" },
    { id: 672, name: "Kingsmace" },
    { id: 664, name: "Kingscrossbowman" },
    { id: 686, name: "Kingsspeerman" },
    { id: 687, name: "Kingsbowman" },
    { id: 75, name: "Elitekingsmace" },
    { id: 76, name: "Elitekingscrossbowman" },
    { id: 22, name: "ValkyrieMelee" },
    { id: 23, name: "ValkyrieRange" },
    { id: 126, name: "ShapeshifterMeleeJoker" },
    { id: 127, name: "ShapeshifterRangedJoker" },
    { id: 684, name: "Marauder" },
    { id: 685, name: "Firedevil" },
    { id: 765, name: "Elitemarauder" },
    { id: 766, name: "Elitefiredevil" },
    { id: 677, name: "Icemelee" },
    { id: 678, name: "Icerange" },
    { id: 690, name: "Iceeventmelee" },
    { id: 691, name: "Iceeventrange" },
    { id: 675, name: "Desertmelee" },
    { id: 676, name: "Desertrange" },
    { id: 688, name: "Deserteventmelee" },
    { id: 689, name: "Deserteventrange" },
    { id: 679, name: "Firemelee" },
    { id: 680, name: "Firerange" },
    { id: 692, name: "Fireeventmelee" },
    { id: 693, name: "Fireeventrange" },
    { id: 673, name: "Dragonclaws" },
    { id: 674, name: "Dragonjaw" },
    { id: 720, name: "Tinoswolves" },
    { id: 49, name: "Elite Tinoswolves" },
    { id: 277, name: "Elite Tinoswolves Variant" },
    { id: 721, name: "Conan" },
    { id: 723, name: "Flamethrower" },
    { id: 722, name: "Arrowthrower" },
    { id: 11, name: "EliteFlamethrower" },
    { id: 12, name: "EliteArrowthrower" },
    { id: 118, name: "Bonerattler" },
    { id: 117, name: "Firewitch" },
    { id: 120, name: "Skeletalscytheman" },
    { id: 119, name: "Skeletalarcher" },
    { id: 662, name: "Skeletonspeerman" },
    { id: 663, name: "Skeletonbowman" },
    { id: 698, name: "Cowhalberd" },
    { id: 699, name: "Cowbowman" },
    { id: 753, name: "Crusademelee" },
    { id: 754, name: "Crusaderange" },
    { id: 68, name: "Ogermace" },
    { id: 74, name: "Ogercrossbow" },
    { id: 78, name: "Ogermelee" },
    { id: 79, name: "Ogerrange" },
    { id: 7, name: "LowLevelOgermace" },
    { id: 8, name: "LowLevelOgercrossbow" },
    { id: 716, name: "Piratespeerman", level: "0" },
    { id: 701, name: "Piratespeerman", level: "1" },
    { id: 702, name: "Piratespeerman", level: "2" },
    { id: 717, name: "Piratebowman", level: "0" },
    { id: 703, name: "Piratebowman", level: "1" },
    { id: 704, name: "Piratebowman", level: "2" },
    { id: 718, name: "Tentacle" },
    { id: 719, name: "Octopushead" },
    { id: 759, name: "Renegadepiratemelee", level: "0" },
    { id: 705, name: "Renegadepiratemelee", level: "1" },
    { id: 706, name: "Renegadepiratemelee", level: "2" },
    { id: 760, name: "Renegadepiraterange", level: "0" },
    { id: 707, name: "Renegadepiraterange", level: "1" },
    { id: 708, name: "Renegadepiraterange", level: "2" },
    { id: 13, name: "AuxiliaryMelee" },
    { id: 14, name: "AuxiliaryRange" },
    { id: 710, name: "Bluemelee" },
    { id: 711, name: "Bluerange" },
    { id: 712, name: "Redmelee" },
    { id: 713, name: "Redrange" },
    { id: 18, name: "BerimondRewardMelee" },
    { id: 19, name: "BerimondRewardRange" },
    { id: 20, name: "EliteBerimondRewardMelee" },
    { id: 21, name: "EliteBerimondRewardRange" },
    { id: 743, name: "Pikeman" },
    { id: 744, name: "Spearthrower" },
    { id: 725, name: "Khanguard" },
    { id: 726, name: "Saberslasher" },
    { id: 727, name: "Slingshotmarksman" },
    { id: 5, name: "VeteranSaberslasher" },
    { id: 6, name: "VeteranSlingshotmarksman" },
    { id: 728, name: "Renegadepikeman" },
    { id: 729, name: "Renegadespearthrower" },
    { id: 34, name: "SamuraiAttackerMelee" },
    { id: 35, name: "SamuraiAttackerRange" },
    { id: 36, name: "SamuraiDefenderMelee" },
    { id: 37, name: "SamuraiDefenderRange" },
    { id: 38, name: "SamuraiDefenderMeleeNPC" },
    { id: 39, name: "SamuraiDefenderRangeNPC" },
    { id: 42, name: "HalloweenMelee" },
    { id: 43, name: "HalloweenRange" },
    { id: 48, name: "WinterAttackerMelee" },
    { id: 50, name: "WinterAttackerRange" },
    { id: 51, name: "EliteWinterAttackerMelee" },
    { id: 52, name: "EliteWinterAttackerRange" },
    { id: 83, name: "EliteSpringAttackerMelee" },
    { id: 84, name: "EliteSpringAttackerRange" },
    { id: 85, name: "EliteSpringDefenderMelee" },
    { id: 86, name: "EliteSpringDefenderRange" },
    { id: 132, name: "EliteChristmasAttackerMelee" },
    { id: 133, name: "EliteChristmasAttackerRange" },
    { id: 134, name: "EliteChristmasDefenderMelee" },
    { id: 135, name: "EliteChristmasDefenderRange" },
    { id: 657, name: "Nativemelee" },
    { id: 658, name: "Nativerange" },
    { id: 767, name: "Renegadenativemelee" },
    { id: 768, name: "Renegadenativerange" },
    { id: 183, name: "MayaMelee" },
    { id: 184, name: "MayaRange" },
    { id: 185, name: "MayaEliteMelee" },
    { id: 186, name: "MayaEliteRange" },
    { id: 187, name: "RenegadeMayaMelee" },
    { id: 188, name: "RenegadeMayaRange" },
    { id: 189, name: "RenegadeMayaEliteMelee" },
    { id: 190, name: "RenegadeMayaEliteRange" },
    { id: 100, name: "StpatricksDefenderMelee" },
    { id: 101, name: "StpatricksDefenderRange" },
    { id: 102, name: "EasterDefenderMelee" },
    { id: 103, name: "EasterDefenderRange" },
    { id: 146, name: "AlienRerollDefenderMelee" },
    { id: 147, name: "AlienRerollDefenderRange" },
    { id: 191, name: "CorruptedAssassin" },
    { id: 192, name: "CorruptedCrossbowman" },
    { id: 193, name: "CorruptedEliteHalberdier" },
    { id: 194, name: "CorruptedEliteLongbowman" },
    { id: 1337, name: "Fanccy" },
    { id: 195, name: "MeadShieldMaiden", level: "0" },
    { id: 196, name: "MeadShieldMaiden", level: "1" },
    { id: 197, name: "MeadShieldMaiden", level: "2" },
    { id: 198, name: "MeadShieldMaiden", level: "3" },
    { id: 199, name: "MeadShieldMaiden", level: "4" },
    { id: 200, name: "MeadShieldMaiden", level: "5" },
    { id: 201, name: "MeadShieldMaiden", level: "6" },
    { id: 202, name: "MeadShieldMaiden", level: "7" },
    { id: 203, name: "MeadShieldMaiden", level: "8" },
    { id: 204, name: "MeadShieldMaiden", level: "9" },
    { id: 215, name: "MeadShieldMaiden", level: "10" },
    { id: 205, name: "MeadRanger", level: "0" },
    { id: 206, name: "MeadRanger", level: "1" },
    { id: 207, name: "MeadRanger", level: "2" },
    { id: 208, name: "MeadRanger", level: "3" },
    { id: 209, name: "MeadRanger", level: "4" },
    { id: 210, name: "MeadRanger", level: "5" },
    { id: 211, name: "MeadRanger", level: "6" },
    { id: 212, name: "MeadRanger", level: "7" },
    { id: 213, name: "MeadRanger", level: "8" },
    { id: 214, name: "MeadRanger", level: "9" },
    { id: 216, name: "MeadRanger", level: "10" },
    { id: 217, name: "MeadMace", level: "0" },
    { id: 218, name: "MeadMace", level: "1" },
    { id: 219, name: "MeadMace", level: "2" },
    { id: 220, name: "MeadMace", level: "3" },
    { id: 221, name: "MeadMace", level: "4" },
    { id: 222, name: "MeadMace", level: "5" },
    { id: 223, name: "MeadMace", level: "6" },
    { id: 224, name: "MeadMace", level: "7" },
    { id: 225, name: "MeadMace", level: "8" },
    { id: 226, name: "MeadMace", level: "9" },
    { id: 227, name: "MeadMace", level: "10" },
    { id: 228, name: "MeadBow", level: "0" },
    { id: 229, name: "MeadBow", level: "1" },
    { id: 230, name: "MeadBow", level: "2" },
    { id: 231, name: "MeadBow", level: "3" },
    { id: 232, name: "MeadBow", level: "4" },
    { id: 233, name: "MeadBow", level: "5" },
    { id: 234, name: "MeadBow", level: "6" },
    { id: 235, name: "MeadBow", level: "7" },
    { id: 236, name: "MeadBow", level: "8" },
    { id: 237, name: "MeadBow", level: "9" },
    { id: 238, name: "MeadBow", level: "10" },
    { id: 820, name: "SamuraiDefenderMeleeNPC", level: "1" },
    { id: 821, name: "SamuraiDefenderMeleeNPC", level: "2" },
    { id: 822, name: "SamuraiDefenderMeleeNPC", level: "3" },
    { id: 823, name: "SamuraiDefenderMeleeNPC", level: "4" },
    { id: 824, name: "SamuraiDefenderMeleeNPC", level: "5" },
    { id: 825, name: "SamuraiDefenderMeleeNPC", level: "6" },
    { id: 826, name: "SamuraiDefenderMeleeNPC", level: "7" },
    { id: 827, name: "SamuraiDefenderMeleeNPC", level: "8" },
    { id: 828, name: "SamuraiDefenderMeleeNPC", level: "9" },
    { id: 829, name: "SamuraiDefenderMeleeNPC", level: "10" },
    { id: 830, name: "SamuraiDefenderRangeNPC", level: "1" },
    { id: 831, name: "SamuraiDefenderRangeNPC", level: "2" },
    { id: 832, name: "SamuraiDefenderRangeNPC", level: "3" },
    { id: 833, name: "SamuraiDefenderRangeNPC", level: "4" },
    { id: 834, name: "SamuraiDefenderRangeNPC", level: "5" },
    { id: 835, name: "SamuraiDefenderRangeNPC", level: "6" },
    { id: 836, name: "SamuraiDefenderRangeNPC", level: "7" },
    { id: 837, name: "SamuraiDefenderRangeNPC", level: "8" },
    { id: 838, name: "SamuraiDefenderRangeNPC", level: "9" },
    { id: 839, name: "SamuraiDefenderRangeNPC", level: "10" },
    { id: 860, name: "SamuraiAttackerMeleeNPC", level: "1" },
    { id: 861, name: "SamuraiAttackerMeleeNPC", level: "2" },
    { id: 862, name: "SamuraiAttackerMeleeNPC", level: "3" },
    { id: 863, name: "SamuraiAttackerMeleeNPC", level: "4" },
    { id: 864, name: "SamuraiAttackerMeleeNPC", level: "5" },
    { id: 865, name: "SamuraiAttackerMeleeNPC", level: "6" },
    { id: 866, name: "SamuraiAttackerMeleeNPC", level: "7" },
    { id: 867, name: "SamuraiAttackerMeleeNPC", level: "8" },
    { id: 868, name: "SamuraiAttackerMeleeNPC", level: "9" },
    { id: 869, name: "SamuraiAttackerMeleeNPC", level: "10" },
    { id: 870, name: "SamuraiAttackerRangeNPC", level: "1" },
    { id: 871, name: "SamuraiAttackerRangeNPC", level: "2" },
    { id: 872, name: "SamuraiAttackerRangeNPC", level: "3" },
    { id: 873, name: "SamuraiAttackerRangeNPC", level: "4" },
    { id: 874, name: "SamuraiAttackerRangeNPC", level: "5" },
    { id: 875, name: "SamuraiAttackerRangeNPC", level: "6" },
    { id: 876, name: "SamuraiAttackerRangeNPC", level: "7" },
    { id: 877, name: "SamuraiAttackerRangeNPC", level: "8" },
    { id: 878, name: "SamuraiAttackerRangeNPC", level: "9" },
    { id: 879, name: "SamuraiAttackerRangeNPC", level: "10" },
    { id: 900, name: "NomadDefenderMeleeNPC", level: "1" },
    { id: 901, name: "NomadDefenderMeleeNPC", level: "2" },
    { id: 902, name: "NomadDefenderMeleeNPC", level: "3" },
    { id: 903, name: "NomadDefenderMeleeNPC", level: "4" },
    { id: 904, name: "NomadDefenderMeleeNPC", level: "5" },
    { id: 905, name: "NomadDefenderMeleeNPC", level: "6" },
    { id: 906, name: "NomadDefenderMeleeNPC", level: "7" },
    { id: 907, name: "NomadDefenderMeleeNPC", level: "8" },
    { id: 908, name: "NomadDefenderMeleeNPC", level: "9" },
    { id: 909, name: "NomadDefenderMeleeNPC", level: "10" },
    { id: 910, name: "NomadDefenderRangeNPC", level: "1" },
    { id: 911, name: "NomadDefenderRangeNPC", level: "2" },
    { id: 912, name: "NomadDefenderRangeNPC", level: "3" },
    { id: 913, name: "NomadDefenderRangeNPC", level: "4" },
    { id: 914, name: "NomadDefenderRangeNPC", level: "5" },
    { id: 915, name: "NomadDefenderRangeNPC", level: "6" },
    { id: 916, name: "NomadDefenderRangeNPC", level: "7" },
    { id: 917, name: "NomadDefenderRangeNPC", level: "8" },
    { id: 918, name: "NomadDefenderRangeNPC", level: "9" },
    { id: 919, name: "NomadDefenderRangeNPC", level: "10" },
    { id: 940, name: "NomadAttackerMeleeNPC", level: "1" },
    { id: 941, name: "NomadAttackerMeleeNPC", level: "2" },
    { id: 942, name: "NomadAttackerMeleeNPC", level: "3" },
    { id: 943, name: "NomadAttackerMeleeNPC", level: "4" },
    { id: 944, name: "NomadAttackerMeleeNPC", level: "5" },
    { id: 945, name: "NomadAttackerMeleeNPC", level: "6" },
    { id: 946, name: "NomadAttackerMeleeNPC", level: "7" },
    { id: 947, name: "NomadAttackerMeleeNPC", level: "8" },
    { id: 948, name: "NomadAttackerMeleeNPC", level: "9" },
    { id: 949, name: "NomadAttackerMeleeNPC", level: "10" },
    { id: 950, name: "NomadAttackerRangeNPC", level: "1" },
    { id: 951, name: "NomadAttackerRangeNPC", level: "2" },
    { id: 952, name: "NomadAttackerRangeNPC", level: "3" },
    { id: 953, name: "NomadAttackerRangeNPC", level: "4" },
    { id: 954, name: "NomadAttackerRangeNPC", level: "5" },
    { id: 955, name: "NomadAttackerRangeNPC", level: "6" },
    { id: 956, name: "NomadAttackerRangeNPC", level: "7" },
    { id: 957, name: "NomadAttackerRangeNPC", level: "8" },
    { id: 958, name: "NomadAttackerRangeNPC", level: "9" },
    { id: 959, name: "NomadAttackerRangeNPC", level: "10" },
    { id: 960, name: "EliteSpringAttackerMelee" },
    { id: 961, name: "EliteSpringAttackerRange" },
    { id: 962, name: "Renegadepiratemelee" },
    { id: 963, name: "Renegadepiraterange" },
    { id: 409, name: "EliteRankrewardmeleeUSA" },
    { id: 410, name: "EliteRankrewardrangeUSA" },
    { id: 472, name: "MeadShieldMaiden", level: "10" },
    { id: 473, name: "MeadRanger", level: "10" },
    { id: 477, name: "MeadShieldMaiden", level: "10" },
    { id: 478, name: "MeadRanger", level: "10" },
    { id: 670, name: "Axeviking" },
    { id: 671, name: "Bowviking" },
    { id: 659, name: "PrinceNoob" },
];

module.exports = soldiers;