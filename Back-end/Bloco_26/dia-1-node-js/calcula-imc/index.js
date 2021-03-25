const readlineSync = require("readline-sync");
const chalk = require("chalk");
const inquirer = require("inquirer");

async function imc() {
  console.log(
    chalk.bold.rgb(150, 105, 75).underline("\t\t\t OLÁ, DIGITE SEUS DADOS!\n\n")
  );

  const answers = await inquirer.prompt([
    {
      name: "height",
      type: "input",
      message: chalk.greenBright("Qual é a sua altura? "),
      validate: validateNumbers,
    },
    {
      name: "weight",
      type: "input",
      message: chalk.greenBright("Qual é o seu peso? "),
      validate: validateNumbers,
    },
  ]);

  calculateImc(answers);
}

function validateNumbers(input) {
  if (isNaN(Number(input))) {
    return "Digite um número";
  }
  return true;
}

function calculateImc({ height, weight }) {
  const calc = weight / Math.pow(height, 2);
  console.log(chalk.blue(`\nSeu IMC é ${calc.toFixed(2)} kg/m2\n`));

  situationImc(calc);
}

const situationImc = (r) => {
  console.log("\tIMC Situação");
  if (r < 18.5) {
    console.log(
      chalk.white(chalk.bgGray.underline.bold("Abaixo do peso (magreza)\n"))
    );
  } else if (r >= 18.5 && r <= 24.9) {
    console.log(chalk.green("Peso normal\n"));
  } else if (r >= 25.0 && r <= 29.9) {
    console.log(chalk.yellow("Acima do peso (sobrepeso)\n"));
  } else if (r >= 30.0 && r <= 34.9) {
    console.log(chalk.redBright("Obesidade grau I\n"));
  } else if (r >= 35.0 && r <= 39.9) {
    console.log(chalk.red("Obesidade grau II\n"));
  } else {
    console.log(chalk.bgRed("Obesidade graus III e IV\n"));
  }
};

imc();
