/*
 * The UDP packet listener
 * @flow
 */

import * as dgram from 'dgram';

/* startListening(port)
 *
 * @param {number} port The port to bind to.
 */
export function startListening(port: int) {
    socket = dgram.createSocket('udp4');
    socket.bind(port);
    socket.setBroadcast(true);
    socket.once('listening', () => {
        // Socket ready

        // We don't send UDP packets so we don't actually care about being able
        // to send messages.
    });

    socket.on('message', (msg, info) => {
        // Recieved message
    });
}

