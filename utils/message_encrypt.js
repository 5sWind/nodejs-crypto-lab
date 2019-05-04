const themis = require('jsthemis');

function encryptMessage(private_key, peer_public_key, message) {
    let sm = new themis.SecureMessage(new Buffer.from(private_key, "base64"), new Buffer.from(peer_public_key, "base64"));
    try {
        let encrypted_message = sm.encrypt(new Buffer.from(message)).toString("base64");
        return encrypted_message;
    } catch (error) {
        console.error("ERROR: ", error);
    }
}

exports.encryptMessage = encryptMessage();