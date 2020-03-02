![microbe-ui](https://raw.githubusercontent.com/microbe-ui/microbe-ui/master/src/docs/assets/microbe-ui-name-lib.png)

---

## Table of content

1. [Functions](#functions)
    1. [microbe-strip-units](#microbe-strip-units)
    1. [microbe-em](#microbe-em)
    1. [microbe-rem](#microbe-rem)
1. [Mixins](#mixins)
    1. [microbe-absolute-center](#microbe-absolute-center)
    1. [microbe-absolute-gap](#microbe-absolute-gap)
    1. [microbe-absolute-square](#microbe-absolute-square)
    1. [microbe-flex-cell-width](#microbe-flex-cell-width)
    1. [microbe-media](#microbe-media)
1. [Variables](#variables)
    1. [Spaces](#spaces)
    1. [Breakpoints](#breakpoints)
    1. [Module Grid](#module-grid)

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

### `microbe-em()`

---

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

### `microbe-rem()`

---

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

### `microbe-flex-cell-width`



##### Parameters

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `$width` | cell size | `Size` | --- |

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

## Variables

### Spaces

| Name | Description | Value | Scope |
| --- | --- | --- | --- |
| `$microbe-space-xxs` | space size _xxs_ (xx-small) | `microbe-rem(2)` | default |
| `$microbe-space-xs` | space size _xs_ (x-small) | `microbe-rem(4)` | default |
| `$microbe-space-sm` | space size _sm_ (small) | `microbe-rem(8)` | default |
| `$microbe-space-md` | space size _md_ (medium) | `microbe-rem(12)` | default |
| `$microbe-space-df` | space size _df_ (default) | `microbe-rem(16)` | default |
| `$microbe-space-lg` | space size _lg_ (large) | `microbe-rem(24)` | default |
| `$microbe-space-xlg` | space size _xlg_ (x-large) | `microbe-rem(32)` | default |
| `$microbe-space-xxl` | space size _xxl_ (xx-large) | `microbe-rem(48)` | default |
| `$microbe-space-hg` | space size _hg_ (huge) | `microbe-rem(80)` | default |

### Breakpoints

| Name | Description | Value | Scope |
| --- | --- | --- | --- |
| `$microbe-breakpoint-xxs` | breakpoint screen _xxs_ (xx-small) | `375px` | default |
| `$microbe-breakpoint-xs` | breakpoint screen _xs_ (x-small) | `480px` | default |
| `$microbe-breakpoint-sm` | breakpoint screen _sm_ (small) | `568px` | default |
| `$microbe-breakpoint-md` | breakpoint screen _md_ (medium) | `768px` | default |
| `$microbe-breakpoint-df` | breakpoint screen _df_ (default) | `1024px` | default |
| `$microbe-breakpoint-lg` | breakpoint screen _lg_ (large) | `1280px` | default |
| `$microbe-breakpoint-xl` | breakpoint screen _xl_ (x-large) | `1420px` | default |
| `$microbe-breakpoint-xxl` | breakpoint screen _xxl_ (xx-large) | `1660px` | default |
| `$microbe-breakpoint-hd` | breakpoint screen _hd_ (full-hd) | `1960px` | default |
| `$microbe-breakpoint-2k` | breakpoint screen _2k_ | `null` | default |

---

---

### Module Grid

| Name | Description | Value | Scope |
| --- | --- | --- | --- |
| `$microbe-module-grid-columns-count` | columns count | `12` | default |
| `$microbe-module-cell-positions-count` | cell positions count | `12` | default |
