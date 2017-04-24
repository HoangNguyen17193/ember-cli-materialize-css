# ember-cli-materialize-css
This is [an example](http://www.example.com/) inline link.
Ember addon for using [Materialize](http://materializecss.com/) css library in Ember applications

## Main Features

* Wrapper all materialize component to ember component, using this scope for each component instead of using global Jquery access DOM.
* Import materialize framework into your application.

## Installation

````
$ ember install ember-cli-materialize-css
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


