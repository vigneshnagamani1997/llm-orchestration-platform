import app from "./app";

import { connectDB }
from "./config/database";

import { env } from "./config/env";

async function bootstrap() {
  try {

    await connectDB();

    app.listen(env.port, () => {
      console.log(
        `API running on ${env.port}`
      );
    });

  } catch (error) {
    console.error(error);
  }
}

bootstrap();