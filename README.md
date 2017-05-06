# ember-cli-materialize-css
Ember Addon for using [Materialize](http://materializecss.com/) css library (based on material design) in Ember applications

## Main Features

* convert all materialize components to ember components, using this scope for each component instead of using global Jquery access DOM.
* Import materialize framework into your application.
* Materialize Ember Components are easy to extend and custom.

## Installation

````
$ ember install ember-cli-materialize-css
````
import google icons to index.html file

````
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
````

## Example

#### Text Field

````
      {{em-text-field
        value=identification
        label='Username'
        classes='col s12 primary-input'
        type='text'
        icon='account_circle'}}

      {{em-text-field
        value=password
        label='Password'
        classes='col s12 primary-input'
        type='password'
        icon='lock'}}
````

#### Check Box

````
      {{em-check-box
        checked=false
        label='Remember'
        wrapperClass='primary-checkbox'
        disabled=true}}
````

#### Select Box
````
  options: [
    { key: 1, name: 'option 1' },
    { key: 2, name: 'option 2' },
    { key: 3, name: 'option 3' },
    { key: 4, name: 'option 4' },
    { key: 5, name: 'option 5' }
  ]
  // default value for multiple select
  value: [1, 3, 5]

      {{em-select-box
        label='multiple select box'
        options=options
        multipleSelect=true
        value=value
        disabled=false}}

   // default value for single select
   value: 2
      {{em-select-box
        label='single select box'
        options=options
        multipleSelect=false
        value=value
        disabled=false}}

````
When we select new options, the value will be changed.

#### Buttons
````
      {{em-button
        text='my button'
        clickAction='test'
        disabled = false
        class='custom-button-class'
        icon='send'
        iconPosition='right'
        iconClass='custom-icon-class'
        flat=true}}

    // floating button

       {{em-floating-button
         buttonClass='btn-large custom-button-class'
         clickAction='test'
         disabled = false
         icon='send'
         iconClass='custom-icon-class'}}
````
#### Loader

````
    // Indeterminate loader
       {{em-indeterminate-loader
         backgroundClass='red'
         statusClass='blue'}}

    // Determinate loader
       {{em-determinate-loader
         backgroundClass='red'
         statusClass='blue'
         percent=50}}
    // Customize background color, background size, status size, status color,...
    // via backgroundClass and statusClass

    // Circular loader
       {{em-circular-loader
         size='100'
         color='blue'}}
````


