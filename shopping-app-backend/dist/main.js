"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const nestjs_pino_1 = require("nestjs-pino");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    await app.listen(app.get(config_1.ConfigService).getOrThrow('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map