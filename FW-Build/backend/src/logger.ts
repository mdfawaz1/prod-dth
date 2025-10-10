import chalk from 'chalk';

export const log = {
  // Server startup and status messages
  server: (msg: string) => console.log(chalk.bold.cyan('🚀 [SERVER]'), chalk.cyan(msg)),
  
  // Database operations
  db: (msg: string) => console.log(chalk.bold.green('[DATABASE]'), chalk.green(msg)),
  
  // Success messages
  success: (msg: string) => console.log(chalk.bold.green('[SUCCESS]'), chalk.green(msg)),
  
  // Information messages
  info: (msg: string) => console.log(chalk.bold.blue('[INFO]'), chalk.blue(msg)),
  
  // Warning messages
  warn: (msg: string) => console.log(chalk.bold.yellow('[WARNING]'), chalk.yellow(msg)),
  
  // Error messages
  error: (msg: string) => console.log(chalk.bold.red('[ERROR]'), chalk.red(msg)),
  
  // API requests and responses
  api: (msg: string) => console.log(chalk.bold.magenta('[API]'), chalk.magenta(msg)),
  
  // File operations
  file: (msg: string) => console.log(chalk.bold.cyan('[FILE]'), chalk.cyan(msg)),
  
  // GridFS operations
  gridfs: (msg: string) => console.log(chalk.bold.blue('[GRIDFS]'), chalk.blue(msg)),
  
  // Debug messages
  debug: (msg: string) => console.log(chalk.bold.green('[DEBUG]'), chalk.green(msg)),
  
  // Upload operations
  upload: (msg: string) => console.log(chalk.bold.green('[UPLOAD]'), chalk.green(msg)),
  
  // Download operations
  download: (msg: string) => console.log(chalk.bold.blue('[DOWNLOAD]'), chalk.blue(msg)),
  
  // Configuration updates
  config: (msg: string) => console.log(chalk.bold.magenta('[CONFIG]'), chalk.magenta(msg)),
  
  // Health check
  health: (msg: string) => console.log(chalk.bold.green('[HEALTH]'), chalk.green(msg))
};

// Enhanced logging with request details
export const logRequest = (method: string, path: string, status?: number) => {
  const methodColor = method === 'GET' ? chalk.green : 
                     method === 'POST' ? chalk.blue : 
                     method === 'PUT' ? chalk.yellow : 
                     method === 'DELETE' ? chalk.red : chalk.white;
  
  const statusColor = !status ? chalk.gray :
                     status < 300 ? chalk.green :
                     status < 400 ? chalk.yellow :
                     chalk.red;
  
  console.log(
    chalk.bold.magenta('🔌 [API]'),
    methodColor.bold(method.padEnd(6)),
    chalk.cyan(path),
    status ? statusColor(`[${status}]`) : ''
  );
};

// Startup banner
export const showStartupBanner = (port: number) => {
  console.log(chalk.bold.cyan('\n' + '='.repeat(60)));
  console.log(chalk.bold.cyan('🏢 Digital Twin Hypervisor - BACKEND SERVER'));
  console.log(chalk.bold.cyan('='.repeat(60)));
  console.log(chalk.green(`🚀 Server running on: ${chalk.bold.underline(`http://localhost:${port}`)}`));
  console.log(chalk.blue(`📊 Health check: ${chalk.underline(`http://localhost:${port}/api/health`)}`));
  console.log(chalk.magenta(`📁 Models API: ${chalk.underline(`http://localhost:${port}/api/models`)}`));
  console.log(chalk.yellow(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`));
  console.log(chalk.cyan('='.repeat(60) + '\n'));
}; 