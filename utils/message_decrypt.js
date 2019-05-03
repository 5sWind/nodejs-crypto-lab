const themis = require('jsthemis');

function decryptMessage(private_key, peer_public_key, encrypted_message) {
    let sm = new themis.SecureMessage(new Buffer.from(private_key, "base64"), new Buffer.from(peer_public_key, "base64"));
    try {
        let decrypted_message = sm.decrypt(new Buffer.from(encrypted_message, "base64")).toString();
        return decrypted_message;
    } catch (error) {
        console.error("ERROR: ", error);
    }
}

export default decryptMessage;