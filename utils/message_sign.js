const themis = require('jsthemis');

function signMessage(private_key, peer_public_key, message) {
    let sm = new themis.SecureMessage(new Buffer.from(private_key, "base64"), new Buffer.from(peer_public_key, "base64"));
    try {
        let signed_message = sm.sign(message);
        return signed_message;
    } catch (error) {
        console.error("ERROR: ", error);
    }
}

export default signMessage;