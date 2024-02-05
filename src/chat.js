
export function createConnection(serverUrl, roomId) {
    const connection = {
        connect: () => {
            console.log('✅ Подключение к комнате "' + roomId + '" по адресу ' + serverUrl + '...');
        },
        disconnect: () => {
            console.log('❌ Отключение от комнаты "' + roomId + '" по адресу ' + serverUrl);
        },
    };

    return connection;
}
