import themis from 'jsthemis';

function verifyMessage(private_key, peer_public_key, signed_message) {
    let sm = new themis.SecureMessage(new Buffer.from(private_key, "base64"), new Buffer.from(peer_public_key, "base64"));
    try {
        let message = sm.verify(new Buffer.from(signed_message, "base64")).toString();
        return message;
    } catch (error) {
        console.error("ERROR: ", error);
    }
}

export default verifyMessage;