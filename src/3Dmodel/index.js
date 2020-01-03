import React from 'react';
import * as THREE from 'three'
const width = 800;
const height = 800;
export default class Three extends React.PureComponent {
    constructor(props, context) {
        super(props, context)
        this.state={}
        this.mount = null
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        })
        this.camera = null
        this.origPoint = new THREE.Vector3(0, 0, 0)
        this.pointLight = new THREE.PointLight( 0xffffff, 1, 2000 )
        this.ambientLight = new THREE.AmbientLight( 0X333333 )
        this.cube = null
        this.scene = null
    }
    
    componentDidMount() {
      this.createWorld()
    }

    createWorld = () => {
        this.initRender()
        this.initCamera()
        this.initLight()
        this.initObject()
        this.initScene()
        this.threeRedner()
    }
    
    initRender = () => {
        const renderer = this.renderer
        renderer.setSize(width, height)
        renderer.setClearColor('#000', 1.0)
        renderer.setPixelRatio(window.devicePixelRatio)
        this.mount.appendChild(renderer.domElement)
    }

    initCamera = () => {
        let camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000)
        camera.position.set(200, 400, 600)
        camera.up.set(0, 1, 0)
        camera.lookAt(this.origPoint)
        this.camera = camera
    }

    initLight = () => {
        this.pointLight.position.set(70, 112, 98)
    }

    initObject = () => {
        const geometry = new THREE.BoxGeometry( 100, 100, 100)
        const material = new THREE.MeshLambertMaterial({color: 0xff0000})
        this.cube = new THREE.Mesh( geometry, material)
        this.cube.position.set(0, 0, 0)
    }

    initScene = () => {
        this.scene = new THREE.Scene()
        this.scene.add(this.pointLight)
        this.scene.add(this.ambientLight)
        this.scene.add(this.cube)
    }

    threeRedner = () => {
        const renderer = this.renderer
        renderer.clear()
        renderer.render(this.scene, this.camera)
        this.cube.rotation.x += 0.005
        this.cube.rotation.y += 0.005
        requestAnimationFrame(this.threeRedner)
    }





    render(){
        return <div
            style={{width: "400px", height: '400px'}}
            ref={mount => {this.mount = mount}}
            >dsad321321sa3233213212</div>
    }           
}