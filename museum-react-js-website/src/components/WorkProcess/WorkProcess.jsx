import React from "react";
import "./WorkProcess.css";
import WorkProcessVid from "../../assets/videos/WorkProcessVid.mp4";
import { ControlBar, Player, PlayToggle } from 'video-react';
import 'video-react/dist/video-react.css';

const WorkProcess = () => {
    return (
        <div className="workprocess section__padding">
            <div className="container">
                <div className="workprocess__content text__center">
                    <h2 className="section__title text__cap">Aprenda mais sobre o nosso Planeta</h2>
                    <p className="para__text">Descubra as maravilhas dos oceanos profundos, as vastas paisagens dos continentes, a extensa fauna e os segredos dos fenômenos naturais.</p>

                    <div className="vid__container">
                        <Player autoPlay loop muted src={WorkProcessVid}>
                            <ControlBar autoHide={false} disableDefaultControls={true}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess;