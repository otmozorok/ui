export namespace previewMain {
    let decorators: ((story: any, { globals }: {
        globals: any;
    }) => any)[];
    namespace parameters {
        namespace controls {
            namespace matchers {
                let color: RegExp;
                let date: RegExp;
            }
        }
    }
    let tags: string[];
    namespace initialGlobals {
        let theme: string;
        namespace backgrounds {
            let value: string;
        }
    }
    namespace globalTypes {
        export namespace theme_1 {
            namespace toolbar {
                export let dynamicTitle: boolean;
                export let icon: string;
                export { items };
            }
        }
        export { theme_1 as theme };
    }
}
declare const items: string[];
export {};
