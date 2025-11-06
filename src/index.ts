import { rules as relicRules } from "eslint-plugin-relics"

export const configs = {
    recommended: {
        plugins: {
            relics: {
                relicRules,
            },
        },
        rules: {
            "relics/enforce-foo-bar": "error",
            "relics/prefer-explicit-property-checks": "error",
            "relics/prefer-loose-equality": "error",
        },
    },
    "recommended-legacy": {
        plugins: ["relics"],
        rules: {
            "relics/enforce-foo-bar": "error",
            "relics/prefer-explicit-property-checks": "error",
            "relics/prefer-loose-equality": "error",
        },
    },
}

export default {
    recommended: configs.recommended,
    "recommended-legacy": configs["recommended-legacy"]
};