import socket from '../services/socket'

// socket.emit('create:product', {
//     submitData: {
//         name: 'Prueba',
//         stock: 10,
//         image: 'http://dummyimage.com/155x195.png/ff4444/ffffff',
//     },
// })

function SocketProducts() {
    socket.emit('read:products', {})

    socket.on('products', (items) => {})

    return (
        <div className="products">
            <div className="products__items"></div>
        </div>
    )
}

export default SocketProducts
