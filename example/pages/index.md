# ${state.title}

${state.description}

<GitBadges>@magic/cases</GitBadges>

### install

be in a nodejs project

`npm i --save-dev @magic/cases`

### import

`import cases from '@magic/cases'`

### usage

@magic/cases supports 4 case types: snake_case, kebab-case, camelCase, and PascalCase

#### #usage-camel camelCase

```
import cases from '@magic/cases'

const camelCased = cases.camel('some-casedString')

// camelCased === 'someCasedString'
```

#### #usage-kebab kebab-case

```
import cases from '@magic/cases'

const kebabCased = cases.kebab('some-casedString')

// kebabCased === 'some-cased-string'
```

#### #usage-pascal PascalCase

```
import cases from '@magic/cases'

const pascalCased = cases.pascal('some-casedString')

// pascalCased === 'SomeCasedString'
```

#### #usage-snake snake_case

```
import cases from '@magic/cases'

const snakeCased = cases.snake('some-casedString')

// snakeCased === 'some_cased_string'
```

## source

the source for this page is in the
[example directory](https://github.com/magic/cases/tree/master/example)
and gets built and published to github using [@magic/core](https://github.com/magic/core)
