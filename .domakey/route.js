const help = `
Adds a new 'route' component.
This will create the new route folder (/app/containers/MyrouteName) and the routes files.
The new route is a Stack Screen as default.

\`npm run create route MyRouteName\` or \`yarn run create route MyRouteName\`

`;

module.exports = async ({ cliArgs, cliFlags, makey, templage }) => {
    if (cliFlags['h'] || !cliArgs[0]) {
        makey.print(help);
        return;
    }
    const routeName = `${cliArgs[0].substr(0, 1).toUpperCase()}${cliArgs[0].substr(1, cliArgs[0].length)}`;

    if (!routeName) throw Error('Please provide a screen name');
    const compTypeRaw = makey.toLowerCaseFirst(
        cliArgs[1] || (await makey.ask('What is the type of the screen? (s)tack, (m)odal, (t)ab or (d)rawer:')) || 's',
    );
    const compType = {
        s: 'stack',
        m: 'modal',
        t: 'tab',
        d: 'drawer',
    }[compTypeRaw[0].toLowerCase()];

    const containerName = `${routeName}Container`;
    const screenName = `${routeName}Screen`;
    const styleName = routeName.replace(/([A-Z])/g, '-$1').replace('-', '').toLowerCase();

    const containerBody = `import React from 'react';
import { NavigationProp } from '@react-navigation/core';
import ${screenName} from './${screenName}';

type Props = {
    navigation: NavigationProp<any,any>
}

const ${containerName}: React.FC<any> = ({ navigation }: Props) => {
    return <${screenName} />;
}

export default ${containerName};
`;

    const screenBody = `import React from 'react';
import { View } from 'react-native';
import Typography from '~/components/base/Typography/Typography';
import styles from './${styleName}Styles';

type Props = {
    // set props
}

const ${screenName}: React.FC<any> = ({}: Props) => {
    return (
        <View style={styles.container}>
            <Typography>${routeName}</Typography>
        </View>
    );
}

export default ${screenName};
`;

    const styleBody = `import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default styles;
`;

    makey.createFile(
        `./app/routes/${routeName}/${containerName}.tsx`,
        containerBody,
    );

    makey.createFile(
        `./app/routes/${routeName}/${screenName}.tsx`,
        screenBody,
    );

    makey.createFile(
        `./app/routes/${routeName}/${styleName}Styles.ts`,
        styleBody,
    );

    makey.createFile(
        `./app/routes/${routeName}/index.ts`,
        `export { default } from './${containerName}';\n`
    )

    const matchScreenGenerator = /stack|modal/.test(compType)
        ? `// ${compType.toUpperCase()} SCREEN ENTRY CODE GENERATOR INDICATOR DO NOT DELETE`
        : `{/** ${compType.toUpperCase()} SCREEN ENTRY CODE GENERATOR INDICATOR DO NOT DELETE */}`;
    let importFile = 'Screens';

    if (/stack|modal/.test(compType)) {
        await makey.editFile(`app/routes/Screens.tsx`, (existingBody) =>
            existingBody.replace(
                matchScreenGenerator,
                `\n    { name: '${routeName}', component: ${routeName} }, ${matchScreenGenerator}`
            ),
        );
    } else if (compType === 'tab') {
        importFile = 'MainTabNavigation';

        await makey.editFile(`app/routes/MainTabNavigation.tsx`, (existingBody) =>
            existingBody.replace(
                matchScreenGenerator,
                `<Tab.Screen name='${routeName}' component={${routeName}} />\n            ${matchScreenGenerator}`
            ),
        );
    } else if (compType === 'drawer') {
        importFile = 'DrawerNavigation';

        await makey.editFile(`app/routes/DrawerNavigation.tsx`, (existingBody) =>
            existingBody.replace(
                matchScreenGenerator,
                `<Drawer.Screen name='${routeName}' component={${routeName}} />\n            ${matchScreenGenerator}`
            ),
        );
    }

    await makey.editFile(`app/routes/${importFile}.tsx`, (existingBody) =>
        existingBody.replace(
            `// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE`,
            `import ${routeName} from './${routeName}';\n// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE`
        ),
    );

    makey.print(`====== Successfully created ${compType} route ${routeName} ======`);
}
