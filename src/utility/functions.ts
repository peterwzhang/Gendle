export function randomItem(array: readonly any[]) {
    return array[Math.floor(Math.random() * array.length)];
}

export function difference(s: Set<string>, a: string[]): Set<string> {
    const newSet = new Set<string>(s);
    a.forEach((x) => newSet.delete(x));
    return newSet;
}
