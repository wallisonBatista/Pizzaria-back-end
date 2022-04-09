import crypto from 'crypto'
import multer from 'multer';

import { extname, resolve } from 'path';

export default {
    //destino que a foto será salva
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");

                    //nome nunca se repitir
                    const fileName = `${fileHash}-${file.originalname}`

                    return callback(null, fileName)
                }
            })
        }
    }
}
