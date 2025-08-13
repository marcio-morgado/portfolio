export async function loadImages(imageModules) {
    const entries = await Promise.all(
        Object.entries(imageModules).map(async ([path, load]) => {
            const mod = await load();
            const meta = mod.default;

            // Create object key from filename without extension
            const key =
                path.split("/").pop()?.split(".")[0].toLowerCase() || "";

            //Generate alt text
            const alt = key
                .replace(/[-_]/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase());

            return [key, { ...meta, alt }];
        })
    );

    return Object.fromEntries(entries);
}
