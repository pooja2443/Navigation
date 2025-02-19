/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/../screen/HomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/../screen/homeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/indexDrawer` | `/indexDrawer`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/indexStack` | `/indexStack`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/../screen/HomeScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/../screen/homeScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/indexDrawer` | `/indexDrawer`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/indexStack` | `/indexStack`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/../screen/HomeScreen${`?${string}` | `#${string}` | ''}` | `/../screen/homeScreen${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/indexDrawer${`?${string}` | `#${string}` | ''}` | `/indexDrawer${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/indexStack${`?${string}` | `#${string}` | ''}` | `/indexStack${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/../screen/HomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/../screen/homeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/indexDrawer` | `/indexDrawer`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/indexStack` | `/indexStack`; params?: Router.UnknownInputParams; };
    }
  }
}
