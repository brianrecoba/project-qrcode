import qr from "qrcode-terminal";
import chalk from "chalk";


async function handle(err, result) {
    if (err) {
        console.log("error on application");
        return;
    }
    const isSmal = result.type == 2;

    qr.generate(result.link, { small: isSmal }, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso:\n"));
        console.log(qrcode)
    });
}

export default handle;