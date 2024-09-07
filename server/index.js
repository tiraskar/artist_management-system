import app from './src/app.js';
import { config } from "./src/config/envConfig.js";

(function server() {
  app.listen(config.PORT, (error, server) => {
    if (error) throw error;
    console.log(`NODE_ENV: ${config.NODE_ENV}`);
    console.log(`Server is running on port ${config.PORT}`);
  });
})();