
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Modal, ModalBody } from 'ui/Modal';
import injectSheet, { ThemeProvider } from 'react-jss';
import theme from 'app/theme';
import qrcode from 'qrcode-js';

import classes from './classes';

@inject('share', 'controller')
@observer
class Share extends Component {
    close() {
        this.props.share.toggle(false);
    }

    renderContent() {
        var { classes, controller: { song } } = this.props;

        return (
            <div className={classes.container}>
                <h2>Share</h2>

                <p>
                    {song.name} - {
                        song.artists.map((e, index) => e.name).join()
                    }
                </p>

                <section>
                    <a href="">
                        <img
                            alt="Twitter"
                            className={classes.social}
                            src="assets/social-twitter.png"
                        />
                    </a>

                    <a href="">
                        <img
                            alt="Facebook"
                            className={classes.social}
                            src="assets/social-facebook.png"
                        />
                    </a>

                    <a href="">
                        <img
                            alt="Google"
                            className={classes.social}
                            src="assets/social-google.png"
                        />
                    </a>
                </section>

                <figure>
                    <img
                        className={classes.qrcode}
                        ref={ele => {
                            if (!ele) return;
                            var base64 = qrcode.toDataURL(`https://music.163.com/#/song?id=${song.id}`);
                            ele.src = base64;
                        }}
                    />

                    <figcaption>
                        WeChat
                    </figcaption>
                </figure>

                <a
                    href=""
                    className={classes.close}
                    onClick={
                        e => {
                            e.preventDefault();
                            this.close();
                        }
                    }
                >
                    <img
                        alt="Close Menus"
                        className={classes.close}
                        src="assets/close.png"
                    />
                </a>
            </div>
        );
    }

    render() {
        var { classes, share, controller: { song } } = this.props;

        if (!song.id) {
            return false;
        }

        return (
            <Modal
                show={share.show}
            >
                <ModalBody
                    className={classes.modal}
                >

                    <ThemeProvider theme={theme}>
                        {
                            this.renderContent()
                        }
                    </ThemeProvider>
                </ModalBody>
            </Modal>
        );
    }
}

export default injectSheet(classes)(Share);
