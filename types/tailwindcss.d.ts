import "app/globals.css";

declare module "app/globals.css" {
  interface Theme {
    extend: {
      colors: {
        primary: Record<string, string>;
        seconds: Record<string, string>;
      };
    };
  }
}
