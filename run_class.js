const fs = require('fs/promises');
const path = require('path');
const { exec } = require('child_process');

const dirPath = path.join(process.cwd(), 'src/apps_cores');

(async () => {
    try {
        const files = await fs.readdir(dirPath);

        const tsFiles = files.filter(file => file.endsWith('.ts'));

        tsFiles.forEach(file => {
            const filePath = path.join(dirPath, file);
            console.log(`Ejecutando ${filePath}`);

            exec(`ts-node ${filePath}`, (err, stdout, stderr) => {
                if (err) {
                    console.error(`Error ejecutando ${filePath}:`, err);
                    return;
                }

                if (stderr) {
                    console.error(`Errores de ejecución en ${filePath}:`, stderr);
                    return;
                }

                console.log(`Resultado de ${filePath}:\n`, stdout);
            });
        });
    } catch (err) {
        console.error('Error leyendo el directorio:', err);
    }
})();
