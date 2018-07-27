
export default theme => {
    return {
        modal: {},

        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100vw',
            height: '100vh',
            background: 'rgba(255, 255, 255, .8)',

            '& h2': {
                fontFamily: 'HelveticaNeue-UltraLight',
                fontSize: 24,
                letterSpacing: 2,
                color: 'black',
            },

            '& p': {
                paddingBottom: 1,
                maxWidth: 400,
                marginTop: 0,
                marginBottom: 32,
                fontSize: 16,
                color: '#333',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },

            '& section img': {
                width: 96,
                height: 96,
            }
        },

        qrcode: {
            marginBottom: 64,
            background: '#ddd',

            '& img': {
                width: 128,
                height: 128,
            }
        },

        close: {
            '& img': {
                width: 48,
                height: 48,
            }
        },
    };
};
