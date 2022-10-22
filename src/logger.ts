import chalk from 'chalk';

const log = console.log;

const http = (...messages: []) => {
  log(chalk.bgBlue.bold(' HTTP ', messages));
};

const warn = (...messages: []) => {
  log(chalk.bgYellow.bold(' WARN ', messages));
};

const info = (...messages: []) => {
  log(chalk.bgMagenta.bold(' INFO ', messages));
};

const error = (...messages: []) => {
  log(chalk.bgRed.bold(' ERROR ', messages));
};

export const logger = { log, http, warn, info, error };
