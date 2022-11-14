# Kathmandu University Computer Club (KUCC)
KUCC is a non-profit, independent club formed by students of the Department of Computer Science and Engineering in the year 1997.

## KUCC Website
For now the kucc website was made using the wordpress ([wordpress website link](https://kucc.ku.edu.np/)). Making a website in wordpress had problems like customization and maintainance. So, KUCC Website is an open-source web application project for Kathmandu University Computer Club being built with [ReactJS](https://reactjs.org/).

## Used Stacks
Website is build on React Js.

## Features
We are trying to remake our old website into react. You can refer to our [old website](https://kucc.ku.edu.np/) for features.
### Phase 1
- Static Pages 
    - [ ] Homepage
    - [ ] Our Team Section
    - [ ] Code of Conduct Section
    - [ ] Contact Section
    - [ ] Events Section
    - [ ] Member Selection Section
    - [ ] Publications (Blogs, IT Express)
   
 - Dynamic functions
    - [ ] Connect register new member with firebase
    - [ ] Use arrays to display data in Static Pages

### Phase 2
- [ ] Creating admin pannel for publication and database inspection

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/kucc1997/kucc-website.git
    npm install
    npm run dev

Note: If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 npm start`).

## How to contribute?

- [Submit bugs and feature requests](https://github.com/kucc1997/kucc-website/issues)
- We also welcome code contribution to this project. To do the code contributions please follow these steps.
  - Choose an existing issue labelled as **help wanted**, **good first contribution**, **easy fix** or create your own issue.
  - Fork this repository.
  - Clone the forked repository to your machine.
  - Create a new branch named after the issue you're working on.
  - Commit your changes, push the changes to GitHub.
  - Open a pull request [here](https://github.com/kucc1997/kucc-website/pulls)

## Contributing
- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are greatly appreciated.


## License

KUCC Website is BSD 3-Clause licensed, as found in the [LICENSE](LICENSE) file.
