<table>
  <tr>
    <td><h1>Kathmandu University Computer Club (KUCC)</h1></td>
    <td><img src="https://kucc.ku.edu.np/kucc-logo.png" width="200px" height="180px"/></td>
  </tr>
</table>

KUCC is a non-profit, independent club formed by students of the Department of Computer Science and Engineering in the year 1997.

<h2>KUCC Website</h2>
Welcome to the KUCC Website repository. KUCC Website is an open-source web application project for Kathmandu University Computer Club being built with Next.js for better customization and maintenance.

## Used Stacks
Website is built on Next Js using tailwind CSS.

## Features
We aim to implement the following features in our website:
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

# Installation
### Running locally in development mode

##### To get started, just clone the repository and run `pnpm install && pnpm dev`:
##### Note: Install pnpm if not installed (  `npm install -g pnpm` )
###### Remember: It might take some time to load the website in your first run! Have patience :)

    git clone https://github.com/kucc1997/kucc-website.git
    pnpm install
    pnpm dev

Note: If you are running on Windows run install --noptional flag (i.e. `pnpm install --no-optional`) which will skip installing fsevents.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `pnpm build` and run it with `pnpm start`:

    pnpm install
    pnpm build
    pnpm start

You should run `pnpm build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 pnpm start`).

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

<div>
    <h2>Happy Coding</h1>
    <img src="https://octodex.github.com/images/hula_loop_octodex03.gif" width="100px" height="100px"/>
</div>

## License

KUCC Website is BSD 3-Clause licensed, as found in the [LICENSE](LICENSE) file.
