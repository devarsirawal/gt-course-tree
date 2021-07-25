# Georgia Tech Course Tree Visualizer 🌳

> The Georgia Tech Course Tree Visualizer lets you see what classes you may need to register for a course (prerequisites) and what classes you could possibly take in the future if you complete that course (postrequisites)!

<br>

<div align="center">
    <img src="https://github.com/devarsi-rawal/gt-course-tree/blob/master/public/screenshot.PNG" alt="home"/>
</div>

## 🚀 Running Locally

### Installing Dependencies
To install the dependencies needed to run the project locally, you'll use Yarn. In the same terminal that you cloned the repository with, run:

```
yarn install
```
This may take a couple minutes and will create a new folder called node_modules with all of the dependencies installed within.

### Running the Application
Once you have installed the dependencies, you can start a local development version of the frontend app by running:

```
yarn start
```

The app should then be viewable at http://localhost:3000, which you can open a new browser tab to view.

### 💽 Data

You can find the crawler used to provide requisite data for each course [here](https://github.com/devarsi-rawal/gt-course-tree-crawler).

### 🤝 Credits
This project was heavily inspired by the scheduling application from [NUSMods](https://github.com/nusmodifications/nusmods). You can find the original code for the course tree [here](https://github.com/nusmodifications/nusmods/blob/master/website/src/views/modules/ModuleTree.tsx).
