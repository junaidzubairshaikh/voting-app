
declare namespace NodeJS {
    export interface ProcessEnv {
      NG_APP_ENV: string;
      NG_APP_IS_ADMIN: string;
      NG_APP_SECRET: string;
    }
}