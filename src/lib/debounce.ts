// https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940

export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
    func: F,
    waitFor: number,
): (...args: Parameters<F>) => void {
    let timeout: NodeJS.Timeout;
    console.log("function running...");
    return (...args: Parameters<F>): void => {
        console.log("this does not get run, why?");
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), waitFor);
    };
}
