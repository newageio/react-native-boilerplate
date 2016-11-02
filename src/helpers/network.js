import Relay from 'react-relay';

let network;

let tokenInjected = false;

export function setToken(token) {
  if (network && !tokenInjected) {
    network._init = {
      ...network._init,
      headers: { ...network._init.headers, 'x-access-token': token },
    };
  }
}

export function init(url, token) {
  if (!network) {
    network = new Relay.DefaultNetworkLayer(url, {
      headers: {
        'x-access-token': token,
      }
    });
    Relay.injectNetworkLayer(network);
  }
}
