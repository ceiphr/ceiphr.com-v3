import React from 'react';
import { Plane, useCurtains } from 'react-curtains';

const basicVs = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    // those are the mandatory attributes that the lib sets
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    // our texture matrix uniform (this is the lib default name, but it could be changed)
    uniform mat4 uTextureMatrix0;

    // if you want to pass your vertex and texture coords to the fragment shader
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    void main() {
    // get the vertex position from its attribute
    vec3 vertexPosition = aVertexPosition;
    // set its position based on projection and model view matrix
    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

    // set the varying variables
    // thanks to the texture matrix we will be able to calculate accurate texture coords
    // so that our texture will always fit our plane without being distorted
    vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;
    vVertexPosition = vertexPosition;
    }
`;


const basicFs = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    // get our varying variables
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    // the uniform we declared inside our javascript
    uniform float uTime;

    // our texture sampler (this is the lib default name, but it could be changed)
    uniform sampler2D uSampler0;

    void main() {
    // get our texture coords
    vec2 textureCoord = vTextureCoord;

    // displace our pixels along both axis based on our time uniform and texture UVs
    // this will create a kind of water surface effect
    // try to comment a line or change the constants to see how it changes the effect
    // reminder : textures coords are ranging from 0.0 to 1.0 on both axis
    const float PI = 3.141592;

    textureCoord.x += (
        sin(textureCoord.x * 10.0 + ((uTime * (PI / 3.0)) * 0.031))
        + sin(textureCoord.y * 10.0 + ((uTime * (PI / 2.489)) * 0.017))
        ) * 0.0075;

    textureCoord.y += (
        sin(textureCoord.y * 20.0 + ((uTime * (PI / 2.023)) * 0.023))
        + sin(textureCoord.x * 20.0 + ((uTime * (PI / 3.1254)) * 0.037))
        ) * 0.0125;
            
    gl_FragColor = texture2D(uSampler0, textureCoord);
    }
`;

const HeroPlane = ({ children, isFullheight = false }) => {
    const basicUniforms = {
        time: {
            name: "uTime",
            type: "1f",
            value: 0
        }
    };

    const onRender = (plane) => {
        plane.uniforms.time.value++;
    };

    const onPlaneReady = (plane) => {
        plane.scale.x = 1.05;
        plane.scale.y = 1.05;
    };

    useCurtains((curtains) => {
        // force the curtains instance to update its bounding rect values
        curtains.resize();
    });

    return (
        <Plane
            className={(isFullheight ? "fullheight-heroplane" : "heroplane")}

            // plane init parameters
            vertexShader={basicVs}
            fragmentShader={basicFs}
            uniforms={basicUniforms}
            watchScroll={false}

            // plane events
            onRender={onRender}
            onReady={onPlaneReady}
        >
            {children}
        </Plane>
    )
}

export default HeroPlane
