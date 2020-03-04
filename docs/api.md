# API



[🔙 _Home_](./index.md)



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

Get `unitless` value (trim units)


##### Parameters

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `value` | --- | `Size` | --- |

##### Returns

`Number` - trimmed value

##### Examples

```scss
microbe-strip-units(10px) //  10
microbe-strip-units(20rem) // 20
microbe-strip-units(5vw) //   5
```

---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


### `microbe-em()`

Convert a pixel value to the `em` value


##### Parameters

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `value` | pixel value, units are optional | `Number` | --- |
| `base` | base value for calculations | `Number` | `16` |

##### Returns

`Number`

##### Examples

```scss
microbe-em(16) // 1em
microbe-em(24px) // 1.5em
microbe-em(20, 20) // 1em
microbe-em(24, 32) // .75em
```

---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


### `microbe-rem()`

Convert a pixel value to the `rem` value


##### Parameters

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `value` | pixel value, units are optional | `Number` | --- |
| `base` | base value for calculations | `Number` | `16` |

##### Returns

`Number`

##### Examples

```scss
microbe-rem(16) // 1rem
microbe-rem(4px) // 0.25rem
microbe-rem(20, 20) // 1rem
microbe-rem(40, 20px) // 2rem
```

---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


## Mixins

### `microbe-absolute-center`



##### Parameters

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `$width` | --- | `Size` | --- |
| `$height` | --- | `Size` | `$width` |
| `$set-absolute` | --- | `Bool` | `true` |

##### Examples

```scss
@include microbe-absolute-cube(3rem)
// position: absolute;
// top: 50%;
// left: 50%;
// width: 3rem;
// height: 3rem;
// margin: -1.5rem 0 0 -1.5rem;
@include microbe-absolute-cube(4rem, 60px)
// position: absolute;
// top: 50%;
// left: 50%;
// width: 4rem;
// height: 60px;
// margin: -30px 0 0 -2rem;
```

---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


### `microbe-absolute-gap`



##### Parameters

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `$x` | top & bottom | `Number` | --- |
| `$y` | left & right | `Number` | --- |
| `$set-absolute` | --- | `Bool` | `true` |

##### Examples

```scss
@include microbe-absolute-cube(10px)
// position: absolute;
// top: 10px;
// right: 10px;
// bottom: 10px;
// left: 10px;
```

```scss
@include microbe-absolute-cube(10px, 20px)
// position: absolute;
// top: 10px;
// right: 20px;
// bottom: 10px;
// left: 20px;
```

---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


### `microbe-absolute-square`



##### Parameters

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `$percent` | --- | `Number` | --- |
| `$set-absolute` | --- | `Bool` | `true` |

##### Examples

```scss
@include microbe-absolute-square(54%)
// position: absolute;
// top: 27%;
// left: 27%;
// width: 54%;
// height: 54%;
```

```scss
@include microbe-absolute-square(120%)
// position: absolute;
// top: -10%;
// left: -10%;
// width: 120%;
// height: 120%;
```

---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


### `microbe-flex-cell-width`



##### Parameters

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `$width` | cell size | `Size` | --- |

---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


### `microbe-media`

Generate `@media` queries with content


##### Parameters

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `$breakpoint` | number / print / landscape / portrait | `Number / Keyword` | --- |
| `$direction` | min / max | `Keyword` | `min` |
| `$dimension` | width / height / device-width / device-height | `Keyword` | `width` |

##### Examples

```scss
.example-block {
    font-size: 12px;
    @include microbe-media(1024px) {
        font-size: 16px;
    }
    @include microbe-media(1024px, max) {
        color: red;
    }
    @include microbe-media(640px, min, height) {
        font-weight: bold;
    }
    @include microbe-media(landscape) {
        background: #eee;
    }
    @include microbe-media(portrait) {
        @include microbe-media(520px, max) {
            background-color: red;
        }
    }
    @include microbe-media(print) {
        background: none !important;
    }
}
```

```css
/* render result */
.example-block {
    font-size: 12px;
}
@media only screen and (min-width: 1024px) {
    .example-block {
        font-size: 16px;
    }
}
@media only screen and (max-width: 1023px) {
    .example-block {
        color: red;
    }
}
@media only screen and (min-height: 640px) {
    .example-block {
        font-weight: bold;
    }
}
@media (orientation: landscape) {
    .example-block {
        background: #eee;
    }
}
@media only screen and (orientation: portrait) and (max-width: 519px) {
    .example-block {
        background-color: red;
    }
}
@media print {
    .example-block {
        background: none !important;
    }
}
```

---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


## Variables

### Spaces

Available list of spaces:

| Name | Description | Value | Scope |
| --- | --- | --- | --- |
| `$microbe-space-xxs` | Space size _xxs_ (xx-small) | `microbe-rem(2)` | default |
| `$microbe-space-xs` | Space size _xs_ (x-small) | `microbe-rem(4)` | default |
| `$microbe-space-sm` | Space size _sm_ (small) | `microbe-rem(8)` | default |
| `$microbe-space-md` | Space size _md_ (medium) | `microbe-rem(12)` | default |
| `$microbe-space-df` | Space size _df_ (default) | `microbe-rem(16)` | default |
| `$microbe-space-lg` | Space size _lg_ (large) | `microbe-rem(24)` | default |
| `$microbe-space-xl` | Space size _xl_ (x-large) | `microbe-rem(32)` | default |
| `$microbe-space-xxl` | Space size _xxl_ (xx-large) | `microbe-rem(48)` | default |
| `$microbe-space-hg` | Space size _hg_ (huge) | `microbe-rem(80)` | default |

#### Spaces map

All spaces, that not equal to `false` - are gathered to one map variable `$microbe-spaces-map`. This variable used as iterator on process of generations css code. 

| Name | Description | Value | Scope |
| --- | --- | --- | --- |
| `$microbe-spaces-map` | Map with filtered space variables | `_microbe-generate-vars-map(spaces)` | private |


---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


### Breakpoints

Available list of spaces:

| Name | Description | Value | Scope |
| --- | --- | --- | --- |
| `$microbe-breakpoint-xxs` | Breakpoint screen _xxs_ (xx-small) | `375px` | default |
| `$microbe-breakpoint-xs` | Breakpoint screen _xs_ (x-small) | `480px` | default |
| `$microbe-breakpoint-sm` | Breakpoint screen _sm_ (small) | `568px` | default |
| `$microbe-breakpoint-md` | Breakpoint screen _md_ (medium) | `768px` | default |
| `$microbe-breakpoint-df` | Breakpoint screen _df_ (default) | `1024px` | default |
| `$microbe-breakpoint-lg` | Breakpoint screen _lg_ (large) | `1280px` | default |
| `$microbe-breakpoint-xl` | Breakpoint screen _xl_ (x-large) | `1420px` | default |
| `$microbe-breakpoint-xxl` | Breakpoint screen _xxl_ (xx-large). Expected value: `1660px` | `NULL` | default |
| `$microbe-breakpoint-hd` | Breakpoint screen _hd_ (full-hd). Expected value: `1980px` | `NULL` | default |
| `$microbe-breakpoint-2k` | Breakpoint screen _2k_. Expected value: `2048px` | `NULL` | default |

#### Breakpoints map

All spaces, that not equal to `false` - are gathered to one map variable `$microbe-breakpoints-map`. This variable used as iterator on process of generations css code. 

| Name | Description | Value | Scope |
| --- | --- | --- | --- |
| `$microbe-breakpoints-map` | Map with filtered breakpoint variables | `_microbe-generate-vars-map(breakpoints)` | private |


---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


### IE Fallback

__`$microbe-ie-fallback`__ | default value: `false`

Use degradation for IE support
- CSS Custom properties will be transformed to CSS values



---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


## Components

### Module Grid

```scss
// import component directly
@import "~microbe-ui/components/module-grid";
```

| Name | Description | Value | Scope |
| --- | --- | --- | --- |
| `$microbe-module-grid-columns-count` | Columns count | `12` | default |
| `$microbe-module-cell-positions-count` | Cell positions count | `12` | default |
| `$microbe-module-cell-width-custom-property-name` | CSS Custom property name for cell width value | `--microbe-module-cell-width` | default |


---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


### Owl

```scss
// import component directly
@import "~microbe-ui/components/owl";
```

| Name | Description | Value | Scope |
| --- | --- | --- | --- |
| `$microbe-owl-size-custom-property-name` | CSS Custom property name for "owl" module size | `--microbe-owl-size` | default |

Read more about "Lobotomized Owls":  
https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/


---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---


### Spacer

```scss
// import component directly
@import "~microbe-ui/components/spacer";
```

| Name | Description | Value | Scope |
| --- | --- | --- | --- |
| `$microbe-spacer-size-custom-property-name` | CSS Custom property name for spacer size | `--microbe-spacer-size` | default |


---

[🔙 _Home_](./index.md) | [🔝 _Table of content_](#api)

---

