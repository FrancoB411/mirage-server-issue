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

Visit /sales-quotes
You should see a list of items. 
Click the first item. 
You should transition to /sales-quote/1
Open dev tools
refresh the page.
In console you should see the following error:
"Mirage: Your Ember app tried to GET '/sales-quotes/1',
         but there was no route defined to handle this request."

remove the namesspace from adapters/application.js and mirage/config.js
Do the above again, and it there should be no error. 

In test env, it fails with and without the namespace

### running tests
* Visit your app at [http://localhost:4200](http://localhost:4200/tests).
