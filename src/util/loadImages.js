export async function loadImages(imageModules) {
    const entries = await Promise.all(
        Object.entries(imageModules).map(async ([path, load]) => {
            const mod = await load();
            const meta = mod.default;

            // Create a unique key including subfolder path
            // e.g. "../assets/projects/nasdaq/hero.png" → "nasdaq/hero"
            const parts = path
               .replace(/^.*\/data\/projects\/([^/]+)\/assets\//, "$1/") // remove leading path up to assets/
                .split(".");
            parts.pop(); // remove extension
            const key = parts.join(".").toLowerCase(); // keep subfolder/filename

            return [key, { ...meta }];
        })
    );

    return Object.fromEntries(entries);
}