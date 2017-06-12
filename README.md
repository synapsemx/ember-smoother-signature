ember-smoother-signature
==============================================================================

[![Ember Observer Score](https://emberobserver.com/badges/ember-smoother-signature.svg)](https://emberobserver.com/addons/ember-smoother-signature) [![npm version](https://badge.fury.io/js/ember-smoother-signature.svg)](https://badge.fury.io/js/ember-smoother-signature) [![Code Climate](https://codeclimate.com/github/synapsemx/ember-smoother-signature/badges/gpa.svg)](https://codeclimate.com/github/synapsemx/ember-smoother-signature) [![Issue Count](https://codeclimate.com/github/synapsemx/ember-smoother-signature/badges/issue_count.svg)](https://codeclimate.com/github/synapsemx/ember-smoother-signature) ![ember-badge](http://embadge.io/v1/badge.svg?start=1.10.0)

This addon is a wrapper for the _**excellent**_ [signature_pad](https://github.com/szimek/signature_pad) library.


### Works great on a desktop...
![Desktop](http://i.imgur.com/Ss41wRX.png)

### ...or on a mobile device!
![Mobile](http://i.imgur.com/MrWFxXs.png)


Installation
------------------------------------------------------------------------------

Install this addon using ember-cli:
```
ember install ember-smoother-signature
```

Usage
------------------------------------------------------------------------------

Use ember-smoother-signature in your template:
```
{{signature-pad	sendAction=command}}
```

>DISCLAIMER: If you look at signature_pad, it has many more options.
>
>We'll incorporate all that soon, but if you have time on your hands then feel free to submit a PR!

Documentation
------------------------------------------------------------------------------

[Information for using signature_pad](https://github.com/szimek/signature_pad#options)

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).


License
------------------------------------------------------------------------------

[MIT License](https://opensource.org/licenses/mit-license.php)
[embadge]: http://embadge.io/
