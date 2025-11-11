import { rules as relicRules } from "eslint-plugin-relics"
import { recommendedRules } from "./configs/recommended-rules";

export const configs = {
    recommended: {
        plugins: {
            relics: {
                rules: relicRules,
            },
        },
        rules: recommendedRules,
    },
}

export default { 
    configs,
};
