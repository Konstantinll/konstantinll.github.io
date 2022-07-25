import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Community from "../Components/Community";
import PostVk from "../Components/PostVk";
import PollVk from "../Components/PollVk";


export default class Blog extends Component {
    render() {
        return (
            <div className="zadnik">
                <Container className="pstr">
                    <div className="perednik">
                        <h2 className="zagolovok2 mb-5">Новости</h2>

                        <div className="colu5">
                            <div className="block_blog_l">
                                <Community />
                                <PollVk />
                            </div>
                            <div className="block_blog_r">
                                <PostVk />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
