import { rules as relicRules } from "eslint-plugin-relics"

const recommendedLegacy = {
    plugins: ["relics"],
    rules: {
        "relics/enforce-foo-bar": "error",
        "relics/prefer-explicit-property-checks": "error",
        "relics/prefer-loose-equality": "error",
    },
};

export const configs = {
    recommended: {
        plugins: {
            relics: {
                rules: relicRules,
            },
        },
        rules: {
            "relics/enforce-foo-bar": "error",
            "relics/prefer-explicit-property-checks": "error",
            "relics/prefer-loose-equality": "error",
        },
    },
    "recommended-legacy": recommendedLegacy,
};

export default {
    configs,
    "recommended-legacy": recommendedLegacy,
};
