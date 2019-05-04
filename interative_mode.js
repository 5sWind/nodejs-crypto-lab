const secureKeyGen = require("./utils/secp256r1_gen");
const encryptMessage = require("./utils/message_encrypt");
const decryptMessage = require("./utils/message_decrypt");
const signMessage = require("./utils/message_sign");
const verifyMessage = require("./utils/message_verify");

console.log("==== Generating keypairs. ====")
let privateKey = secureKeyGen().private_key;
let publicKey = secureKeyGen().public_key;
console.log("Generated Private Key: ", { privateKey });
console.log("Generated Public Key: ", { publicKey });

console.log("==== Encrypting Message. ====")
let encryptedMessage = encryptMessage(privateKey, publicKey, process.argv[2]);
console.log("Successfully encrypted message: ", { encryptedMessage });

console.log("==== Decrypting Message. ====")
let decryptedMessage = decryptMessage(privateKey, publicKey, encryptedMessage);
console.log("Successfully decrypted message: ", { decryptedMessage });

console.log("==== Signing Message. ====")
let signedMessage = signMessage(privateKey, publicKey, process.argv[2]);
console.log("Successfully signed message: ", { signedMessage });

console.log("==== Verifying Message. ====")
let verifiedMessage = verifyMessage(privateKey, publicKey, signedMessage);
console.log("Successfully verified message: ", { verifiedMessage });