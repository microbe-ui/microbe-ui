# Getting started

`insertNavHome`

## Table of content

1. [Install via npm](#install-via-npm)
1. [Import](#import)
    - [Core](#core)
    - [Components for your project](#components-for-your-project)
    - [Redefinition of default values](#redefinition-of-default-values)

---

## Install via npm

After setting up your Sass (SCSS) workflow, install `microbe-ui` via npm

```bash
$ npm i microbe-ui
```

> We don't distribute CSS version!  
> Power of `microbe-ui` in its full customization via SCSS variables.  
> _Look at [API Section](./api.md) to see it_  

`insertNavDivider=getting-started`

## Import

### Core

First at all, you need to import `microbe-ui` core:

```scss
@import "~microbe-ui/core";
```

### Components for your project

Than you can import desired `microbe-ui` components, e.g.:

```scss
@import "~microbe-ui/core";
// add "Module grid" and "Spacer" components
@import "~microbe-ui/components/module-grid";
@import "~microbe-ui/components/spacer";
```

### Redefinition of default values

All SCSS `microbe-ui` variables has `!default` flag. You can easily change default values for [all variables in our API](./api.md#variables). This opportunity allows you to customize `microbe-ui` for your current project.

> _**Note!** You must re-define variables before import components_

_Example:_

```scss
@import "~microbe-ui/core";

// re-define before import components
$microbe-breakpoint-sm: 40rem; // change "md" breakpoint value (default value: `insertVariableValue=core/defaults#microbe-breakpoint-sm`) 
$microbe-breakpoint-md: 800px; // change "md" breakpoint value (default value: `insertVariableValue=core/defaults#microbe-breakpoint-md`)
$microbe-space-xxl: microbe-rem(60) // change "xxl" space (default value: `insertVariableValue=core/defaults#microbe-space-xxl`)

// add "Module grid" and "Spacer" components
@import "~microbe-ui/components/module-grid";
@import "~microbe-ui/components/spacer";
```

`insertNavDivider=getting-started`
