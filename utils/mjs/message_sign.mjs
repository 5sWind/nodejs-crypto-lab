import themis from 'jsthemis';

function signMessage(private_key, peer_public_key, message) {
    let sm = new themis.SecureMessage(new Buffer.from(private_key, "base64"), new Buffer.from(peer_public_key, "base64"));
    try {
        let signed_message = sm.sign(new Buffer.from(message)).toString("base64");
        return signed_message;
    } catch (error) {
        console.error("ERROR: ", error);
    }
}

export default signMessage;