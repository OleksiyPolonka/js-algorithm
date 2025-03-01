const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer').default || require('inquirer');

const algorithmsDir = path.join(__dirname, './algorithms');

function getJsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getJsFiles(filePath));
    } else if (file.endsWith('.js')) {
      results.push(filePath);
    }
  });
  return results;
}

function mainMenu() {
  const jsFiles = getJsFiles(algorithmsDir);

  const relativeFiles = jsFiles.map(file => path.relative(algorithmsDir, file));
  const choices = [...relativeFiles, new inquirer.Separator(), 'Exit'];

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedAlgorithm',
        message: 'Select an algorithm to run:',
        choices: choices,
      },
    ])
    .then(answers => {
      if (answers.selectedAlgorithm === 'Exit') {
        console.log('Goodbye!');
        process.exit(0);
      }
      runAlgorithm(answers.selectedAlgorithm);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function runAlgorithm(relativePath) {
  const selectedPath = path.join(algorithmsDir, relativePath);
  delete require.cache[require.resolve(selectedPath)];

  require(selectedPath)();

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'afterRunOption',
        message: 'What would you like to do next?',
        choices: [
          'Repeat this algorithm',
          'Select another algorithm',
          'Exit'
        ],
      },
    ])
    .then(answer => {
      if (answer.afterRunOption === 'Repeat this algorithm') {
        runAlgorithm(relativePath);
      } else if (answer.afterRunOption === 'Select another algorithm') {
        mainMenu();
      } else {
        console.log('Goodbye!');
        process.exit(0);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

mainMenu();
