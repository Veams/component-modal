<p align='right'>
<a href="https://badge.fury.io/js/@veams/component-modal"><img src="https://badge.fury.io/js/@veams/component-modal.svg" alt="npm version" height="18"></a>
    <a href='https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge'><img src='https://badges.gitter.im/Sebastian-Fitzner/Veams.svg' alt='Gitter Chat' /></a>
</p>

# Modal (`component`)

## Description

This represents a modal dialog module. The modal module is predefined with an inner template.
It comes with 3 variations of content: Simple, Complex and Video.

-----------

## Requirements
- [@veams/core](https://github.com/Veams/core) - Veams Core Framework.
- [@veams/query](https://github.com/Veams/query) or `jquery` - Veams Query or jQuery.
- [@veams/component](https://github.com/Veams/component) - Veams Component.

-----------

## Installation 

### Installation with Veams

``` bash
veams install component modal
 ```
 ``` bash
veams -i c modal
 ```
 
-----------

## Fields

### `c-modal`

#### Settings

| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| settings.modalContextClass | String | `default` | - _Context class of component._ |
| settings.modalClasses | String | | - _Modifier classes for component._ |
| settings.modalJsOptions | Object | | - _JavaScript options which gets stringified._ |
| content.describedBy | String | | - _Aria attribute for detailed description._ |

-------------

## JavaScript Options

The module gives you the possibility to override default JS options:

| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| closeBtn | String | `'['[data-js-item="modal-close-btn"]']'` | _Define the close button for the  modal._ |
| backdrop | String | `'['[data-js-item="modal-backdrop"]']'` | _Define the backdrop for modal._ |
| classes | Object | `{ hidden: 'is-hidden', open: 'is-open', visible: 'is-modal-visible' }` | _Define the modifiers for modal._ |

------------

## Sass Options

There are multiple global variables which you can change: 

| Parameter | Default Value | Description |
|:--- | :---: | :--- |
| $modal-z | `100 !default` | _Define the z-index of the backdrop._|
| $modal-bg-color | `#000 !default` | _Background color of backdrop._|
| $modal-content-color | `#fff !default` | _Background color of modal content._|
| $modal-font-size: | `16px !default` | _Modal Font size._|
| $modal-line-height: | `1.4 !default` | _Modal Font Line Height._|
| $modal-font-family: | `Arial, sans-serif !default` | _Modal Font  Family._|


### Modifier Classes

You can add the following modifiers to `modal`:

| Class | Description |
|:--- | :--- |
| is-modal-visible | _Define the axis overflow of the modal_ |
| is-hidden | _Hide the modal_ |
| is-open | _Show the modal_ |

