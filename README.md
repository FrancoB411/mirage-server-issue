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

  1. Visit /sales-quotes
  1. You should see a list of items. 
  1. Click the first item. 
  1. You should transition to /sales-quote/1
  1. Open dev tools
  1. refresh the page.
  1. In console you should see the following error:
  1. "Mirage: Your Ember app tried to GET '/sales-quotes/1',
         but there was no route defined to handle this request."

remove the namesspace from adapters/application.js and mirage/config.js
Do the above again, and it there should be no error. 

In test env, it fails with and without the namespace

### running tests
* Visit your app at [http://localhost:4200/tests](http://localhost:4200/tests).
