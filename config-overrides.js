module.exports = function override(config) {
    config.module.rules = config.module.rules.map(rule => {
        if (rule.enforce === "pre") {
            return { ...rule, exclude: /node_modules/ };
        }
        return rule;
    });

    return config;
};
