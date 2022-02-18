
const help = `Adds a new React Native reusable component.

This will create the new folder (/app/components/MyComponentName).

\`npm run create component MyComponentName\` or \`yarn run create component MyComponentName\`
`;

module.exports = async ({ cliArgs, cliFlags, makey }) => {
    if (cliFlags['h']) {
        makey.print(help);
        return;
    }

    const componentName = makey.toLowerCaseFirst(
        cliArgs[0] || (await makey.ask('Name of your component:'))
    );
    if (!componentName) throw Error("Please provide a component name");
    const compTypeRaw = makey.toLowerCaseFirst(
        cliArgs[1] || (await makey.ask('What is the type of the component? (m)odules or (b)ase:')) || 'm',
    );
    const compType = {
        m: 'modules',
        b: 'base'
    }[compTypeRaw[0].toLowerCase()];
    const smartComponent = cliFlags['y']
        ? true
        : cliFlags['container'] || (await makey.askYN('Create a (smart) container for the Comp?'));
    const ComponentName = makey.toUpperCaseFirst(componentName);
    const styleName = ComponentName.replace(/([A-Z])/g, '-$1').replace('-', '').toLowerCase();

    const componentBody = `import React from 'react';
import { View } from 'react-native';
import Typography from '~/components/base/Typography/Typography';
import styles from './${componentName}Styles';

type Props = {
    // TODO add props
};

const ${ComponentName}: React.FC<Props> = ({}) => {
    return (
        <View style={styles.container}>
            <Typography>${ComponentName}</Typography>
        </View>
    );
}

export default ${ComponentName};
`;

    const containerBody = `import React from 'react';
import ${ComponentName} from './${ComponentName}';

type Props = {
    // TODO add props
};

const ${ComponentName}Container: React.FC<Props> = ({ }) => {
    return (
        <${ComponentName} />
    );
};

export default ${ComponentName}Container;
`;

    const styleBody = `import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default styles;
`;

    const storyBody = `import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '~/components/base/CenterView';
import ${ComponentName} from '.';

// Todo add Stories
storiesOf('${ComponentName}', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>);
`;

    makey.createFile(
        `./app/components/${compType}/${ComponentName}/${ComponentName}.tsx`,
        componentBody,
    );

    if (smartComponent) {
        makey.createFile(
            `./app/components/${compType}/${ComponentName}/${ComponentName}Container.tsx`,
            containerBody,
        );
    }

    makey.createFile(
        `./app/components/${compType}/${ComponentName}/${ComponentName}.stories.tsx`,
        storyBody
    );

    makey.createFile(
        `./app/components/${compType}/${ComponentName}/${componentName}Styles.ts`,
        styleBody,
    );

    makey.createFile(
        `./app/components/${compType}/${ComponentName}/index.ts`,
        `export { default } from './${ComponentName}${smartComponent ? 'Container' : ''}';\n`
    );

    await makey.editFile(`./app/components/${compType}/index.ts`, (existingBody) =>
        existingBody.replace(
            `// STORY IMPORT CODE GENERATOR INDICATOR DO NOT DELETE`,
            `import './${ComponentName}/${ComponentName}.stories';\n// STORY IMPORT CODE GENERATOR INDICATOR DO NOT DELETE`
        ),
    );
}
