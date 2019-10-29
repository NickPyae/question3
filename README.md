# Question 3
## The following recursive code has a bug. How can you fix this and still retain the recursive pattern?

```javascript
var list = readHugeList();
var nextListItem = function() {
    var item = list.pop();
        if (item) {
            // process the list item...
            nextListItem();
        }
   };
}
```

#### Answer:
Given recursive code can potentially throw a stack overflow runtime error if the array list gets too large.

#### How to fix by still retaining the recursive pattern:
It can be fixed by wrapping recursive function inside `setTimeout` function as a callback. JavaScript event loop will queue the callback function which is recursive function inside event loop message queue instead of directly piling up on the call stack. All recursive calls will be handled by event loop instead of pushing and popping directly from call stack to avoid stack overflow error.

[Alternate implementation can be found inside src > index.js. ](src/index.js)

## Implementation
index.js is written in modern JavaScript ES6 syntaxes such as let, const and arrow function expressions.

## How to run
1. Download git to your machine from https://git-scm.com/downloads.
2. Clone this repo to your local machine by running `git clone https://github.com/NickPyae/question3.git`.
3. index.js is just to demonstrate how we can fix stack overflow error using setTimeout.
