import prompt from "prompt";
import mainPrompt from "../src/prompts/prompt-main.js"


async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) console.log("Você escolheu o QRCode");
        if (choose.select == 2) console.log("Você escolheu o Passwords");
    })
    prompt.start();
}

main();