/** @jsxImportSource @emotion/react */
import React from "react";
import { _ } from "chainedcss";
import { OContainer } from "chunkyui/components/Container";

const Home: React.FC = () => {
    return (
        <OContainer.base>
            <h1 {..._.textCenter()}>oh hi mark</h1>
            <p>oh hi mark</p>
        </OContainer.base>
    );
};

export default Home;
