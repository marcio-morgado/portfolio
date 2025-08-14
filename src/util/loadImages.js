//  made with the help of ChatGPT. Function takes

export async function loadImages(imageModules) {
    const entries = await Promise.all(
        Object.entries(imageModules).map(async ([path, load]) => {
            const mod = await load();
            const meta = mod.default;

            // Create object key from filename without extension
            const key =
                path.split("/").pop()?.split(".")[0].toLowerCase() || "";

            return [key, { ...meta }];
        })
    );

    return Object.fromEntries(entries);
}
