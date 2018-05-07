
# Modal (`component`)

## Description

This represents a modal dialog module. The modal module is predefined with a inner template.
It comes with 3 variations of content: Simple, Complex and Video.

-----------

## Requirements
- `Veams#5.0.0` - Replace this requirement with the libs you need for this type.

-----------

## Installation

### Installation with Veams from local machine

`veams install bp absolute/filepath/to/modal`

### Installation with npm or Veams

When published on npm you can install the component by executing:

1. `veams install veams-component modal`
2. `bower install veams-component-modal --save`

-----------

## Fields

### `c-modal`

#### Settings
- settings.modalClasses {`String`} - _Modifier classes for component._
- settings.modalContextClass {`String`} [default] - _Context class of component._
- settings.modalJsOptions {`Object`} - _JavaScript options which gets stringified._
- content.describedBy {`String`} - [optional] _Aria attribute for detailed description._

-------------

## JavaScript Options

The module gives you the possibility to override default JS options:

- closeBtn {`String`} ['[data-js-item="modal-close-btn"]'] - _Define the close button for the  modal._
- backdrop {`String`} ['[data-js-item="modal-backdrop"]'] - _Define the backdrop for modal._
- classes {`Object`} [{ hidden: 'is-hidden', open: 'is-open', visible: 'is-modal-visible' }] - _Define the modifiers for modal._

------------

## SASS

### Variables

- $modal-z [100 !default] - _Define the z-index of the backdrop._
- $modal-bg-color [#000 !default] - _Background color of backdrop._
- $modal-content-color [#fff !default] - _Background color of modal content._
- $modal-font-size: [16px !default]; - _Modal Font size._
- $modal-line-height: [1.4 !default]; - _Modal Font Line Height._
- $modal-font-family: [Arial, sans-serif !default]; - _Modal Font  Family._


### Modifier Classes

You can add the following modifiers to `modal`:
- is-modal-visible - _Define the axis overflow of the modal_
- is-hidden - _Hide the modal_
- is-open - _Show the modal_

