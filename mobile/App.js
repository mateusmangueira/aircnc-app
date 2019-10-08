import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

//Configuracoes para ignorar warnigs do webSocket, pode adicionar mais mensagens dentro da lista.
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return <Routes />
}
