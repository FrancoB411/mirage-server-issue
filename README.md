# mirage-issue

Repo recreating Mirage behavior where it does not recognize a namespaced route when you refresh the page. 

## Installation

* `git clone <repository-url>` this repository
* `cd mirage-issue`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### To Manually Recreate the bug

  1. Visit /sales-quotes. You should see a list of items. 
  1. Click the first item. You should transition to /sales-quote/1
  1. Open dev tools
  1. Refresh the page. In console you should see the following error: "Mirage: Your Ember app tried to GET '/sales-quotes/1',
         but there was no route defined to handle this request."
  1. Remove namespace from adapters/application.js and mirage/config.js
  1. Do the above steps again, and it there should be no error. 


### running tests
* Visit your app at [http://localhost:4200/tests](http://localhost:4200/tests).


NOTE: In test env, the error appears both with and without the namespace.


