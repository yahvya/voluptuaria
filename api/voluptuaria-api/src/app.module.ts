import {UserModule} from "./modules/user/user.module";
import { ConfigModule,  } from "@nestjs/config"
import {LangModule} from "./modules/lang-module/lang.module";
import {Module} from "@nestjs/common";
import { DatabaseModule } from "./modules/database-module/database.module"
import { MailModule } from "./modules/mail-module/mail.module"

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({isGlobal: true}),
    LangModule,
    DatabaseModule,
    MailModule,
  ]
})
export class AppModule {}
