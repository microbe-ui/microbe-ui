# API

`insertNavHome`

## Table of content

1. [Functions](#functions)
    - [microbe-strip-units](#microbe-strip-units)
    - [microbe-em](#microbe-em)
    - [microbe-rem](#microbe-rem)
1. [Mixins](#mixins)
    - [microbe-absolute-center](#microbe-absolute-center)
    - [microbe-absolute-gap](#microbe-absolute-gap)
    - [microbe-absolute-square](#microbe-absolute-square)
    - [microbe-flex-cell-width](#microbe-flex-cell-width)
    - [microbe-media](#microbe-media)
1. [Variables](#variables)
    - [Spaces](#spaces)
    - [Breakpoints](#breakpoints)
    - [IE Fallback](#ie-fallback)
1. [Components](#components)
    - [Module Grid](#module-grid)
    - [Owl](#owl)
    - [Spacer](#module-grid)

---

## Functions

### `microbe-strip-units()`

`insertMixinFn=core/functions#microbe-strip-units`
`insertNavDivider=api`

### `microbe-em()`

`insertMixinFn=core/functions#microbe-em`
`insertNavDivider=api`

### `microbe-rem()`

`insertMixinFn=core/functions#microbe-rem`
`insertNavDivider=api`

## Mixins

### `microbe-absolute-center`

`insertMixinFn=core/mixins#microbe-absolute-center`
`insertNavDivider=api`

### `microbe-absolute-gap`

`insertMixinFn=core/mixins#microbe-absolute-gap`
`insertNavDivider=api`

### `microbe-absolute-square`

`insertMixinFn=core/mixins#microbe-absolute-square`
`insertNavDivider=api`

### `microbe-flex-cell-width`

`insertMixinFn=core/mixins#microbe-flex-cell-width`
`insertNavDivider=api`

### `microbe-media`

`insertMixinFn=core/mixins#microbe-media`
`insertNavDivider=api`

## Variables

### Spaces

Available list of spaces:

`insertVariablesTable`
`insertVariableRow=core/defaults#microbe-space-xxs`
`insertVariableRow=core/defaults#microbe-space-xs`
`insertVariableRow=core/defaults#microbe-space-sm`
`insertVariableRow=core/defaults#microbe-space-md`
`insertVariableRow=core/defaults#microbe-space-df`
`insertVariableRow=core/defaults#microbe-space-lg`
`insertVariableRow=core/defaults#microbe-space-xl`
`insertVariableRow=core/defaults#microbe-space-xxl`
`insertVariableRow=core/defaults#microbe-space-hg`

#### Spaces map

All spaces, that not equal to `false` - are gathered to one map variable `$microbe-spaces-map`. This variable used as iterator on process of generations css code. 

`insertVariablesTable`
`insertVariableRow=core/defaults#microbe-spaces-map`

`insertNavDivider=api`

### Breakpoints

Available list of spaces:

`insertVariablesTable`
`insertVariableRow=core/defaults#microbe-breakpoint-xxs`
`insertVariableRow=core/defaults#microbe-breakpoint-xs`
`insertVariableRow=core/defaults#microbe-breakpoint-sm`
`insertVariableRow=core/defaults#microbe-breakpoint-md`
`insertVariableRow=core/defaults#microbe-breakpoint-df`
`insertVariableRow=core/defaults#microbe-breakpoint-lg`
`insertVariableRow=core/defaults#microbe-breakpoint-xl`
`insertVariableRow=core/defaults#microbe-breakpoint-xxl`
`insertVariableRow=core/defaults#microbe-breakpoint-hd`
`insertVariableRow=core/defaults#microbe-breakpoint-2k`

#### Breakpoints map

All spaces, that not equal to `false` - are gathered to one map variable `$microbe-breakpoints-map`. This variable used as iterator on process of generations css code. 

`insertVariablesTable`
`insertVariableRow=core/defaults#microbe-breakpoints-map`

`insertNavDivider=api`

### IE Fallback

__`$microbe-ie-fallback`__ | default value: `insertVariableValue=core/defaults#microbe-ie-fallback`

`insertVariableDescription=core/defaults#microbe-ie-fallback`

`insertNavDivider=api`

## Components

### Module Grid

`insertVariablesTable`
`insertVariableRow=core/defaults#microbe-module-grid-columns-count`
`insertVariableRow=core/defaults#microbe-module-cell-positions-count`
`insertVariableRow=core/defaults#microbe-module-cell-width-custom-property-name`

`insertNavDivider=api`

### Owl


`insertVariablesTable`
`insertVariableRow=core/defaults#microbe-owl-size-custom-property-name`

Read more about "Lobotomized Owls":  
https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/

`insertNavDivider=api`

### Spacer

`insertVariablesTable`
`insertVariableRow=core/defaults#microbe-spacer-size-custom-property-name`

`insertNavDivider=api`
