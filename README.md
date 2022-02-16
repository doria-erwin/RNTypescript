# RNTypescript

## Available Scripts

Install packages
### `npm install` or `yarn install`

In the project directory, you can run:
### `yarn android` or `react-native run-android`
### `yarn ios` or `react-native run-ios`

Storybook
## change `IS_STORYBOOK` to `true` and restart

Storybook Server
### `npm storybook` or `yarn storybook`

## Code-generation

The project comes with code creation to speed things up.

**Routes**

`npm run create route MyNewRoute` or `yarn run create route MyNewRoute`

This will create 
```
├── routes
|   ├── MyNewRoute (New)
    |   ├── index.ts
    |   ├── MyNewRouteContainer.tsx
    |   ├── MyNewRouteScreen.tsx
    |   ├── myNewRouteStyles.ts
└── ... other route containers
```

**Components**

`npm run create component MyNewComponent` or `yarn run create component MyNewComponent`

This will create 
```
├── components
|   ├── MyNewComponent (New)
    |   ├── index.ts
    |   ├── MyNewComponent.tsx
    |   ├── MyNewComponent.stories.tsx
    |   ├── myNewComponentStyles.ts
└── ... other components
```
