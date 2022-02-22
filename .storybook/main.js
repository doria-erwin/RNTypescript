module.exports = {
  stories: [
    // TODO explore more on this samples
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"

    "../app/components/**/**/*.stories.mdx",
    "../app/components/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  presets: ['@storybook/preset-typescript'],
}