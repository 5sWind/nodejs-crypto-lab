import themis from 'jsthemis';

function secureKeyGen() {
    let key_pair = new themis.KeyPair();
    // Currently Themis is using secp256r1 for their crypto basis.
    let private_key = key_pair.private().toString("base64");
    let public_key = key_pair.public().toString("base64");
    return { private_key, public_key };
}

export default secureKeyGen;