declare module "react-scale-text";

interface Character {
    name: string;
    title: string;
    vision: string;
    weapon: string;
    nation: string;
    affiliation: string;
    rarity: number;
    constellation: string;
    birthday: string;
    description: string;
    skillTalents: SkillTalent[];
    passiveTalents: Constellation[];
    constellations: Constellation[];
    vision_key: string;
    weapon_type: string;
}

interface Constellation {
    name: string;
    unlock: string;
    description: string;
    level?: number;
}

interface SkillTalent {
    name: string;
    unlock: string;
    description: string;
    upgrades?: Upgrade[];
    type: string;
}

interface Upgrade {
    name: string;
    value: string;
}
