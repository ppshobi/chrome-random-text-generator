# Random Fake Data Generator for Chrome (Beta)

This is a google chrome extension which will generate a random text of given length, and will paste the generated text into the last active input form field. 

Built on top on faker.js. Huge thanks to @marak/faker.js

### Built using
Node, TypeScript, fakerjs
## Installation

Goto Chrome Webstore and Search for Random Fake Data Generator. 
Use `Alt + Shift + I` to insert fakeness.
## Building Instructions

1. clone this repo 
`git clone https://github.com/ppshobi/chrome-random-text-generator.git`
2. `cd` into the repo
3. `npm install` to install node modules
4.  - `npm run build` - Generates production application
    - `npm run dev` - Generates development version

## Todo
 - Write Tests?
 - Support for various data types. such as Name, Credit Card, Address, Phone Number etc... (The reason I chose faker js is to support this kind of functionality)
 - Also, add a context menu option to insert text.
 - Refactor codebase more into Typescript way. (Yes... I am still a noob here !)
## Let me know what you guys think
  Honestly, this project was my effort to learn TypeScript, as well as chrome API's, Still more than halfway to go. I will try to keep adding features.
  
 feel completely free to make PR's and I would love em to see up here. And let me know what you guys think!